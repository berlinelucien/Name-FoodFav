import React from "react"
import "./Menu.css"

type MenuProps = {
  handleMouseDown: any
  menuVisibility: boolean
};

export default class Menu extends React.Component {
  props: MenuProps

  constructor(props: MenuProps) {
    super(props)
    this.props = props
  }

  render() {
    var visibility = "hide"

    if (this.props.menuVisibility) {
      visibility = "show"
    }

    return (
      <div
        id="sideMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
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
