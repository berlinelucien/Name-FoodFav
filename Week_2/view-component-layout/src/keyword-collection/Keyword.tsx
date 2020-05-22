import React, { Component } from "react"

interface KeywordProps {
    text: string
}

export default class Keyword extends Component<KeywordProps> {
    render() {
        return <div id={this.props.text}><p>{this.props.text}</p></div>
    }
}