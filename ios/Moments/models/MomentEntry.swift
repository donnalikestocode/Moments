import SwiftUI

struct MomentEntry: Identifiable {
    let id = UUID()
    let date: Date
    let images: [ImageEntry]
    let flower: String
    let quote: String
    let gratitude: String
}
