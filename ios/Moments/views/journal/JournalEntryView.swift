//
//  JournalEntryView.swift
//  Moments
//
//  Created by Donna on 3/18/25.
//

import SwiftUI

struct JournalEntryView: View {
    
    @EnvironmentObject var navigationState: NavigationState
    
    @State private var gratitudeText: String = ""

    var body: some View {
        VStack {
            Text("What are you grateful for today?")
                .font(.headline)
                .padding()

            TextEditor(text: $gratitudeText) // User types here
                .frame(height: 200)
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(10)

            Spacer()

            Button(action: {
                print("Gratitude saved: \(gratitudeText)") 
            }) {
                Text("Save Gratitude")
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
                    .padding()
            }
        }
        .onAppear {
            navigationState.showNavBar = false
        }
        .onDisappear {
            navigationState.showNavBar = true
        }
        .padding()
    }
}
