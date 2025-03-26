//
//  GardenView.swift
//  Moments
//
//  Created by Donna on 3/17/25.
//

import SwiftUI

struct GardenView: View {
    @EnvironmentObject var flowerViewModel: FlowerViewModel
    
    var body: some View {
        ZStack {
            AnimatedBackgroundView(imageName: "backgroundBefore", totalFrames: 3)
//            if flowerViewModel.hasFlowers() {
//                AnimatedBackgroundView(imageName: "backgroundAfter", totalFrames: 3)
//            } else {
//                AnimatedBackgroundView(imageName: "backgroundBefore", totalFrames: 3)
//            }

            VStack {

                Text("Donna's Garden")
                    .font(.custom("Cute Notes", size: 20))
                    .foregroundColor(.white)
                    .frame(width: 287, height: 48)
                    .background(Color(red: 153/255, green: 205/255, blue: 93/255).opacity(0.15))
                    .cornerRadius(10)
                    .shadow(radius: 2)
                    .padding(.top, 70)
               
                Spacer()
                
                ZStack {
                    ForEach(flowerViewModel.flowers) { flower in
                        FlowerView(flower: flower)
                    }
                }
                .frame(width: 300, height: 500)
                
//                if !flowerViewModel.hasFlowers() {
//                    JournalWithThoughtBubble()
//                }
                JournalWithThoughtBubble()

                Spacer()
            }
        }
        .onAppear {
            flowerViewModel.startMidnightTimer()  // Start the midnight reset
        }
    }
}

struct GardenView_Previews: PreviewProvider {
    static var previews: some View {
        let previewModel = FlowerViewModel(preview: true)  // Use the preview initializer

        return GardenView()
            .environmentObject(previewModel)  // Inject the flower model with mock data
            .environmentObject(NavigationBarModel())  // Inject the navigation model
    }
}

