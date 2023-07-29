import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    email: '',
    number: '',
    showFirstNameError: false,
    showLastNameError: false,
    showEmailError: false,
    showNumberError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  onChangeEmail = event => {
    const {target} = event
    const {value} = target
    this.setState({email: value})
  }

  onChangeNumber = event => {
    const {target} = event
    const {value} = target
    this.setState({number: value})
  }

  renderPasswordField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          PASSWORD
        </label>
        <input
          type="password"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Enter the password"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="Enter the name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  renderEmailField = () => {
    const {email, showEmailError} = this.state
    const className = showEmailError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="emailAddress">
          EMAIL
        </label>
        <input
          id="emailAddress"
          type="email"
          className={className}
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Enter the Email"
        />
      </div>
    )
  }

  renderNumberField = () => {
    const {number, showNumberError} = this.state
    const className = showNumberError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="mobile">
          Number
        </label>
        <input
          id="mobile"
          type="number"
          className={className}
          value={number}
          onChange={this.onChangeNumber}
          placeholder="Enter the Number"
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validEmail = () => {
    const {email} = this.state
    return email !== ''
  }

  validNumber = () => {
    const {number} = this.state
    return number !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidEmail = this.validEmail()
    const isValidNumber = this.validNumber()

    if (isValidFirstName && isValidLastName && isValidEmail && isValidNumber) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showEmailError: !isValidEmail,
        showNumberError: !isValidNumber,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {
      showFirstNameError,
      showLastNameError,
      showEmailError,
      showNumberError,
    } = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderEmailField()}
        {showLastNameError && <p className="error-message">Required</p>}
        {this.renderPasswordField()}
        {showEmailError && <p className="error-message">Required</p>}
        {this.renderNumberField()}
        {showNumberError && <p className="error-message">Required</p>}
        <Link to="/">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </Link>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">MOVIES LIST</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default Login
