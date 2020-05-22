import React, { Component } from "react";
import FeedContent, { FeedContentProps } from "./FeedContent";
import FeedActionBar from "./FeedActionBar";
import FeedProfileView, { FeedProfileViewProps } from "./FeedProfileView";
import './FeedItem.css'

export interface FeedItemProps {
	profileViewProps: FeedProfileViewProps;
	contentProps: FeedContentProps;
}

export default class FeedItem extends Component<FeedItemProps> {
	render() {
		return (
			<div id="feed-item">
				<FeedProfileView
					imageUrl={this.props.profileViewProps.imageUrl}
					title={this.props.profileViewProps.title}
					subtitle={this.props.profileViewProps.subtitle}
				/>
				<FeedContent imageUrl={this.props.contentProps.imageUrl} />
				<FeedActionBar />
			</div>
		);
	}
}