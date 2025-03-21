import SwiftUI

struct MomentListView: View {
    var entry: MomentEntry // This will be the model that holds the data for each moment

    var body: some View {
        VStack {
            // Date at the top
            Text(entry.date, style: .date)
                .font(.custom("Cute Notes", size: 20))
                .padding(.top, 20)
            
            // Image Window
            MomentWindowView(title: "pics!", headerColor: Color.pink) {
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 10) {
                        ForEach(entry.images, id: \.image) { imageEntry in
                            Image(imageEntry.image)
                                .resizable()
                                .scaledToFit()
                                .frame(width: 200, height: 300) // Adjust size as needed
                                .cornerRadius(10)
                                .shadow(radius: 3)
                        }
                    }
                    .padding()
                }
            }

            Spacer()
        }
        .padding()
    }
}

struct MomentListView_Previews: PreviewProvider {
    static var previews: some View {
        let sampleMoment =  MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo4"),
                ImageEntry(image: "photo5")
            ],
            flower: "tulips",
            quote: "Breathe in peace.\nBreathe out tension.",
            gratitude: "Grateful for being able to spend quality time with loved ones."
        )
            
        MomentListView(entry: sampleMoment)
    }
}
