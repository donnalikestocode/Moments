import SwiftUI

struct NavigationBar: View {
    @EnvironmentObject var navigationState: NavigationBarModel
    @Binding var selectedTab: String
    
    var body: some View {
        ZStack {
            VStack {
                Image("bushes")
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: UIScreen.main.bounds.width, height: 100)
            }
            
            // Navigation Tabs (foreground)
            HStack(spacing: 40) {
                // Garden Tab
                Button(action: {
                    selectedTab = "garden"
                    navigationState.navigateTo(.garden)
                }) {
                    Image("gardenTab")
                        .resizable()
                        .frame(width: 100, height: 100)
                        .offset(y: selectedTab == "garden" ? -20 : 0)
                }

                // Moments Tab
                Button(action: {
                    selectedTab = "moments"
                    navigationState.navigateTo(.moments)
                }) {
                    Image("momentsTab")
                        .resizable()
                        .frame(width: 100, height: 100)
                        .offset(y: selectedTab == "moments" ? -20 : 0)
                }
            }
            .padding(.bottom, 20) 
        }
    }
}
