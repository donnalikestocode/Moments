import SwiftUI

struct ContentView: View {
    @EnvironmentObject var navigationState: NavigationBarModel

    var body: some View {
        NavigationView {
            ZStack {
                switch navigationState.currentScreen {
                case .garden:
                    GardenView()
                case .journal:
                    JournalEntryView()
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
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environmentObject(NavigationBarModel())
    }
}
