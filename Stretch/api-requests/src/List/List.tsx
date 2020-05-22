import React, { Component } from "react";
import './List.css'

type Json = { [key: string]: any };

interface ListProps {}

interface ListState {
	todos: Json[];
}

export default class List extends Component<ListProps, ListState> {
	constructor(props: ListProps, state: ListState) {
		super(props, state);

		this.state = {
			todos: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ todos: data });
			})
			.catch(console.log);
	}

	render() {
		return (
			<div>
				<h2>List of todos</h2>
				<ul className='card-container'>
					{this.state.todos.map((todo: Json) => (
                        <div className='card' id={'completed-' + todo.completed}>
                            <li>{todo.title}</li>
                        </div>
					))}
				</ul>
			</div>
		);
	}
}
