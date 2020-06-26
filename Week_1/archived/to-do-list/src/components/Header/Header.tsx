import * as React from 'react';
import './Header.css';

export interface HeaderProps {
    onToDoSubmit: (todoText: string) => void;
}

export class Header extends React.PureComponent<HeaderProps, {}> {

    private inputRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    public componentDidMount() {
        if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    public render() {
        return (
            <div id="header">
                <input 
                    type="text" 
                    id="todo-input"
                    ref={this.inputRef}
                    onKeyPress={this.onInputChange}
                    placeholder="Add todo text, press Enter to submit..."></input>
                <button 
                    id="todo-add-btn"
                    className="btn"
                    onClick={this.onTodoAddClickHandler}>Add Todo</button>
            </div>
        );
    }

    private onTodoAddClickHandler = (_event: React.MouseEvent) => {
        this.addTodo();
    }

    private onInputChange = (event: React.KeyboardEvent) => {
        // User pressed enter key
        if (event.charCode === 13) {
            this.addTodo();
        }
    }

    private addTodo() {
        if (this.inputRef && this.inputRef.current) {
            if (this.inputRef.current.value !== "") {
                this.props.onToDoSubmit(this.inputRef.current.value);
                this.inputRef.current.value = "";
            }
            else {
                alert("Cannot add empty todo!");
            }
        }
    }
}