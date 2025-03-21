import SwiftUI
import CoreData

struct MomentsListView: View {
    @StateObject private var viewModel: MomentsListViewModel

    init(context: NSManagedObjectContext) {
        _viewModel = StateObject(wrappedValue: MomentsListViewModel(context: context))
    }

    var body: some View {
        NavigationView {
            List {
                ForEach(viewModel.moments, id: \.self) { moment in
                    Text(moment.title ?? "Untitled")
                }
                .onDelete(perform: viewModel.deleteMoments)
            }
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button(action: viewModel.addMoment) {
                        Label("Add Moment", systemImage: "plus")
                    }
                }
            }
            .navigationTitle("Moments")
        }
    }
}

#Preview {
    MomentsListView(context: PersistenceController.shared.viewContext)
}
