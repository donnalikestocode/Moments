import SwiftUI

class MomentsViewModel: ObservableObject {
    @Published var moments: [JournalEntry] = [
        JournalEntry(image: "photo1"),
        JournalEntry(image: "photo2"),
        JournalEntry(image: "photo3"),
        // Add more as needed
    ]
}
