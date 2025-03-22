import SwiftUI

class FlowerViewModel: ObservableObject {
    @Published var flowers: [Flower] = []

    func addFlower(type: String, image: String) {
        if let firstFlower = flowers.first, firstFlower.type == type {
            return
        }
        
        flowers.removeAll()

        for index in 0..<FlowerPositionManager.positions.count {
            let position = FlowerPositionManager.position(for: index)
            let newFlower = Flower(type: type, image: image, position: position, date: Date())
            flowers.append(newFlower)
        }
    }

    func resetFlowers() {
        flowers.removeAll()
    }

    func hasFlowers() -> Bool {
        return !flowers.isEmpty
    }
    
    func startMidnightTimer() {
        let nextMidnight = Calendar.current.startOfDay(for: Date().addingTimeInterval(86400))
        let timer = Timer(fire: nextMidnight, interval: 86400, repeats: true) { _ in
            self.resetFlowers()
        }
        RunLoop.main.add(timer, forMode: .common)
    }
}

extension FlowerViewModel {
    convenience init(preview: Bool) {
        self.init()

        if preview {
            print("Initializing FlowerViewModel for Preview")
            addFlower(type: "rose", image: "rose")  // Add mock data for preview
        }
    }
}
