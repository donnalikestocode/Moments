//
//  JournalWithThoughtBubble.swift
//  Moments
//
//  Created by Donna on 3/18/25.
//

import SwiftUI

struct JournalWithThoughtBubble: View {
    
    @EnvironmentObject var navigationState: NavigationState
    
    @State private var opacity: Double = 1.0
    @State private var isAnimating = false

    var body: some View {
        ZStack {
            Circle()
                .fill(Color.white.opacity(0.3)) // Soft glow color
                 .frame(width: 80, height: 80) // Slightly larger than the thought bubble
                 .blur(radius: 15) // Makes it look like a glow
                 .offset(x: 25, y: 10) // Keep the glow aligned with the thought bubble
            
            NavigationLink(destination: JournalEntryView()
                .onAppear {
                    navigationState.showNavBar = false
                }) {
                Image("thoughtBubble")
                    .resizable()
                    .frame(width: 60, height: 60)
                    .opacity(isAnimating ? 0.9 : 1.0)
                    .animation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true), value: opacity)
            }
            .offset(x: 25, y: 10) // Fixed position
            .onAppear {
                isAnimating = true
            }
        }
    }
}
