import SwiftUI

struct NavigationBar: View {
    @EnvironmentObject var navigationState: NavigationState
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
                    navigationState.showNavBar = true
                }) {
                    Image("gardenTab")
                        .resizable()
                        .frame(width: 100, height: 100)
                        .offset(y: selectedTab == "garden" ? -20 : 0) // Pop-up effect
                }

                // Journal Tab
                Button(action: {
                    selectedTab = "journal"
                    navigationState.showNavBar = true
                }) {
                    Image("journalTab")
                        .resizable()
                        .frame(width: 100, height: 100)
                        .offset(y: selectedTab == "journal" ? -20 : 0) // Pop-up effect
                }
            }
            .padding(.bottom, 20) // Space between tabs and bottom
        }
    }
}
