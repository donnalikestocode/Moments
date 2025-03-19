//
//  AnimatedBackgroundView.swift
//  Moments
//
//  Created by Donna on 3/18/25.
//

import SwiftUI

struct AnimatedBackgroundView: View {
    @State private var frameIndex = 1
    private let totalFrames = 3
    
    let timer = Timer.publish(every: 0.5, on: .main, in: .common).autoconnect() // Consistent timer

    var body: some View {
        Image("background\(frameIndex)")
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
            .ignoresSafeArea()
            .onReceive(timer) { _ in
                frameIndex = (frameIndex % totalFrames) + 1 // Cycles frames smoothly
            }
    }
}

