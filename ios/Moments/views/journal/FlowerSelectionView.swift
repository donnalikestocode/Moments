import SwiftUI

struct FlowerSelectionView: View {
    @ObservedObject var viewModel: FlowerSelectionViewModel

    var body: some View {
        VStack {
            MomentWindowView(title: "flowers!", headerColor: Color(red: 0.93, green: 0.75, blue: 0.38)) {
                VStack {
                    Text("What would you like to grow in your garden today?")
                        .font(.custom("Cute Notes", size: 18))
                        .padding(.bottom, 10)

                    // Flower Carousel with Arrows
                    HStack {
                        // Left Arrow
                        Button(action: viewModel.previousFlower) {
                            Image(systemName: "arrow.left.circle.fill")
                                .resizable()
                                .frame(width: 40, height: 40)
                                .foregroundColor(.gray)
                        }

                        // Flower Image and Label
                        VStack {
                            let flower = viewModel.flowers[viewModel.currentIndex]
                            Image(flower.image)
                                .resizable()
                                .scaledToFit()
                                .frame(width: 150, height: 150)
                                .cornerRadius(10)
                                .shadow(radius: 3)
    
                            Text(flower.type.capitalized)
                                .font(.custom("Cute Notes", size: 20))
                        }
                        .onTapGesture {
                            viewModel.selectFlower(at: viewModel.currentIndex)
                        }

                        // Right Arrow
                        Button(action: viewModel.nextFlower) {
                            Image(systemName: "arrow.right.circle.fill")
                                .resizable()
                                .frame(width: 40, height: 40)
                                .foregroundColor( .gray)
                        }
                    }
                    .padding()
                }
                .padding()
            }

            // Action Buttons
            HStack {
                Button(action: viewModel.goBack) {
                    Text("Back")
                        .padding()
                        .frame(maxWidth: .infinity)
                        .background(Color(.systemGray4))
                        .cornerRadius(10)
                        .font(.custom("Cute Notes", size: 18))
                }

                Button(action: viewModel.saveSelectedFlower) {
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

struct FlowerSelectionView_Previews: PreviewProvider {
    static var previews: some View {
        let viewModel = FlowerSelectionViewModel(
            onSave: { flower in print("Planted \(flower.type)") },
            onBack: { print("Back to previous screen") }
        )
        FlowerSelectionView(viewModel: viewModel)
    }
}
