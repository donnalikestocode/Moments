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
            Color(red: 222/255, green: 232/255, blue: 232/255) // DEE8E8
                .ignoresSafeArea()

            VStack(spacing: 0) {
                // Header
                ZStack {
                    // Background with rounded corners
                    UnevenRoundedRectangle(
                        topLeadingRadius: 10,
                        bottomLeadingRadius: 0,
                        bottomTrailingRadius: 0,
                        topTrailingRadius: 10
                    )
                    .fill(Color(red: 153/255, green: 205/255, blue: 93/255))
                    .frame(height: 50)

                    // Border with rounded corners
                    UnevenRoundedRectangle(
                        topLeadingRadius: 10,
                        bottomLeadingRadius: 0,
                        bottomTrailingRadius: 0,
                        topTrailingRadius: 10
                    )
                    .stroke(Color.black, lineWidth: 2)
                    .frame(height: 50)

                    HStack {
                        Text("my moments <3")
                            .font(.custom("Cute Notes", size: 20))
                            .foregroundColor(.black)
                            .padding(.leading, 20)
                        Spacer()
                        HStack(spacing: 5) {
                            Image(systemName: "minus.square")
                                .foregroundColor(.black) // Icon color
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .fill(Color.gray.opacity(0.4)) // Gray background with some transparency
                                        .frame(width: 15, height: 15) // Adjust size as needed
                                )

                            Image(systemName: "square.grid.2x2")
                                .foregroundColor(.black)
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .fill(Color.gray.opacity(0.4))
                                        .frame(width: 15, height: 15)
                                )

                            Image(systemName: "xmark.square")
                                .foregroundColor(.black)
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .fill(Color.gray.opacity(0.4))
                                        .frame(width: 15, height: 15)
                                )
                        }
                        .padding(.trailing, 20)
                    }
                }
                .padding(.top, 80)

                // Grid of Images
                ScrollView {
                    LazyVGrid(columns: columns, spacing: 15) {
                        ForEach(viewModel.moments) { moment in
                            Image(moment.image)
                                .resizable()
                                .aspectRatio(contentMode: .fill)
                                .frame(width: 105, height: 105)
                                .clipped()
                                .overlay(
                                    RoundedRectangle(cornerRadius: 0)
                                        .stroke(Color.black, lineWidth: 0.5)
                                )
                                
                        }
                    }
                    .padding()
                }
                .background(
                    ZStack {
                        UnevenRoundedRectangle(
                            topLeadingRadius: 0,
                            bottomLeadingRadius: 10, bottomTrailingRadius: 10, topTrailingRadius: 0
                        )
                        .fill(Color.white)

                        UnevenRoundedRectangle(
                            topLeadingRadius: 0,
                            bottomLeadingRadius: 10, bottomTrailingRadius: 10, topTrailingRadius: 0
                        )
                        .stroke(Color.black, lineWidth: 2)
                    }
                )
                .padding(.bottom, 130)
            }
        }
    }
}
