import SwiftUI

class MomentsListViewModel: ObservableObject {
    @Published var moments: [MomentEntry] = [
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo1"),
                ImageEntry(image: "photo2"),
                ImageEntry(image: "photo3")
            ],
            flower: "roses",
            quote: "I'm in no rush.\nI will take the scenic route.",
            gratitude: "I'm so grateful for being able to watch our friends get married and soak in the warm Hawaii sun :)"
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo4"),
                ImageEntry(image: "photo5")
            ],
            flower: "tulips",
            quote: "Breathe in peace.\nBreathe out tension.",
            gratitude: "Grateful for being able to spend quality time with loved ones."
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo6"),
                ImageEntry(image: "photo7"),
                ImageEntry(image: "photo8")
            ],
            flower: "tulips",
            quote: "Breathe in peace.\nBreathe out tension.",
            gratitude: "Grateful for being able to spend quality time with loved ones."
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo9"),
                ImageEntry(image: "photo10")
            ],
            flower: "tulips",
            quote: "Breathe in peace.\nBreathe out tension.",
            gratitude: "Grateful for being able to spend quality time with loved ones."
        )
    ]
}
