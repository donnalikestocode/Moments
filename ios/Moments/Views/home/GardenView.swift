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
                AnimatedBackgroundView()

                VStack {
                    // Title at the top
                    Text("Donna's Garden")
                        .font(.custom("Cute Notes", size: 20)) // Use custom font
                        .foregroundColor(.white)
                        .frame(width: 287, height: 48)
                        .background(Color(red: 153/255, green: 205/255, blue: 93/255).opacity(0.15))
                        .cornerRadius(10) // Soft rounded edges
                        .shadow(radius: 2)
                        .padding(.top, 50)
                   
                    Spacer() // Pushes content downward

                    JournalWithThoughtBubble()

                    Spacer()
                }
            }
        }
    }
}


