import React from "react";
import { Auth } from "../Auth/Auth";


export class CredentialsPage extends React.Component {

    constructor(props) {
        super(props)
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.loginUsernameRef = React.createRef();
        this.loginPasswordRef = React.createRef();
    }
    submitAccountSignupHandler = (event) => {
        event.preventDefault();
        console.log(
          "Username: " +
            this.usernameRef.current.value +
            " Password: " +
            this.passwordRef.current.value
        );
    
        let auth = new Auth()
        auth.signUpWithEmailPassword(this.usernameRef.current.value, this.passwordRef.current.value )
        this.props.onAuthStateChanged()
      };
    
      submitAccountLoginHandler = (event) => {
        event.preventDefault();
        console.log(
          "Username: " +
            this.loginUsernameRef.current.value +
            " Password: " +
            this.loginPasswordRef.current.value
        );
    
        let auth = new Auth()
        auth.signInWithEmailPassword(this.loginUsernameRef.current.value, this.loginPasswordRef.current.value )
        this.props.onAuthStateChanged()
      };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Firebase Demo</h1>
          Examples:
          <ol>
            <li>
              <form onSubmit={this.submitAccountSignupHandler}>
                Username: <input type="text" ref={this.usernameRef} />
                <br />
                Password: <input type="password" ref={this.passwordRef} />
                <br />
                <input
                  type="submit"
                  value="Click to create a user account!"
                />
              </form>
            </li>
            <li>
              <form onSubmit={this.submitAccountLoginHandler}>
                Username: <input type="text" ref={this.loginUsernameRef} />
                <br />
                Password: <input type="password" ref={this.loginPasswordRef} />
                <br />
                <input
                  type="submit"
                  value="Login"
                />
              </form>
            </li>
          </ol>
        </header>
      </div>
    );
  }
}