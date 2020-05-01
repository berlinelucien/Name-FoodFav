import React, { Component } from "react";
import "./FeedActionBar.css";
import { IIconProps, IconButton } from "@fluentui/react";

interface FeedActionBarProps {}

export default class FeedActionBar extends Component<FeedActionBarProps> {
	render() {
		const primaryButtons = ["Heart", "Chat", "Send"].map((iconName) => {
			return <IconButton iconProps={{ iconName: iconName }} />;
		});

		const secondaryButtons = ["SingleBookmark"].map((iconName) => {
			return <IconButton iconProps={{ iconName: iconName }} />;
		});

		return (
			<div id="feed-action-bar">
				<div id="primary-actions">{primaryButtons}</div>
				<div id="secondary-actions">{secondaryButtons}</div>
			</div>
		);
	}
}
