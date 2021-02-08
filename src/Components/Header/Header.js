import { Component } from "react"
import "./Header.css"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      displayMenu: false,
    }
  }

  render() {
    return (
      <header className="header">
        <nav className="buttons-container">
          <button className="button">About Us</button>
          <button className="button">Home</button>
          <button className="button">Contact Us</button>
          <button className="button">Services</button>
        </nav>
        <nav className="small-menu">
          <button
            className="hamburger-button"
            onClick={() =>
              this.setState({ displayMenu: !this.state.displayMenu })
            }
          >
            Open Menu
          </button>
        </nav>
        <nav
          //   className={`hamburger-menu ${
          //     this.state.displayMenu ? `visible-hamburger-menu` : ""
          //   }`}
          className={
            this.state.displayMenu ? "visible-hamburger-menu" : "hamburger-menu"
          }
        >
          <button className="button">Ham About Us</button>
          <button className="button">Ham Home</button>
          <button className="button">Ham Contact Us</button>
          <button className="button">Ham Services</button>
        </nav>
      </header>
    )
  }
}

export default Header
