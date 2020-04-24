import React from "react";
import "./App.css";
import MenuButton from "./menu/MenuButton";
import Menu from "./menu/Menu";
import NavLinks from "./navbar/NavLinks";

export interface MenuContainerProps {
  menuVisible: boolean;
  toggleMenu: (visible: boolean) => void;
}

class App extends React.Component<MenuContainerProps> {
  constructor(props: MenuContainerProps) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div id="navbar">
        <NavLinks menuItems={this.menuItems()} />
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.props.menuVisible}
          menuItems={this.menuItems()}
        />
        </div>
      </div>
    );
  }

  handleMouseDown(e: MouseEvent) {
    this.props.toggleMenu(this.props.menuVisible);
    e.stopPropagation();
  }

  menuItems(): Array<string> {
    return ['Home', 'Products', 'Accessories', 'Settings']
  }
}

export default App;
