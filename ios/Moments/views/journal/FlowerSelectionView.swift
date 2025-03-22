import SwiftUI

struct FlowerSelectionView: View {
    var onSave: () -> Void
    var onBack: () -> Void

    var body: some View {
        VStack {
            
            MomentWindowView(title: "flowers!", headerColor: Color(red: 0.93, green: 0.75, blue: 0.38)) {
                VStack {
                    Text("What would you like to grow in your garden today?")
                        .font(.custom("Cute Notes", size: 18))
                        .padding(.bottom, 10)
                    Image("rose")
                        .resizable()
                        .scaledToFit()
                        .frame(height: 100)
                    Text("roses")
                        .font(.custom("Cute Notes", size: 20))
                }
                .padding()
            }
            
            HStack {
                Button(action: onBack) {
                    Text("Back")
                        .padding()
                        .frame(maxWidth: .infinity)
                        .background(Color(.systemGray4))
                        .cornerRadius(10)
                        .font(.custom("Cute Notes", size: 18))
                }
                
                Button(action: onSave) {
                    Text("Let's Plant!")
                        .padding()
                        .frame(maxWidth: .infinity)
                        .background(Color(.systemGray4))
                        .cornerRadius(10)
                        .font(.custom("Cute Notes", size: 18))
                }
                
            }
            .padding()

        }
    }
}
