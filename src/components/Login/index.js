import {Component} from 'react'

import cookies from 'js-cookies'
import {Link} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  OnSubmitSuccess = JwtToken => {
    const {history} = this.props
    cookies.set('jwt_token', JwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const LoginUrl =
      'https://bursting-gelding-24.hasura.app/api/rest/get-user-id'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.OnSubmitSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state

    return (
      <div className="app-container">
        <form className="login-container" onSubmit={this.onSubmitLoginForm}>
          <div className="username-container">
            <label className="label-username" htmlFor="emailAddress">
              EMAIL
            </label>
            <input
              id="emailAddress"
              className="input-username"
              value={username}
              onChange={this.onChangeUsername}
              type="email"
              placeholder="Please enter email"
            />
          </div>
          <div className="username-container">
            <label className="label-username" htmlFor="passwordA">
              PASSWORD
            </label>
            <input
              id="passwordA"
              className="input-username"
              value={password}
              onChange={this.onChangePassword}
              type="password"
              placeholder="please enter password"
            />
          </div>
          <Link to="/">
            <button className="login-button" type="submit">
              Login
            </button>
          </Link>
          {showSubmitError && <p className="error-msg">* {errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default Login
