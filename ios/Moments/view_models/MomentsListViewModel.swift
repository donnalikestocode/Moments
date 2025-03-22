import SwiftUI

class MomentsListViewModel: ObservableObject {
    @Published var moments: [MomentEntry] = [
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo3"),
                ImageEntry(image: "photo14"),
            ],
            flower: "roses",
            quote: "I'm in no rush.\nI will take the scenic route.",
            gratitude: "I'm so grateful for being able to watch our friends get married and soak in the warm Hawaii sun :)"
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo2"),
                ImageEntry(image: "photo13"),
                ImageEntry(image: "photo19"),
            ],
            flower: "daisys",
            quote: "I'm growing slowly and that's ok!",
            gratitude: "I'm grateful for girls weekend in LA hehe!!"
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo20"),
                ImageEntry(image: "photo21"),
            ],
            flower: "tulips",
            quote: "Life is beautiful and you have time.",
            gratitude: "Grateful for seeing all the dahlias during my run today :')."
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo1"),
                ImageEntry(image: "photo11"),
                ImageEntry(image: "photo12")
            ],
            flower: "roses",
            quote: "You will bloom \nif you take the time to water \nYourself",
            gratitude: "I'm so grateful for going to UCSB"
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo9"),
                ImageEntry(image: "photo8"),
            ],
            flower: "tulips",
            quote: "Life is beautiful and you have time.",
            gratitude: "Grateful for the yummy vietnamese food that Perry's mom makes me :)."
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo4"),
                ImageEntry(image: "photo10")
            ],
            flower: "cherry blossoms",
            quote: "The vibration of being you are & doing what you love is magnetic. \nYou will align everything you need in your life with that energy",
            gratitude: "Grateful for being able to spend quality time with Amy."
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo7"),
                ImageEntry(image: "photo5")
            ],
            flower: "roses",
            quote: "You don't have to go Fast to go Far",
            gratitude: "Grateful for my me time hehe"
        ),
        MomentEntry(
            date: Date(),
            images: [
                ImageEntry(image: "photo16"),
                ImageEntry(image: "photo17"),
                ImageEntry(image: "photo15"),
                ImageEntry(image: "photo18")
            ],
            flower: "roses",
            quote: "The more I relax \nthe more I receive. \nLife doesn't respond to my effort, it respondes to my frequency.",
            gratitude: "Grateful for getting VIP tickets to SEVENTEEN with Bri and Anna!!! Ahh"
        )
        
    ]
    
    @Published var leftColumnImages: [(moment: MomentEntry, image: ImageEntry)] = []
    @Published var rightColumnImages: [(moment: MomentEntry, image: ImageEntry)] = []
    
    init() {
        calculateBalancedColumns()
    }
    
    func calculateBalancedColumns() {
        leftColumnImages = []
        rightColumnImages = []
        
        var leftHeight: CGFloat = 0
        var rightHeight: CGFloat = 0
        
        for moment in moments {
            for imageEntry in moment.images {
                let imageHeight = imageEntry.height
                
                if leftHeight <= rightHeight {
                    leftColumnImages.append((moment, imageEntry))
                    leftHeight += imageHeight
                } else {
                    rightColumnImages.append((moment, imageEntry))
                    rightHeight += imageHeight
                }
            }
        }
    }
}

