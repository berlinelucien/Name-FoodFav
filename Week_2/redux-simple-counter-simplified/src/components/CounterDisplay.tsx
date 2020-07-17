import React from 'react';
import './CounterDisplay.css';
import { CounterAppState } from '../redux-components/ReduxStuff';
import { connect } from 'react-redux';

// CounterDisplay component
// PURPOSE: Display the current count on the screen

interface IShowCounterProps {
    countProps: number;
}

class CounterDisplay extends React.Component<IShowCounterProps> {

    render() {
        return (
            <div id="CounterDisplay" >
                <div>The Count Is:</div>
                <div className="showTheCounter">{this.props.countProps}</div>
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
        countProps: appState.count
    }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
    return {
        // no actions - we're only showing the counter
    }
}

// The Hight Order Component (HOC)
// props need to be received by the component
let ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterDisplay);

export default ConnectedComponent;