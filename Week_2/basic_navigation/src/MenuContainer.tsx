import React from "react"
import MenuButton from "./MenuButton"
import Menu from "./Menu"

interface MenuContainerProps {
  // MenuContainer Properties
}

interface MenuConstainerState {
  visible: boolean
}

export default class MenuContainer extends React.Component {
  state: MenuConstainerState

  constructor(props: MenuContainerProps) {
    super(props)

    this.state = { visible: false }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    )
  }

  handleMouseDown(e: MouseEvent) {
    this.toggleMenu()
    e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }
}
