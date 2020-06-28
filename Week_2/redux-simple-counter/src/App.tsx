import './App.css';
import { connect } from 'react-redux';
import Counter from './Counter';
import {increaseAction, decreaseAction} from './actions';
import {CounterAppState} from './types';

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
  console.log("dispatch ", dispatch.type);
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