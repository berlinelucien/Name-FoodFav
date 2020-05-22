import React from 'react'
import './MenuButton.css';
import icon from './menu-icon.png'

interface MenuButtonProps {
    handleMouseDown: any
}

export default class MenuButton extends React.Component<MenuButtonProps> {
    render() {
        return <button id="menuButton" onMouseDown={this.props.handleMouseDown}><img src={icon} alt="menu-button" /></button>
    }
}