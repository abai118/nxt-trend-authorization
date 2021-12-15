// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', status: true, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onsubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitted = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onsubmitSuccess()
      this.setState({status: true})
    } else {
      this.setState({status: false, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, status, errorMsg} = this.state
    return (
      <div className="mainCont">
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="loginCont">
          <form className="formCont" onSubmit={this.submitted}>
            <img
              className="logoImg"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="username-input-filed"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="username-input-filed"
              value={password}
              onChange={this.onChangePassword}
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          {status ? null : <p>{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
