//
//  JournalWithThoughtBubble.swift
//  Moments
//
//  Created by Donna on 3/18/25.
//

import SwiftUI

struct JournalWithThoughtBubble: View {
    
    @EnvironmentObject var navigationState: NavigationBarModel
    
    @State private var opacity: Double = 1.0
    @State private var isAnimating = false

    var body: some View {
        ZStack {
            Circle()
                .fill(Color.white.opacity(0.3))
                 .frame(width: 80, height: 80)
                 .blur(radius: 15)
                 .offset(x: 25, y: 10)
            
            Button(action: {
                navigationState.navigateTo(.journal)  // Navigate to JournalEntryView
                navigationState.showNavBar = false
            }) {
                Image("thoughtBubble")
                    .resizable()
                    .frame(width: 60, height: 60)
                    .opacity(isAnimating ? 0.9 : 1.0)
                    .animation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true), value: opacity)
            }
            .offset(x: 25, y: -250) 
            .onAppear {
                isAnimating = true
            }
        }
    }
}
