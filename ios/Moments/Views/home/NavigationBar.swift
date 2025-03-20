//
//  NavigationBarView.swift
//  Moments
//
//  Created by Donna on 3/19/25.
//

import SwiftUI

struct NavigationBar: View {
    @EnvironmentObject var navigationState: NavigationState
    @Binding var selectedTab: String
    
    var body: some View {
        ZStack {
            
            Image("bushes")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: UIScreen.main.bounds.width, height: 100)
                .ignoresSafeArea(edges: .bottom) // Make sure it covers the bottom edge

            
            HStack(spacing: 40) {
                
                // Garden Tab
                Button(action: {
                    selectedTab = "garden"
                    navigationState.showNavBar = true
                }) {
                    Image("gardenTab")
                        .resizable()
                        .frame(width: 100, height: 100)
                        .offset(y: selectedTab == "garden" ? -20 : 0)
                }
                
                // Journal Tab
                Button(action: {
                    selectedTab = "journal"
                    navigationState.showNavBar = true
                }) {
                    Image("journalTab")
                        .resizable()
                        .frame(width: 100, height: 100)
                        .offset(y: selectedTab == "journal" ? -20 : 0)
                }
            }
            .padding(.bottom, 20)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottom) // Keep at the bottom
    }
}
