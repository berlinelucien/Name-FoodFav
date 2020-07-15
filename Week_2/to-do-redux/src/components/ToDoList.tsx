import React from 'react';
import { toggleItem } from '../redux/actions';
import { ToDoAppState, ToDoItem } from '../redux/types';
import { connect } from 'react-redux';

// ToDoList component
// Render the component on the screen

class ToDoList extends React.Component<any> {
    // do not forget any here for this.props... to work

    render() {
        return (
            <div className="root" >
                <ul>
                    {this.props.listOfToDoItems.map((item: ToDoItem) => {
                        let struckThru: string;
                        if (item.completed === false)
                            struckThru = "";
                        else
                            struckThru = "strikethrough"

                        return <li key={item.id}><input type="checkbox" id={item.id.toString()} onClick={() => this.props.toggleItem(item.id)} /><span className={struckThru}>{item.description}</span></li>
                    })}
                </ul>
            </div>
        )
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
        toggleItem: (id: string) => dispatch(toggleItem(parseInt(id)))

    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);


export default connectedComponent;
