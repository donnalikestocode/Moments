import SwiftUI

struct MomentsGridView: View {
    @StateObject var viewModel = MomentsViewModel()

    let columns = [
        GridItem(.adaptive(minimum: 150, maximum: 180), spacing: 8)
    ]

    var body: some View {
        ZStack {
            Color(red: 222/255, green: 232/255, blue: 232/255)
                .ignoresSafeArea()

            VStack(spacing: 0) {
                
                // Header
                ZStack {
                    UnevenRoundedRectangle(
                        topLeadingRadius: 10,
                        bottomLeadingRadius: 0,
                        bottomTrailingRadius: 0,
                        topTrailingRadius: 10
                    )
                    .fill(Color(red: 153/255, green: 205/255, blue: 93/255))
                    .frame(height: 50)
                    .overlay(
                        UnevenRoundedRectangle(
                            topLeadingRadius: 10,
                            bottomLeadingRadius: 0,
                            bottomTrailingRadius: 0,
                            topTrailingRadius: 10
                        )
                        .stroke(Color.black, lineWidth: 2)
                        .frame(height: 50)
                    )
                    HStack {
                        Text("my moments <3")
                            .font(.custom("Cute Notes", size: 20))
                            .foregroundColor(.black)
                            .padding(.leading, 20)
                        Spacer()
                        HStack(spacing: 5) {
                            Image(systemName: "minus.square")
                                .foregroundColor(.black)
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .fill(Color(red: 217/255, green: 217/255, blue: 217/255))
                                        .frame(width: 15, height: 15)
                                )

                            Image(systemName: "square.grid.2x2")
                                .foregroundColor(.black)
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .fill(Color(red: 217/255, green: 217/255, blue: 217/255))
                                        .frame(width: 15, height: 15)
                                )

                            Image(systemName: "xmark.square")
                                .foregroundColor(.black)
                                .background(
                                    RoundedRectangle(cornerRadius: 5)
                                        .fill(Color(red: 217/255, green: 217/255, blue: 217/255))
                                        .frame(width: 15, height: 15)
                                )
                        }
                        .padding(.trailing, 20)
                    }
                }
                .padding(.top, 80)

                // Grid of Images
                ScrollView {
                    MasonryGridView()
                }
                .background(
                    ZStack {
                        UnevenRoundedRectangle(
                            topLeadingRadius: 0,
                            bottomLeadingRadius: 10,
                            bottomTrailingRadius: 10,
                            topTrailingRadius: 0
                        )
                        .fill(Color.white)

                        UnevenRoundedRectangle(
                            topLeadingRadius: 0,
                            bottomLeadingRadius: 10,
                            bottomTrailingRadius: 10,
                            topTrailingRadius: 0
                        )
                        .stroke(Color.black, lineWidth: 2)
                    }
                )
                .padding(.bottom, 130)
            }
        }
    }
}

struct MomentsGridView_Previews: PreviewProvider {
    static var previews: some View {
        MomentsGridView()
            .environmentObject(NavigationBarModel())
    }
}
