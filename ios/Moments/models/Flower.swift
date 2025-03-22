import SwiftUI

struct Flower: Identifiable, Codable {
    var id = UUID()
    var type: String
    var image: String
    var position: CGPoint
    var date: Date
}
