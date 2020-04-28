import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

interface MenuProps {
  handleMouseDown: any;
  menuVisibility: boolean;
}

export default class Menu extends React.Component<MenuProps> {
  render() {
    var className = this.props.menuVisibility ? "show" : "hide";

    return (
      <div id="sideMenu" className={className}>
          <NavLink to="/" onClick={this.props.handleMouseDown}>
            Home
          </NavLink>
       
          <NavLink to="/products" onClick={this.props.handleMouseDown}>
            Products
          </NavLink>
        
          <NavLink to="/accessories" onClick={this.props.handleMouseDown}>
            Accessories
          </NavLink>
        
          <NavLink to="/settings" onClick={this.props.handleMouseDown}>
            Settings
          </NavLink>
      </div>
    );
  }
}
