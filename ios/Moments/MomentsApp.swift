import SwiftUI
import CoreData

@main
struct MomentsApp: App {
    let persistenceController = PersistenceController.shared

    @StateObject var navigationState = NavigationState()

    var body: some Scene {
        WindowGroup {
              ContentView()
                .environmentObject(navigationState)
        }
    }
}
