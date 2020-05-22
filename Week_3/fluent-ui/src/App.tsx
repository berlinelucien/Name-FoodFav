import React, { Component } from "react";
import Feed from "./Feed/Feed";
import "./App.css";
import DataProvider from "./DataProvider";

interface AppProps {}

export default class App extends Component<AppProps> {
	constructor(props: AppProps) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Feed items={DataProvider.getData()} />
			</div>
		);
	}
}
