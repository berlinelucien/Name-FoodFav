import { Component } from "react";
import React from "react";
import { Image, ImageFit, IImageProps } from "@fluentui/react";
import "./FeedContent.css";

export interface FeedContentProps {
	imageUrl: URL;
}

export default class FeedContent extends Component<FeedContentProps> {
	render() {
		const imageProps: Partial<IImageProps> = {
			imageFit: ImageFit.centerCover,
			width: "100%",
			height: "100%",
            src: this.props.imageUrl.href,
            alt: 'Voldemort Image'
		};

		return (
			<div id="feed-content">
				<Image {...imageProps} />
			</div>
		);
	}
}
