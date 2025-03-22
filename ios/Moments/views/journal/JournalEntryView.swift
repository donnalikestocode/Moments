import SwiftUI

struct JournalEntryView: View {
    @EnvironmentObject var navigationState: NavigationBarModel
    @State private var gratitudeText: String = ""
    @State private var photos: [UIImage] = []
    @State private var currentScreen: Int = 1 
    
    var body: some View {
        ZStack {

            Color(red: 0.87, green: 0.91, blue: 0.91)
                .ignoresSafeArea()
            
            VStack {
                switch currentScreen {
                case 1:
                    TodayQuoteView(onNext: { currentScreen = 2 })
                case 2:
                    PhotosAndGratitudeView(gratitudeText: $gratitudeText, onNext: { currentScreen = 3 })
                case 3:
                    FlowerSelectionView(onSave: {
                        print("Gratitude saved: \(gratitudeText)")
                        navigationState.showNavBar = true
                    })
                default:
                    EmptyView()
                }
            }
            .padding()
        }
        .onAppear {
            navigationState.showNavBar = false
        }
        .onDisappear {
            navigationState.showNavBar = true
        }
    }
}

// Screen 1: Today’s Quote
struct TodayQuoteView: View {
    var onNext: () -> Void

    var body: some View {
        VStack {
            MomentWindowView(title: "today:", headerColor: Color(red: 0.65, green: 0.82, blue: 0.55)) {
                Text("I'm in no rush.\nI will take the scenic route.")
                    .font(.custom("Cute Notes", size: 18))
                    .padding()
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

// Screen 2: Photos and Gratitude Entry
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

// Screen 3: Flower Selection
struct FlowerSelectionView: View {
    var onSave: () -> Void

    var body: some View {
        VStack {
            MomentWindowView(title: "flowers!", headerColor: Color(red: 0.93, green: 0.75, blue: 0.38)) {
                VStack {
                    Text("What would you like to grow in your garden today?")
                        .font(.custom("Cute Notes", size: 18))
                        .padding(.bottom, 10)
                    Image("roses")
                        .resizable()
                        .scaledToFit()
                        .frame(height: 100)
                    Text("roses")
                        .font(.custom("Cute Notes", size: 20))
                }
                .padding()
            }

            Button(action: onSave) {
                Text("Let's Plant!")
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color(.systemGray4))
                    .cornerRadius(10)
            }
            .padding()
        }
    }
}

struct JournalEntryView_Previews: PreviewProvider {
    static var previews: some View {
        JournalEntryView()
            .environmentObject(NavigationBarModel())  // Mock environment object
    }
}
