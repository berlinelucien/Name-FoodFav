import React from "react";
import {Spring, config} from "react-spring/renderprops";


export default class AnimatedView extends React.Component {
    render() {
      return (
        <Spring from={{ width: '0' }} to={{ width: 'auto' }} config={{ duration: 3}}>
            {props => 
                 <a className="App-link"
                    href="https://www.react-spring.io/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React Spring</a>
            }
        </Spring>
      );
    }
  }
