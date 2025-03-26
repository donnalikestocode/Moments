import SwiftUI

class FlowerViewModel: ObservableObject {
    @Published var flowers: [Flower] = []
    private var nextPositionIndex = 0  // Track the position to replace

     func addFlower(type: String, image: String) {
         // Calculate the position based on the next position index
         let position = FlowerPositionManager.position(for: nextPositionIndex)

         // Create a new flower
         let newFlower = Flower(type: type, image: image, position: position, date: Date())

         // Check if a flower already exists at the calculated position
         if nextPositionIndex < flowers.count {
             // Replace the existing flower at that position
             flowers[nextPositionIndex] = newFlower
             print("Replaced flower at position \(nextPositionIndex) - Total flowers: \(flowers.count)")
         } else {
             // Append a new flower
             flowers.append(newFlower)
             print("Added new flower at position \(nextPositionIndex) - Total flowers: \(flowers.count)")
         }

         // Update the position index for the next flower (circular)
         nextPositionIndex = (nextPositionIndex + 1) % FlowerPositionManager.positions.count
     }


    func resetFlowers() {
        flowers.removeAll()
        nextPositionIndex = 0
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
