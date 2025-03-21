import SwiftUI

struct FlowerQuoteView: View {
    var entry: MomentEntry
    
    var body: some View {
        VStack(spacing: 10) {
            // Flower of the day
            Text("🌸 Today's Flower: \(entry.flower)")
                .font(.custom("Cute Notes", size: 18))
                .padding(.bottom, 5)
            
            // Quote of the day
            Text("💭 Quote: \(entry.quote)")
                .font(.custom("Cute Notes", size: 16))
                .italic()
        }
        .padding()
    }
}
