import React, { Component } from "react";
import { Persona } from "@fluentui/react";
import './FeedProfileView.css'

export interface FeedProfileViewProps {
    imageUrl: URL
    title: string
    subtitle: string
}

export default class FeedProfileView extends Component<FeedProfileViewProps> {
    render() {
        return (
            <div id="feed-profile-view">
                Profile View
            </div>
        )
    }
}