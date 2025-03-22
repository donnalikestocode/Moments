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
                    PhotosAndGratitudeView(
                        gratitudeText: $gratitudeText,
                        onNext: { currentScreen = 3 },
                        onBack: {currentScreen = 1}
                    )
                case 3:
                    FlowerSelectionView(
                        onSave: {print("Gratitude saved: \(gratitudeText)")
                            navigationState.navigateTo(.garden)
                            currentScreen = 1 
                        },
                        onBack: {currentScreen = 2})
                default:
                    EmptyView()
                }
            }
//            .padding()
        }
        .onAppear {
            navigationState.showNavBar = false
        }
        .onDisappear {
            navigationState.showNavBar = true
        }
    }
}

struct JournalEntryView_Previews: PreviewProvider {
    static var previews: some View {
        JournalEntryView()
            .environmentObject(NavigationBarModel()) 
    }
}
