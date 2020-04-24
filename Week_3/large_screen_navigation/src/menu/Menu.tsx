import React from "react";
import "./Menu.css";

interface MenuProps {
  handleMouseDown: any;
  menuVisibility: boolean;
  menuItems: Array<string>;
}

export default class Menu extends React.Component<MenuProps> {
  render() {
    var className = this.props.menuVisibility ? "show" : "hide";

    const listItems = this.props.menuItems.map((item) => {
      return (
        <h2>
          <a href="#">{item}</a>
        </h2>
      );
    });

    return (
      <div
        id="sideMenu"
        onMouseDown={this.props.handleMouseDown}
        className={className}
      >
        {listItems}
      </div>
    );
  }
}
