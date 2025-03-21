//
//  ContentView.swift
//  Moments
//
//  Created by Donna on 3/19/25.
//

import SwiftUI

struct ContentView: View {
    
    @EnvironmentObject var navigationState: NavigationBarModel
    
    @State private var selectedTab: String = "garden"
    
    var body: some View {
        NavigationView {
            ZStack {
                // Show Garden or Journal View based on the selected tab
                if selectedTab == "garden" {
                    GardenView()
                } else {
                    MomentsGridView()
                }
                
                if navigationState.showNavBar {
                    VStack {
                        Spacer()
                        NavigationBar(selectedTab: $selectedTab)
                    }
                    .transition(.move(edge: .bottom))
                }
                
            }
            .ignoresSafeArea()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environmentObject(NavigationBarModel())
    }
}
