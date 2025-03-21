//
//  Image.swift
//  Moments
//
//  Created by Donna on 3/20/25.
//

import Foundation
import SwiftUI

struct ImageEntry: Identifiable {
    let id = UUID()
    let image: String
    let height: CGFloat

    init(image: String) {
        self.image = image
        
        // Calculate the height based on the image's aspect ratio
        if let uiImage = UIImage(named: image) {
            let aspectRatio = uiImage.size.height / uiImage.size.width
            let columnWidth = (UIScreen.main.bounds.width / 2) - 15
            self.height = columnWidth * aspectRatio
        } else {
            self.height = 50 // Default height
        }
    }
}
