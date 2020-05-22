import { FeedProps } from "./Feed"
import { FeedItemProps } from "./FeedItem"
import { FeedContentProps } from "./FeedContent"
import { FeedProfileViewProps } from "./FeedProfileView"

class FeedData implements FeedProps {
    items: FeedItemProps[]

    constructor(items: FeedItemProps[]) {
        this.items = items
    }
}

class FeedItemData implements FeedItemProps {
    profileViewProps: FeedProfileViewProps
    contentProps: FeedContentProps

    constructor(profileViewProps: FeedProfileViewProps, contentProps: FeedContentProps) {
        this.profileViewProps = profileViewProps
        this.contentProps = contentProps
    }
}

class FeedProfileViewData implements FeedProfileViewProps {
    imageUrl: URL
    title: string
    subtitle: string

    constructor(imageUrl: URL, title: string, subtitle: string) {
        this.imageUrl = imageUrl
        this.title = title
        this.subtitle = subtitle
    }
}

class FeedContentData implements FeedContentProps {
    imageUrl: URL

    constructor(imageUrl: URL) {
        this.imageUrl = imageUrl
    }
}

export { FeedData, FeedItemData, FeedProfileViewData, FeedContentData }
