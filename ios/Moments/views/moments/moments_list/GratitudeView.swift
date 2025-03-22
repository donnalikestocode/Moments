//
//  GratitudeView.swift
//  Moments
//
//  Created by Donna on 3/21/25.
//
import SwiftUI

struct GratitudeView: View {
    var entry: MomentEntry
    
    var body: some View {
        Text(entry.gratitude)
            .font(.custom("Cute Notes", size: 18))
            .padding()
    }
}
