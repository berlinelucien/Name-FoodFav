import React, { Component } from "react"
import Keyword from "./Keyword"
import "./KeywordCollection.css"

interface KeywordCollectionProps {
    words: string[]
}

export default class KeywordCollection extends Component<KeywordCollectionProps> {
    render() {
        return (
            <div id="keywordCollection">
                { this.props.words.map((text) => {
                    return <Keyword text={text} />
                })}
            </div>
        )
    }
}