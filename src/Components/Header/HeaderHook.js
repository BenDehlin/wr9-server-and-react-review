import { useState } from "react"
import "./Header.css"
// import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const HeaderHook = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false)
  // const history = useHistory()
  const {push} = useHistory()
  return (
    <header className="header">
      <nav className="buttons-container">
        <button className="button">About Us</button>
        <button className="button" onClick={() => push('/')}>Home</button>
        <button className="button">Contact Us</button>
        <button className="button">Services</button>
      </nav>
      <nav className="small-menu">
        <button
          className="hamburger-button"
          onClick={() => setDisplayMenu(!displayMenu)}
        >
          Open Menu
        </button>
      </nav>
      <nav
        className={displayMenu ? "visible-hamburger-menu" : "hamburger-menu"}
      >
        <button className="button">Ham About Us</button>
        <button className="button" onClick={() => push('/')}>Ham Home</button>
        <button className="button">Ham Contact Us</button>
        <button className="button">Ham Services</button>
      </nav>
    </header>
  )
}

// export default withRouter(HeaderHook)
export default HeaderHook
