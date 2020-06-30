import React from 'react';
import '../App.css';
import { addItem } from '../redux/actions';
import { ToDoAppState } from '../redux/types';
import { connect } from 'react-redux';

// ToDoList component
// Render the component on the screen

class AddToDoItem extends React.Component<any> {
    // do not forget any here for this.props... to work

    render() {
        return (
            <div className="root" >
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="Enter a task" onChange={this.changeInputValue} /> <br />
                    <input type="submit" value="Add This Task!" />
                </form>
            </div>
        )
    };

    // contains the input value in the textbox
    private inputValue = "";

    private changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.inputValue = event.target.value;
    };

    private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // generate an alert with the valye of the textbox
        // alert(this.inputValue);

        this.props.addNewItem(this.inputValue);
    };
}

// Connect

// This file permits to match the redux-specific hooks to be able to use them in React

// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
// Here an object containing countValue is transmitted
function mapStateToProps(state: ToDoAppState) {
    return {
        listOfToDoItems: state.items
    }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
    return {
        addNewItem: function (desc: string) {
            let action = addItem(desc)
            return dispatch(action);
        },
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddToDoItem);


export default connectedComponent;
