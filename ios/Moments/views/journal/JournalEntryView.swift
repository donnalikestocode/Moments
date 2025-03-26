import SwiftUI

struct JournalEntryView: View {
    @EnvironmentObject var navigationState: NavigationBarModel
    @EnvironmentObject var flowerViewModel: FlowerViewModel
    
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
                    let flowerSelectionViewModel = FlowerSelectionViewModel(
                        onSave: { flower in
                            print("Gratitude saved: \(gratitudeText)")
                            flowerViewModel.addFlower(type: flower.type, image: flower.image)
                            navigationState.navigateTo(.garden)
                            currentScreen = 1
                        },
                        onBack: { currentScreen = 2 }
                    )
                    FlowerSelectionView(viewModel: flowerSelectionViewModel)
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
            .environmentObject(FlowerViewModel())
    }
}
