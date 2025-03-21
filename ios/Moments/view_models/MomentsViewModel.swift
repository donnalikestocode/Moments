import SwiftUI

class MomentsViewModel: ObservableObject {
    @Published var moments: [JournalEntry] = [
        JournalEntry(image: "photo1"),
        JournalEntry(image: "photo2"),
        JournalEntry(image: "photo3"),
        JournalEntry(image: "photo4"),
        JournalEntry(image: "photo5"),
        JournalEntry(image: "photo6"),
        JournalEntry(image: "photo7"),
        JournalEntry(image: "photo8"),
        JournalEntry(image: "photo9"),
        JournalEntry(image: "photo10"),
        // Add more as needed
    ]
}
