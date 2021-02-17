import { Component } from "react"
import axios from "axios"
import {connect} from 'react-redux'
import {setUser} from '../../redux/authReducer'

class AuthClass extends Component {
  // constructor(){
  //     super()
  //     this.state = {
  //         email: '',
  //         password: ''
  //     }
  // }

  handleLogin = () => {
    axios
      .post("/auth/login", { email: "test", password: "pass" })
      .then((res) => {
        this.props.setUser(res.data)
        this.props.history.push('/')
      })
      .catch((err) => console.log(err))
  }

  handleRegister = () => {
      axios.post('/auth/register', {email: 'test', password: 'pass'})
      .then((res) => {
        this.props.setUser(res.data)
        this.props.history.push('/')      
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Auth Page</h1>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}

export default connect(null, {setUser})(AuthClass)
