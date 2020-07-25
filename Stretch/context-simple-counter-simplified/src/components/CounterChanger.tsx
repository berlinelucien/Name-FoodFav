import React from 'react';
import './CounterChanger.css';
import { CounterContext } from '../App'

// CounterChanger component
// PURPOSE: Display a set of buttons that allow the user to change the current count

// How to change the state via a context: pass a function that'll do it
// https://reactjs.org/docs/context.html#updating-context-from-a-nested-component

export default class CounterChanger extends React.Component {

    // TODO: Complete this code such that we have the value of the counter in <span> and
    // add onClicks to decrease and increase the values of the counter
    render() {
        return <CounterContext.Consumer>
            {value => (
                <div >
                    <button className="buttons" onClick={() => value.changeBy(-5)}> -5 </button>
                    <button className="buttons" onClick={() => value.changeBy(-1)}> -1 </button>
                    <button className="buttons" onClick={() => value.changeBy(1)}> +1 </button>
                    <button className="buttons" onClick={() => value.changeBy(5)}> +5 </button>
                </div>
            )}
        </CounterContext.Consumer>

    };
}
