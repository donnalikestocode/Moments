import SwiftUI

struct MomentListView: View {
    var entry: MomentEntry
    
    // Track the active (frontmost) window
    @State private var activeWindow: String = "gratitude"  // Default front window

    var body: some View {
        ZStack {
            Color(red: 0.87, green: 0.91, blue: 0.91)
                .ignoresSafeArea()
            
            VStack {
                Text(entry.date, style: .date)
                    .font(.custom("Cute Notes", size: 20))
                    .padding(.top, 20)
                Spacer()
            }

            // Pics Window
            MomentWindowView(title: "pics!", headerColor: Color(red: 0.89, green: 0.72, blue: 0.76)) {
                ImageView(entry: entry)
            }
            .offset(x: -10, y: -110)
            .padding()
            .zIndex(activeWindow == "pics" ? 3 : 1) // Adjust zIndex based on active window
            .onTapGesture {
                activeWindow = "pics"
            }

            // Flower and Quote Window
            MomentWindowView(title: "on this day", headerColor: Color(red: 0.93, green: 0.75, blue: 0.38)) {
                FlowerQuoteView(entry: entry)
            }
            .offset(x: 10, y: 110)
            .zIndex(activeWindow == "quote" ? 3 : 2)
            .padding()
            .onTapGesture {
                activeWindow = "quote"
            }

            // Gratitude Window
            MomentWindowView(title: "gratitude",  headerColor: Color(red: 0.59, green: 0.80, blue: 0.94)) {
                Text(entry.gratitude)
                    .font(.custom("Cute Notes", size: 18))
                    .padding()
            }
            .offset(x: 2, y: 220)
            .padding()
            .zIndex(activeWindow == "gratitude" ? 3 : 1)
            .onTapGesture {
                activeWindow = "gratitude"
            }
        }
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
