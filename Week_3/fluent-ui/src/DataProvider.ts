import { FeedContentData, FeedProfileViewData, FeedItemData } from './Feed/FeedData';

export default class DataProvider {
    static getData(): FeedItemData[] {
        const imageUrl = new URL("https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort-smiling.jpg/revision/latest/scale-to-width-down/340?cb=20180920185319")
        const contentUrl = new URL("https://live.staticflickr.com/4828/31281889047_e930645d2d_b.jpg")
        const contentData = new FeedContentData(contentUrl)
        const profileData = new FeedProfileViewData(imageUrl, 'Tom Riddle', 'Seattle, WA')
        const itemData = new FeedItemData(profileData, contentData)
        return Array(25).fill(itemData)
    }
}