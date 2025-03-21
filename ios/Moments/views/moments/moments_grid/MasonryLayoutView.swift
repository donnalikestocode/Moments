import SwiftUI

struct MasonryGridView: View {
    @ObservedObject var viewModel = MomentsViewModel()

    var body: some View {
        ScrollView {
            VStack {
                // Create two columns to simulate a Pinterest-style layout
                HStack(alignment: .top, spacing: 10) {
                    // Left Column
                    VStack(spacing: 10) {
                        ForEach(viewModel.moments.indices, id: \.self) { index in
                            if index % 2 == 0 {
                                CollageImageView(imageName: viewModel.moments[index].image, height: viewModel.moments[index].height )
                            }
                        }
                    }
                    
                    // Right Column
                    VStack(spacing: 10) {
                        ForEach(viewModel.moments.indices, id: \.self) { index in
                            if index % 2 != 0 {
                                CollageImageView(imageName: viewModel.moments[index].image, height: viewModel.moments[index].height )
                            }
                        }
                    }
                }
                .padding()
            }
        }
    }
}


struct MasonryGridViewPreview: PreviewProvider {
    static var previews: some View {
        MasonryGridView()
    }
}
