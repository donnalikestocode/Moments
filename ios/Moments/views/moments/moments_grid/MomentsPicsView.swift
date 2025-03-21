//
//  MomentsPicsView.swift
//  Moments
//
//  Created by Donna on 3/20/25.
//

import SwiftUI

struct MomentsPicsView: View {
    
    var body: some View {
        ScrollView {
            MasonryGridView()
        }
        .background(
            ZStack {
                UnevenRoundedRectangle(
                    topLeadingRadius: 0,
                    bottomLeadingRadius: 10,
                    bottomTrailingRadius: 10,
                    topTrailingRadius: 0
                )
                .fill(Color.white)

                UnevenRoundedRectangle(
                    topLeadingRadius: 0,
                    bottomLeadingRadius: 10,
                    bottomTrailingRadius: 10,
                    topTrailingRadius: 0
                )
                .stroke(Color.black, lineWidth: 2)
            }
                .padding([.leading, .trailing], 10)
        )
        .padding(.bottom, 130)
    }
}

#Preview {
    MomentsPicsView()
}

