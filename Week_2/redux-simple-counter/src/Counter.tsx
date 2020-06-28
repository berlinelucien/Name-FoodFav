import React from 'react';
import './App.css';
import { increaseAction, decreaseAction } from './actions';
import { CounterAppState } from './types';
import { connect } from 'react-redux';

// Counter component
// Render the component on the screen

class Counter extends React.Component<any> {
    // do not forget any here for this.props... to work

    render() {
        return (
            <div className="root" >
                <b>COUNTER</b>
                <button className="buttons" onClick={this.props.decreaseCount}> - </button>
                <span>{this.props.countValue}</span>
                <button className="buttons" onClick={this.props.increaseCount}> + </button>
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
function mapStateToProps(state: CounterAppState) {
    return {
        countValue: state.count
    }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default connectedComponent;
