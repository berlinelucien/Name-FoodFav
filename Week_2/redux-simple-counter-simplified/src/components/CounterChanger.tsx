import React from 'react';
import './CounterChanger.css';
import { CounterAppState, createChangeAction } from '../redux-components/ReduxStuff';
import { connect } from 'react-redux';

// CounterChanger component
// PURPOSE: Display a set of buttons that allow the user to change the current count

interface ICounterChanger {
    createChangeAction: (changeBy: number) => void;
}

class CounterChanger extends React.Component<ICounterChanger> {

    // TODO: Complete this code such that we have the value of the counter in <span> and
    // add onClicks to decrease and increase the values of the counter
    render() {
        return (
            <div >
                <button className="buttons" onClick={() => this.props.createChangeAction(-5)}> -5 </button>
                <button className="buttons" onClick={() => this.props.createChangeAction(-1)}> -1 </button>
                <button className="buttons" onClick={() => this.props.createChangeAction(1)}> +1 </button>
                <button className="buttons" onClick={() => this.props.createChangeAction(5)}> +5 </button>
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
        // nothing to display in this component, so we don't need 
    }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
    return {
        createChangeAction: (changeBy: number) => dispatch(createChangeAction(changeBy))
    }
}

// The Hight Order Component (HOC)
// props need to be received by the component
let ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterChanger);


export default ConnectedComponent;
