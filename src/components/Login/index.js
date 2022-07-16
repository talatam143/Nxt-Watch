import {Component} from 'react'
import Cookies from 'js-cookie'

import ThemeContext from '../../Context/nxtWatchContext'
import {
  DIV,
  LoginContainer,
  Image,
  FORM,
  INPUT,
  LABEL,
  BUTTON,
  PARA,
} from './styledComponents'

class Login extends Component {
  state = {
    inputType: true,
    username: '',
    password: '',
    loginStatus: false,
    errorMessage: '',
  }

  handleFailure = message => {
    this.setState({loginStatus: true, errorMessage: message})
  }

  handleSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 10})
    history.replace('/')
  }

  handleLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.handleSuccess(data.jwt_token)
    } else if (response.status === 400) {
      this.handleFailure(data.error_msg)
    }
  }

  handleCheckbox = () => {
    this.setState(oldState => ({
      inputType: !oldState.inputType,
    }))
  }

  handleUsername = e => {
    this.setState({username: e.target.value, loginStatus: false})
  }

  handlePassword = e => {
    this.setState({password: e.target.value, loginStatus: false})
  }

  render() {
    const {
      inputType,
      username,
      password,
      loginStatus,
      errorMessage,
    } = this.state
    const {history} = this.props
    const getToken = Cookies.get('jwt_token')
    if (getToken !== undefined) {
      history.replace('/')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <DIV theme={darkMode}>
              <LoginContainer className="LoginContainer" theme={darkMode}>
                <Image
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FORM
                  onSubmit={this.handleLogin}
                  className="LoginFormContainer"
                >
                  <LABEL htmlFor="usernameId" theme={darkMode}>
                    USERNAME
                  </LABEL>
                  <br />
                  <INPUT
                    type="text"
                    placeholder="Username"
                    id="usernameId"
                    value={username}
                    onChange={this.handleUsername}
                    theme={darkMode}
                  />
                  <br />
                  <br />
                  <LABEL htmlFor="passwordId" theme={darkMode}>
                    PASSWORD
                  </LABEL>
                  <br />
                  <INPUT
                    type={inputType ? 'password' : 'text'}
                    placeholder="Password"
                    id="passwordId"
                    value={password}
                    onChange={this.handlePassword}
                    theme={darkMode}
                  />
                  <br />
                  <INPUT
                    type="checkbox"
                    id="checkBoxId"
                    isCheck
                    onChange={this.handleCheckbox}
                  />
                  <LABEL theme={darkMode} htmlFor="checkBoxId">
                    Show Password
                  </LABEL>
                  <br />
                  <br />
                  <BUTTON type="submit">Login</BUTTON>
                  {loginStatus && <PARA>* {errorMessage}</PARA>}
                </FORM>
              </LoginContainer>
            </DIV>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
