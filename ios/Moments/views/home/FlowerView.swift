import SwiftUI

struct FlowerView: View {
    var flower: Flower

    @State private var scale: CGFloat = 1.0
    @State private var opacity: Double = 1.0
    @State private var isAnimating = false

    var body: some View {
        ZStack {
            // Glow effect with soft blur
            Circle()
                .fill(Color.white.opacity(0.3))
                .frame(width: 40, height: 40)
                .blur(radius: 8)  

            Image(flower.image)
                .resizable()
                .scaledToFit()
                .frame(width: 80, height: 80)
                .opacity(opacity)
                .scaleEffect(scale)
                .animation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true), value: opacity)
                .onAppear {
                    // Make the flower appear instantly with a gentle glow
                    scale = 1.0
                    opacity = 1.0
                    isAnimating = true
                }
        }
        .position(flower.position)  // Directly set the position
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
