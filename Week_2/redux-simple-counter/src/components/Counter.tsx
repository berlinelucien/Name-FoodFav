import React from 'react';
import '../App.css';
import { increaseAction, decreaseAction } from '../redux-components/actions';
import { CounterAppState } from '../redux-components/types';
import { connect } from 'react-redux';

// Counter component

// Render the component on the screen

interface ICounterProps {
    countProps: number;
    decreaseCountProps: any ; 
    increaseCountProps: any ; 
}

class Counter extends React.Component<ICounterProps> {

    // TODO: Complete this code such that we have the value of the counter in <span> and
    // add onClicks to decrease and increase the values of the counter
    render() {
        return (
            <div className="root" >
                <b>MY COUNTER</b>
                <button className="buttons" > - </button>
                <span></span>
                <button className="buttons" > + </button>
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
// TODO: complete the mapStateToProps function and replace 0
function mapStateToProps(appState: CounterAppState) {
    return {
        countProps: 0
    }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
    return {
        increaseCountProps: () => dispatch(increaseAction)
        ,
        decreaseCountProps: () => dispatch(decreaseAction)
    }
    //        decreaseCountProps: function () {
    //            return dispatch(decreaseAction);
    //        }

}

// The Hight Order Component (HOC)
// props need to be received by the component
let ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default ConnectedComponent;
