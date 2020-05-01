import { Component } from "react";
import React from "react";
import { Image, ImageFit } from '@fluentui/react'
import './FeedContent.css'

export interface FeedContentProps {
    imageUrl: URL
}

export default class FeedContent extends Component<FeedContentProps> {
    render() {
        return (
            <div id="feed-content">
                Feed Content
                {/* <Image src={this.props.imageUrl.href} imageFit={ImageFit.centerCover} /> */}
            </div>
        )
    }
}