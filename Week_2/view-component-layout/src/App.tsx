import React, { Component } from "react";
import "./App.css";
import KeywordCollection from "./keyword-collection/KeywordCollection";

export default class App extends Component {
  render() {
    return (
      <div id="keywordCollection">
        <KeywordCollection words={this.words()} />
      </div>
    );
  }

  words(): string[] {
    return [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty"
    ];
  }
}
