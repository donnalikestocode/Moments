import SwiftUI

struct MasonryGridView: View {
    @ObservedObject var viewModel = MomentsListViewModel()

    var body: some View {
        ScrollView {
            VStack {
                HStack(alignment: .top, spacing: 10) {
                    // Left Column
                    VStack(spacing: 10) {
                        let leftColumnMoments = viewModel.moments.indices.filter { $0 % 2 == 0 }
                        ForEach(leftColumnMoments, id: \.self) { index in
                            let moment = viewModel.moments[index]
                            ForEach(moment.images, id: \.image) { imageEntry in
                                NavigationLink(destination: MomentListView(entry: moment)) {
                                    CollageImageView(imageName: imageEntry.image, height: imageEntry.height)
                                }
                            }
                        }
                    }

                    // Right Column
                    VStack(spacing: 10) {
                        let rightColumnMoments = viewModel.moments.indices.filter { $0 % 2 != 0 }
                        ForEach(rightColumnMoments, id: \.self) { index in
                            let moment = viewModel.moments[index]
                            ForEach(moment.images, id: \.image) { imageEntry in
                                NavigationLink(destination: MomentListView(entry: moment)) {
                                    CollageImageView(imageName: imageEntry.image, height: imageEntry.height)
                                }
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
        NavigationView {
            MasonryGridView()
        }
    }
}
