import CoreData
import Combine

class MomentsListViewModel: ObservableObject {
    @Published var moments: [Moment] = []
    private let context: NSManagedObjectContext

    init(context: NSManagedObjectContext) {
        self.context = context
        fetchMoments()
    }

    func fetchMoments() {
        let fetchRequest: NSFetchRequest<Moment> = Moment.fetchRequest()
        fetchRequest.sortDescriptors = [NSSortDescriptor(keyPath: \Moment.dateCreated, ascending: true)]
        do {
            moments = try context.fetch(fetchRequest)
        } catch {
            print("Failed to fetch moments: \(error.localizedDescription)")
        }
    }

    func addMoment() {
        let newMoment = Moment(context: context)
        newMoment.momentID = UUID().uuidString
        newMoment.title = "New Moment"
        newMoment.dateCreated = Date()
        newMoment.syncStatus = "pending_sync" // Default value
        newMoment.uploadStatus = "pending_upload" // Default value
        newMoment.tag = "General" // Default value

        saveContext()
    }

    func deleteMoments(at offsets: IndexSet) {
        offsets.map { moments[$0] }.forEach(context.delete)
        saveContext()
    }

    private func saveContext() {
        do {
            try context.save()
            fetchMoments()
        } catch {
            print("Failed to save context: \(error.localizedDescription)")
        }
    }
}
