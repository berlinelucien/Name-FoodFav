import React from 'react';
import {useSpring,animated} from 'react-spring';
import logo from '../logo.svg';
import '../App.css';

let FlyImage = () => {
    let flyProps = useSpring({
        from: {marginLeft: 1000, marginTop: 1000, opacity:0},
        to: {marginLeft: 0, marginTop:0, opacity:1}       
      })

    return (
    <animated.img className="App-logo" style={flyProps} src={logo} alt="logo"/>
    )

}

export {FlyImage}
