import Foundation
import CoreData

extension Moment {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Moment> {
        return NSFetchRequest<Moment>(entityName: "Moment")
    }

    @NSManaged public var momentID: String?
    @NSManaged public var title: String?
    @NSManaged public var descriptionText: String?
    @NSManaged public var tag: String?
    @NSManaged public var dateCreated: Date?
    @NSManaged public var dateEdited: Date?
    @NSManaged public var imageURL: String?
    @NSManaged public var syncStatus: String?
    @NSManaged public var uploadStatus: String?
}

extension Moment: Identifiable {
}
