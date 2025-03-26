//
//  HeaderView.swift
//  Moments
//
//  Created by Donna on 3/20/25.
//

import SwiftUI

struct HeaderView: View {
    
    var body: some View {
        ZStack {
            UnevenRoundedRectangle(
                topLeadingRadius: 10,
                bottomLeadingRadius: 0,
                bottomTrailingRadius: 0,
                topTrailingRadius: 10
            )
            .fill(Color(red: 105 / 255, green: 155 / 255, blue: 114 / 255))
            .frame(height: 50)
            .overlay(
                UnevenRoundedRectangle(
                    topLeadingRadius: 10,
                    bottomLeadingRadius: 0,
                    bottomTrailingRadius: 0,
                    topTrailingRadius: 10
                )
                .stroke(Color.black, lineWidth: 2)
                .frame(height: 50)
            )
            HStack {
                Text("my moments <3")
                    .font(.custom("Cute Notes", size: 20))
                    .foregroundColor(.white)
                    .padding(.leading, 20)
                Spacer()
                HStack(spacing: 5) {
                    Image(systemName: "minus.square")
                        .foregroundColor(.black)
                        .background(
                            RoundedRectangle(cornerRadius: 5)
                                .fill(Color(red: 217/255, green: 217/255, blue: 217/255))
                                .frame(width: 15, height: 15)
                        )
                    
                    Image(systemName: "square.grid.2x2")
                        .foregroundColor(.black)
                        .background(
                            RoundedRectangle(cornerRadius: 5)
                                .fill(Color(red: 217/255, green: 217/255, blue: 217/255))
                                .frame(width: 15, height: 15)
                        )
                    
                    Image(systemName: "xmark.square")
                        .foregroundColor(.black)
                        .background(
                            RoundedRectangle(cornerRadius: 5)
                                .fill(Color(red: 217/255, green: 217/255, blue: 217/255))
                                .frame(width: 15, height: 15)
                        )
                }
                .padding(.trailing, 20)
            }
        }
    }
}

struct HeaderView_Previews: PreviewProvider {
   static var previews: some View {
        HeaderView()
           .environmentObject(NavigationBarModel())
    }
}

