import SwiftUI

class FlowerViewModel: ObservableObject {
    @Published var flowers: [Flower] = []

    // Add a new flower to the list
    func addFlower(type: String, image: String) {
        // Check if the current flowers are the same as the new flower type
        if let firstFlower = flowers.first, firstFlower.type == type {
            return  // No need to replace if they are the same type
        }
        
        flowers.removeAll()  // Clear existing flowers if they are not the same type

        for index in 0..<FlowerPositionManager.positions.count {
            let position = FlowerPositionManager.position(for: index)  // Get the next spot
            let newFlower = Flower(type: type, image: image, position: position, date: Date())
            flowers.append(newFlower)
        }
    }

    // Remove all flowers (e.g., at midnight)
    func resetFlowers() {
        flowers.removeAll()
    }

    // Check if there are any flowers in the garden
    func hasFlowers() -> Bool {
        return !flowers.isEmpty
    }
    
    // Start the midnight timer to reset the garden
    func startMidnightTimer() {
        let nextMidnight = Calendar.current.startOfDay(for: Date().addingTimeInterval(86400))
        let timer = Timer(fire: nextMidnight, interval: 86400, repeats: true) { _ in
            self.resetFlowers()
        }
        RunLoop.main.add(timer, forMode: .common)
    }
}

extension FlowerViewModel {
    // Preview-specific initializer
    convenience init(preview: Bool) {
        self.init()  // Call the default initializer

        if preview {
            print("Initializing FlowerViewModel for Preview")
            addFlower(type: "rose", image: "rose")  // Add mock data for preview
        }
    }
}
