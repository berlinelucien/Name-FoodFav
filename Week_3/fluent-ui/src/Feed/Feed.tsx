import React, { Component } from "react";
import FeedItem, { FeedItemProps } from "./FeedItem";
import './Feed.css'

export interface FeedProps {
	items: FeedItemProps[];
}

export default class Feed extends Component<FeedProps> {
	render() {
		const feedItems = this.props.items.map((feedItemProp) => {
			return (
				<FeedItem
					profileViewProps={feedItemProp.profileViewProps}
					contentProps={feedItemProp.contentProps}
				/>
			);
		});

		return <div id="feed">{feedItems}</div>;
	}
}
