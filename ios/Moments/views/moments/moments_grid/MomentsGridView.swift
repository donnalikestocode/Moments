import SwiftUI

struct MomentsGridView: View {
    @StateObject var viewModel = MomentsListViewModel()

    let columns = [
        GridItem(.adaptive(minimum: 150, maximum: 180), spacing: 8)
    ]

    var body: some View {
        ZStack {
            Color(red: 222/255, green: 232/255, blue: 232/255)
                .ignoresSafeArea()

            VStack(spacing: 0) {
                HeaderView()
                    .padding(.top, 80)
                    .padding([.leading, .trailing], 10)
                
                MomentsPicsView(viewModel: viewModel)
            }
        }
    }
}

struct MomentsGridView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
            MomentsGridView()
                .environmentObject(NavigationBarModel())
        }
    }
}
