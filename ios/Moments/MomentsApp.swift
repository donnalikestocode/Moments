import SwiftUI
import CoreData

@main
struct MomentsApp: App {
    let persistenceController = PersistenceController.shared

    @StateObject var navigationBarModel = NavigationBarModel()

    var body: some Scene {
        WindowGroup {
              ContentView()
                .environmentObject(navigationBarModel)
        }
    }
}
