import SwiftUI

struct FlowerView: View {
    var flower: Flower

    @State private var scale: CGFloat = 0.1
    @State private var opacity: Double = 0.0  // Start fully transparent

    var body: some View {
        Image(flower.image)
            .resizable()
            .scaledToFit()
            .frame(width: 80, height: 80)
            .position(flower.position)  // Directly set the position
            .animation(nil, value: flower.position)  // Disable animation on position
            .scaleEffect(scale)  // Only animate the scale
            .opacity(opacity)    // Only animate the opacity
            .onAppear {
                // Animate scale and opacity without moving position
                withAnimation(.easeInOut(duration: 0)) {
                    scale = 1.0  // Smooth growth
                    opacity = 1.0  // Fade in
                }
            }
    }
}




struct FlowerView_Previews: PreviewProvider {
    static var previews: some View {
        let sampleFlower = Flower(
            type: "rose",
            image: "rose",
            position: CGPoint(x: 100, y: 150),
            date: Date()
        )
        FlowerView(flower: sampleFlower)
            .previewLayout(.sizeThatFits)
    }
}
