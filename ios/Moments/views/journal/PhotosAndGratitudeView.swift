import SwiftUI

struct PhotosAndGratitudeView: View {
    @Binding var gratitudeText: String
    var onNext: () -> Void

    var body: some View {
        VStack {
            // Photos Window
            MomentWindowView(title: "photos:", headerColor: Color(red: 0.89, green: 0.72, blue: 0.76)) {
                Button(action: {
                    print("Add Photos")
                }) {
                    Text("Add Photos")
                        .font(.custom("Cute Notes", size: 18))
                        .padding()
                        .frame(maxWidth: .infinity, minHeight: 100)
                        .background(Color(.systemGray6))
                        .cornerRadius(10)
                }
            }

            // Gratitude Window
            MomentWindowView(title: "gratitude:", headerColor: Color(red: 0.59, green: 0.80, blue: 0.94)) {
                TextEditor(text: $gratitudeText)
                    .font(.custom("Cute Notes", size: 18))
                    .frame(height: 100)
                    .padding()
                    .background(Color(.systemGray6))
                    .cornerRadius(10)
            }

            Button(action: onNext) {
                Text("Next")
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color(.systemGray4))
                    .cornerRadius(10)
            }
            .padding()
        }
    }
}
