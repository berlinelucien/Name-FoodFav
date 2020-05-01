import React, { Component } from "react";
import { Persona, IPersonaSharedProps } from "@fluentui/react";
import "./FeedProfileView.css";

export interface FeedProfileViewProps {
	imageUrl: URL;
	title: string;
	subtitle: string;
}

export default class FeedProfileView extends Component<FeedProfileViewProps> {
	render() {
		return (
			<div id="feed-profile-view">
				<Persona
					imageUrl={this.props.imageUrl.href}
					text={this.props.title}
					secondaryText={this.props.subtitle}
				/>
			</div>
		);
	}
}
