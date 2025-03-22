//
//  NavigationState.swift
//  Moments
//
//  Created by Donna on 3/19/25.
//

import SwiftUI

class NavigationBarModel: ObservableObject {
    @Published var showNavBar: Bool = true
    @Published var currentScreen: Screen = .garden

    enum Screen: String {
        case garden = "garden"
        case journal = "journal"
        case moments = "moments"
    }

    func navigateTo(_ screen: Screen) {
        currentScreen = screen
    }
}
