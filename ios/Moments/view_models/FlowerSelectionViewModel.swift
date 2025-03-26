import SwiftUI

class FlowerSelectionViewModel: ObservableObject {
    @Published var selectedFlower: Flower?
    @Published var flowers: [Flower] = [
        Flower(type: "rose", image: "rose", position: CGPoint(x: 0, y: 0), date: Date()),
//        Flower(type: "tulip", image: "tulip", position: CGPoint(x: 0, y: 0), date: Date()),
//        Flower(type: "sunflower", image: "sunflower", position: CGPoint(x: 0, y: 0), date: Date()),
        Flower(type: "daisy", image: "daisy", position: CGPoint(x: 0, y: 0), date: Date()),
        Flower(type: "wisteria", image: "wisteria", position: CGPoint(x: 0, y: 0), date: Date()),
//        Flower(type: "lily", image: "lily", position: CGPoint(x: 0, y: 0), date: Date()),
//        Flower(type: "orchid", image: "orchid", position: CGPoint(x: 0, y: 0), date: Date()),
//        Flower(type: "daffodil", image: "daffodil", position: CGPoint(x: 0, y: 0), date: Date()),
//        Flower(type: "marigold", image: "marigold", position: CGPoint(x: 0, y: 0), date: Date())
    ]
    @Published var currentIndex = 0  // Track the currently focused flower

    // Callbacks
    var onSave: ((Flower) -> Void)?
    var onBack: (() -> Void)?

    init(onSave: ((Flower) -> Void)? = nil, onBack: (() -> Void)? = nil) {
        self.onSave = onSave
        self.onBack = onBack
        selectFlower(at: currentIndex)
    }

    func selectFlower(at index: Int) {
        guard index >= 0 && index < flowers.count else { return }
        selectedFlower = flowers[index]
        currentIndex = index
    }

    func nextFlower() {
        let nextIndex = (currentIndex + 1) % flowers.count
        selectFlower(at: nextIndex)
    }

    func previousFlower() {
        let previousIndex = (currentIndex - 1 + flowers.count) % flowers.count
        selectFlower(at: previousIndex)
    }

    func saveSelectedFlower() {
        if let flower = selectedFlower {
            onSave?(flower)
        }
    }

    func goBack() {
        onBack?()
    }
}
