import React from 'react';
import {useSpring,animated} from 'react-spring';
import logo from '../logo.svg';
import '../App.css';

let ShakeImage = () => {
    let shakeProps = useSpring({
        to: {marginLeft: 0, marginTop:0, opacity:1},
        from: {marginLeft: 1500, marginTop:-1000,opacity: 0},
        config: { duration : 1000 }        
      })

    return (
    <animated.img className="App-logo" style={shakeProps} src={logo} alt="logo"/>
    )

}

export {ShakeImage}
