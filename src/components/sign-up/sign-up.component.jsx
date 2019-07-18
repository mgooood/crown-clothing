import React from 'react';
import './sign-in.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <input type="email" name="email" value={this.state.email} />
          <label>Email</label>
          <input type="password" name="password" value={this.state.password} />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignUp;