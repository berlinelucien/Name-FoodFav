import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import MenuLink from "./MenuLink";

interface NavLinksProps {
  menuItems: MenuLink[];
}

export default class NavLinks extends React.Component<NavLinksProps> {
  render() {
    return (
      <div id="navlinks">
        {this.props.menuItems.map((value, index) => {
          if (value.link == '/') {
            return <NavLink exact to={value.link}>{value.name}</NavLink>
          } else {
            return <NavLink to={value.link}>{value.name}</NavLink>
          }
        })}
      </div>
    );
  }
}
