import SwiftUI

struct FlowerPositionManager {
    static let positions: [CGPoint] = [
        CGPoint(x: 100, y: 150),
        CGPoint(x: 30, y: 10),
        CGPoint(x: 310, y: 250),
        CGPoint(x: 200, y: 280),
        CGPoint(x: 20, y: 350),
        CGPoint(x: 140, y: 430),
        CGPoint(x: 250, y: 450),
        CGPoint(x: 70, y: 500)
    ]

    static func position(for index: Int) -> CGPoint {
        return positions[index % positions.count]
    }
}
