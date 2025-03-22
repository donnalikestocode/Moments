import SwiftUI

struct MasonryGridView: View {
    @ObservedObject var viewModel: MomentsListViewModel

    var body: some View {
        ScrollView {
            HStack(alignment: .top, spacing: 10) {
                // Left Column
                VStack(spacing: 10) {
                    ForEach(viewModel.leftColumnImages, id: \.image.id) { item in
                        NavigationLink(destination: MomentListView(entry: item.moment)) {
                            CollageImageView(imageName: item.image.image, height: item.image.height)
                        }
                    }
                }

                // Right Column
                VStack(spacing: 10) {
                    ForEach(viewModel.rightColumnImages, id: \.image.id) { item in
                        NavigationLink(destination: MomentListView(entry: item.moment)) {
                            CollageImageView(imageName: item.image.image, height: item.image.height)
                        }
                    }
                }
            }
            .padding()
        }
    }
}

struct MasonryGridViewPreview: PreviewProvider {
    static var previews: some View {
        NavigationView {
            MasonryGridView(viewModel: MomentsListViewModel())
        }
    }
}
