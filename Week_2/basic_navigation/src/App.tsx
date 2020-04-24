import React from 'react'
import './App.css'
import MenuButton from "./menu/MenuButton"
import Menu from "./menu/Menu"

interface MenuContainerProps {
  // MenuContainer Properties
}

interface MenuConstainerState {
  visible: boolean
}

class App extends React.Component {
  state: MenuConstainerState

  constructor(props: MenuContainerProps) {
    super(props)

    this.state = { visible: false }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  render() {
    return (
      <div className="App">
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

export default App