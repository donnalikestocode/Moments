//
//  JournalEntryView.swift
//  Moments
//
//  Created by Donna on 3/18/25.
//

import SwiftUI

struct JournalEntryView: View {
    @State private var gratitudeText: String = "" // Stores user input

    var body: some View {
        VStack {
            Text("What are you grateful for today?") // Placeholder for quote of the day
                .font(.headline)
                .padding()

            TextEditor(text: $gratitudeText) // User types here
                .frame(height: 200)
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(10)

            Spacer()

            Button(action: {
                print("Gratitude saved: \(gratitudeText)") // Placeholder for saving
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
        .padding()
    }
}
