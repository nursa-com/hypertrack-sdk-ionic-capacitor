import Foundation

@objc public class HyperTrackSdk: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
