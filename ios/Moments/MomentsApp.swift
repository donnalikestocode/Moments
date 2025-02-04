import SwiftUI
import CoreData

@main
struct MomentsApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            MomentsListView(context: persistenceController.viewContext)
        }
    }
}
