import { useState } from "react"
import "./Header.css"
// import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const HeaderHook = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false)
  // const history = useHistory()
  const {push} = useHistory()
  console.log(props)
  return (
    <header className="header">
      <nav className="buttons-container">
      {props.user && <p>YOUR EMAIL: {props.user.email}</p>}
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

const mapStateToProps = state => {
  return state.authReducer
}
export default connect(mapStateToProps)(HeaderHook)
