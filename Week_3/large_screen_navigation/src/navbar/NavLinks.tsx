import React from "react";
import "./NavLinks.css";

interface NavLinksProps {
  menuItems: Array<string>;
}

export default class NavLinks extends React.Component<NavLinksProps> {
  render() {
    const listItems = this.props.menuItems.map((item) => {
      return (
        <li>
          <a href="#">{item}</a>
        </li>
      );
    });

    return (
      <div id="navlinks">
        <ul>{listItems}</ul>
      </div>
    );
  }
}
