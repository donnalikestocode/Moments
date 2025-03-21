import Foundation
import SwiftUI

struct JournalEntry: Identifiable {
    let id = UUID()
    let image: String
    let height: CGFloat

    init(image: String) {
        self.image = image
        
        if let uiImage = UIImage(named: image) {
            let aspectRatio = uiImage.size.height / uiImage.size.width
            let columnWidth = (UIScreen.main.bounds.width / 2) - 15
            self.height = columnWidth * aspectRatio
        } else {
            self.height = 50
        }
    }
}
