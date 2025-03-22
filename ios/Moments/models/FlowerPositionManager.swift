import SwiftUI

struct FlowerPositionManager {
    static let positions: [CGPoint] = [
        CGPoint(x: 100, y: 150),
        CGPoint(x: 200, y: 250),
        CGPoint(x: 150, y: 350),
        CGPoint(x: 250, y: 450),
        CGPoint(x: 300, y: 200),
        CGPoint(x: 400, y: 300),
        CGPoint(x: 350, y: 400),
        CGPoint(x: 450, y: 500)
    ]

    static func position(for index: Int) -> CGPoint {
        return positions[index % positions.count]
    }
}
