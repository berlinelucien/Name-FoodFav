import React from "react";
import './App.css';
import {FlyImage} from './components/FlyImage'
import { useSpring, animated } from 'react-spring';


const App = () => {
  const leftAnimation = useSpring({
    from: { marginLeft: -5000 },
    to: { marginLeft: 0 },
    delay:100
  });

  const rightAnimation = useSpring({
    from: { marginRight: -5000 },
    to: { marginRight: 0 },
    delay:1000
  });

  const multiAnimation = useSpring({
    from: { opacity: 0, color: 'red' },
    to: { opacity: 1, color: '#ffaaee' },
    config: {duration : 4000},
    delay:2000
 
  });
  return (
    <div className="App" >
      <header className="App-header">
        <FlyImage />
      </header>
      <animated.div style={leftAnimation}>Learn </animated.div> 
      <animated.div style={rightAnimation}>Animation </animated.div>
      <animated.a style={multiAnimation}
                  className="App-link"
                  href="https://www.react-spring.io/"
                  target="_blank"
                  rel="noopener noreferrer">(Demos)</animated.a>
    </div>
    );
  }

  export default App;
