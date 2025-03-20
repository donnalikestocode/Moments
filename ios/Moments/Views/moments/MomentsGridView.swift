import SwiftUI

struct MomentsGridView: View {
    @StateObject var viewModel = MomentsViewModel()

    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]

    var body: some View {
        ZStack {
            Color.white // Background color to avoid transparent areas
                .ignoresSafeArea()

            VStack {
                // Header
                HStack {
                    Text("my moments <3")
                        .font(.custom("Cute Notes", size: 20))
                        .foregroundColor(.black)
                        .padding(.leading, 20)
                    Spacer()
                    HStack(spacing: 5) {
                        Image(systemName: "minus.square")
                        Image(systemName: "square.grid.2x2")
                        Image(systemName: "xmark.square")
                    }
                    .padding(.trailing, 20)
                }
                .frame(height: 50)
                .background(Color(red: 153/255, green: 205/255, blue: 93/255)) // Light green
                .cornerRadius(10)
                .padding(.top, 44) // Ensures it doesn't go under the status bar

                // Grid of Images
                ScrollView {
                    LazyVGrid(columns: columns, spacing: 10) {
                        ForEach(viewModel.moments) { moment in
                            Image(moment.image)
                                .resizable()
                                .aspectRatio(contentMode: .fill)
                                .frame(width: 100, height: 100)
                                .cornerRadius(8)
                                .clipped()
                        }
                    }
                    .padding()
                }
            }
            .padding(.top, 20) // Additional top padding
        }
    }
}
