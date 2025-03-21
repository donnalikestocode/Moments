import SwiftUI

struct CollageImageView: View {
    var imageName: String
    var height: CGFloat

    var body: some View {
        Image(imageName)
            .resizable()
            .scaledToFill()
            .frame(height: height)
            .clipShape(RoundedRectangle(cornerRadius: 10))
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(Color.black, lineWidth: 0.5)
            )
            .clipped()
            .shadow(radius: 3)
            .padding(3) // Space between images
    }
}
