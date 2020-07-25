import React from 'react';
import './CounterDisplay.css';
import { CounterContext } from '../App'

// CounterDisplay component
// PURPOSE: Display the current count on the screen

export default class CounterDisplay extends React.Component {

    render() {
        return <CounterContext.Consumer>
            {({ count, changeBy }) => (
                <div id="CounterDisplay" >
                    <div>The Count Is:</div>
                    <div className="showTheCounter">{count}</div>
                </div>
            )}
        </CounterContext.Consumer>
    };
}