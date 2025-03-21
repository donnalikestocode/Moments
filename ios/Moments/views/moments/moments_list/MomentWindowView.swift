//
//  MomentWindowView.swift
//  Moments
//
//  Created by Donna on 3/20/25.
//

import SwiftUI

struct MomentWindowView<Content: View>: View {
    let title: String
    let headerColor: Color
    let content: Content

    init(title: String, headerColor: Color, @ViewBuilder content: () -> Content) {
        self.title = title
        self.headerColor = headerColor
        self.content = content()
    }

    var body: some View {
        ZStack {
            VStack(spacing: 0) {
                // Header
                HStack {
                    Text(title)
                        .font(.custom("Cute Notes", size: 18))
                        .foregroundColor(.black)
                        .padding(.leading, 8)
                    Spacer()
                    HStack(spacing: 5) {
                        Image(systemName: "minus.square")
                        Image(systemName: "square.grid.2x2")
                        Image(systemName: "xmark.square")
                    }
                    .padding(.trailing, 8)
                }
                .frame(height: 30)
                .background(headerColor)
                .cornerRadius(5, corners: [.topLeft, .topRight])
                .overlay(
                    RoundedRectangle(cornerRadius: 5)
                        .stroke(Color.black, lineWidth: 2)
                )

                // Content
                VStack {
                    content
                        .padding()
                }
                .background(Color.white)
                .cornerRadius(5, corners: [.bottomLeft, .bottomRight])
                .overlay(
                    RoundedRectangle(cornerRadius: 5)
                        .stroke(Color.black, lineWidth: 2)
                )
            }
        }
        .shadow(radius: 3)
        .padding(5)
    }
}
