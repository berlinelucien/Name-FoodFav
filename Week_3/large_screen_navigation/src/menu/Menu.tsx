import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import MenuLink from "../navbar/MenuLink";

interface MenuProps {
  handleMouseDown: any;
  menuVisibility: boolean;
  menuItems: MenuLink[];
}

export default class Menu extends React.Component<MenuProps> {
  render() {
    var className = this.props.menuVisibility ? "show" : "hide";

    return (
      <div id="sideMenu" className={className}>
        {this.props.menuItems.map((value, index) => {
          if (value.link == '/') {
            return <NavLink exact to={value.link} onClick={this.props.handleMouseDown}>
              {value.name}
            </NavLink>
          } else {
            return (
              <NavLink to={value.link} onClick={this.props.handleMouseDown}>
                {value.name}
              </NavLink>
            );
          }
        })}
      </div>
    );
  }
}
