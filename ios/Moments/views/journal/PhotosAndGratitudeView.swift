import SwiftUI

struct PhotosAndGratitudeView: View {
    
    @Binding var gratitudeText: String
    
    @State private var images: [UIImage] = []
    @State private var showImagePicker = false
    @State private var isKeyboardVisible = false
    
    var onNext: () -> Void
    var onBack: () -> Void
    
    var body: some View {
        ScrollView {
            
            Spacer()
                .padding(.bottom, 50)
            
            Text("What are you grateful for today?")
                .font(.custom("Cute Notes", size: 18))
                .frame(maxWidth: .infinity)
                .cornerRadius(10)
            
            Spacer()
                .padding(.bottom, 10)
            
            VStack(spacing: 20) {
                // Photos Window
                MomentWindowView(title: "photos:", headerColor: Color(red: 0.89, green: 0.72, blue: 0.76)) {
                    VStack {
                        ScrollView(.horizontal) {
                            HStack {
                                ForEach(images, id: \.self) { image in
                                    Image(uiImage: image)
                                        .resizable()
                                        .scaledToFit()
                                        .frame(width: 200, height: 200)
                                        .clipShape(RoundedRectangle(cornerRadius: 8))
                                        .padding(5)
                                }
                            }
                        }
                        Button(action: {
                            showImagePicker = true
                        }) {
                            Text("+ Add Photos")
                                .font(.custom("Cute Notes", size: 18))
                                .padding()
                                .frame(maxWidth: .infinity)
                                .background(Color(.systemGray6))
                                .cornerRadius(10)
                        }
                    }
                }
                .sheet(isPresented: $showImagePicker) {
                    ImagePicker(images: $images)
                }
                
                // Gratitude Window
                MomentWindowView(title: "gratitude:", headerColor: Color(red: 0.59, green: 0.80, blue: 0.94)) {
                    TextEditor(text: $gratitudeText)
                        .font(.custom("Cute Notes", size: 18))
//                        .frame(height: 300)
                        .frame(height: isKeyboardVisible ? 250 : 100)
                        .padding()
                        .background(Color(.systemGray6))
                        .cornerRadius(10)
                        .onTapGesture {
                            // Make sure the TextEditor is focused when tapped
                            isKeyboardVisible = true
                        }
                }
                
                HStack {
                    Button(action: onBack) {
                        Text("Back")
                            .padding()
                            .frame(maxWidth: .infinity)
                            .background(Color(.systemGray4))
                            .cornerRadius(10)
                            .font(.custom("Cute Notes", size: 18))
                    }
                    
                    Button(action: onNext) {
                        Text("Next")
                            .padding()
                            .frame(maxWidth: .infinity)
                            .background(Color(.systemGray4))
                            .cornerRadius(10)
                            .font(.custom("Cute Notes", size: 18))
                    }
                    
                }
                .padding()
            }
            .onTapGesture {
                // Dismiss the keyboard when tapping outside the text box
                UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
                isKeyboardVisible = false
            }
            .onAppear {
                // Add keyboard observers when the view appears
                NotificationCenter.default.addObserver(forName: UIResponder.keyboardWillShowNotification, object: nil, queue: .main) { _ in
                    isKeyboardVisible = true
                }
                
                NotificationCenter.default.addObserver(forName: UIResponder.keyboardWillHideNotification, object: nil, queue: .main) { _ in
                    isKeyboardVisible = false
                }
            }
            .onDisappear {
                // Remove keyboard observers when the view disappears
                NotificationCenter.default.removeObserver(self, name: UIResponder.keyboardWillShowNotification, object: nil)
                NotificationCenter.default.removeObserver(self, name: UIResponder.keyboardWillHideNotification, object: nil)
            }
            .animation(.easeInOut, value: isKeyboardVisible)  // Smooth transition
        }
    }
}

struct PhotosAndGratitudeView_Previews: PreviewProvider {
    static var previews: some View {
        PhotosAndGratitudeView(gratitudeText: .constant(""), onNext: {}, onBack: {})
            .environmentObject(NavigationBarModel())
    }
}
