import SwiftUI

struct TodayQuoteView: View {
    var onNext: () -> Void

    var body: some View {
        VStack {
            MomentWindowView(title: "today:", headerColor: Color(red: 0.65, green: 0.82, blue: 0.55)) {
                Text("I'm in no rush.\nI will take the scenic route.")
                    .font(.custom("Cute Notes", size: 18))
                    .padding()
            }
            Button(action: onNext) {
                Text("Next")
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color(.systemGray4))
                    .cornerRadius(10)
                    .font(.custom("Cute Notes", size: 18))
            }
            .padding()
        }
    }
}
