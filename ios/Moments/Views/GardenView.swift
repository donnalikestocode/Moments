//
//  GardenView.swift
//  Moments
//
//  Created by Donna on 3/17/25.
//

import SwiftUI

struct GardenView: View {
    var body: some View {
        NavigationView {
            ZStack {
                
                // Place Thought Bubble on Top Independently
                
                AnimatedBackgroundView() // The animated background
                    .zIndex(0) // Ensures it stays behind everything

                VStack {
                    Spacer()
                }
                
                JournalWithThoughtBubble()
                    .zIndex(1) // Keeps it on top & independent of background movement
            }
        }
    }
}


