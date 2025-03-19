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
                Spacer()
                JournalWithThoughtBubble()
            }
        }
    }
}


