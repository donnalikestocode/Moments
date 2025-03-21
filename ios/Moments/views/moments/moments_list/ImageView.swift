import SwiftUI

struct ImageView: View {
    var entry: MomentEntry
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 10) {
                ForEach(entry.images, id: \.image) { imageEntry in
                    Image(imageEntry.image)
                        .resizable()
                        .scaledToFit()
                        .frame(height: 300)
                        .cornerRadius(10)
                        .shadow(radius: 3)
                }
            }
            .padding()
        }
    }
}
