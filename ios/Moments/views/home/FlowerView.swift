import SwiftUI

struct FlowerView: View {
    var flower: Flower  // Takes a flower model as input

    @State private var scale: CGFloat = 0.1  // Initial small scale for growth animation

    var body: some View {
        Image(flower.image)  // Display the flower image
            .resizable()
            .scaledToFit()
            .frame(width: 80, height: 80)  // Fixed size for now
            .position(flower.position)     // Position based on the flower data
            .scaleEffect(scale)            // Apply the scaling effect
            .opacity(scale)                // Fade in as it grows
            .onAppear {
                // Trigger the growth animation when the view appears
                withAnimation(.spring(response: 0.6, dampingFraction: 0.5)) {
                    scale = 1.0  // Animate to full size
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
