//
//  GardenView.swift
//  Moments
//
//  Created by Donna on 3/17/25.
//

import SwiftUI

struct GardenView: View {
    
    var body: some View {
        ZStack {
            AnimatedBackgroundView()

            VStack {

                Text("Donna's Garden")
                    .font(.custom("Cute Notes", size: 20))
                    .foregroundColor(.white)
                    .frame(width: 287, height: 48)
                    .background(Color(red: 153/255, green: 205/255, blue: 93/255).opacity(0.15))
                    .cornerRadius(10)
                    .shadow(radius: 2)
                    .padding(.top, 50)
               
                Spacer()

                JournalWithThoughtBubble()

                Spacer()
            }
        }
    }
}

struct GardenView_Previews: PreviewProvider {
    static var previews: some View {
        GardenView()
            .environmentObject(NavigationBarModel())
    }
}

