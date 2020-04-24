import React from "react"
import "./Menu.css"

interface MenuProps {
  handleMouseDown: any
  menuVisibility: boolean
};

export default class Menu extends React.Component<MenuProps> {
  render() {
    var className = this.props.menuVisibility ? "show" : "hide"

    return (
      <div
        id="sideMenu"
        onMouseDown={this.props.handleMouseDown}
        className={className}
      >
        <h2>
          <a href="#">Home</a>
        </h2>
        <h2>
          <a href="#">Products</a>
        </h2>
        <h2>
          <a href="#">Accessories</a>
        </h2>
        <h2>
          <a href="#">Settings</a>
        </h2>
      </div>
    )
  }
}
