import SwiftUI

struct ContentView: View {
    @EnvironmentObject var navigationState: NavigationBarModel
    @StateObject var flowerViewModel = FlowerViewModel()

    var body: some View {
        NavigationView {
            ZStack {
                switch navigationState.currentScreen {
                case .garden:
                    GardenView()
                        .environmentObject(flowerViewModel)
                case .journal:
                    JournalEntryView()
                        .environmentObject(flowerViewModel)
                case .moments:
                    MomentsGridView()
                }

                if navigationState.showNavBar {
                    VStack {
                        Spacer()
                        NavigationBar(selectedTab: .constant(navigationState.currentScreen.rawValue))
                    }
                    .transition(.move(edge: .bottom))
                }
            }
            .ignoresSafeArea()
        }
        .environmentObject(flowerViewModel) 
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environmentObject(NavigationBarModel())
    }
}
