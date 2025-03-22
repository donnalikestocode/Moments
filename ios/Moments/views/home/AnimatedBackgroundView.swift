//
//  AnimatedBackgroundView.swift
//  Moments
//
//  Created by Donna on 3/18/25.
//

import SwiftUI

struct AnimatedBackgroundView: View {
    @State private var frameIndex = 1
    private let totalFrames: Int
    private let imageName: String

    let timer = Timer.publish(every: 0.5, on: .main, in: .common).autoconnect()

    init(imageName: String, totalFrames: Int) {
        self.imageName = imageName
        self.totalFrames = totalFrames
    }

    var body: some View {
        Image("\(imageName)\(frameIndex)")
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
            .ignoresSafeArea()
            .onReceive(timer) { _ in
                frameIndex = (frameIndex % totalFrames) + 1
            }
    }
}


