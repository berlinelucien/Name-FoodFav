import React from "react";
import { pages } from "./App";

import { createSignInAction } from "./redux/actions"
import { Edu4YouState } from './redux/types';
import { connect } from 'react-redux';

import Lottie from 'react-lottie';
import animationData from './lotties/grad-owl.json';

// This file uses ref to showcase how to use them
// A RefObject is a reference to an HTML element
// That is the imperative way of using React and you 
// can access and manipulate the DOM

interface SignInPageProps {
  changePage: (page: pages) => void;
  saveSignInInfosProps: (n: string, p: string) => void; // Connects Redux to the component through props
}

class SignInPage extends React.Component<SignInPageProps> {

  // name and password to define this page
  nameRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props: SignInPageProps) {
    super(props);
    this.nameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  // lottie
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  render() {
    return (
      <div>
        <h1>Edu4You</h1>

        <Lottie
          options={this.defaultOptions}
          height={300}
          width={300}
        />

        <h2>Sign in</h2>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Username:
              <input type="text" placeholder="student1 to student4" ref={this.nameRef} />
            </label>
          </p>
          <p>
            <label>
              Password:
              <input type="text" ref={this.passwordRef} />
            </label>
          </p>
          <p>
            <input type="submit" value="Sign in" />
          </p>
        </form>

        <p>
          <i>Don't have an account, create one (Coming soon!)</i>
        </p>

      </div>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current == null || this.passwordRef.current == null) {
      alert('SignInPage | INTERNAL ERROR: missing reference!');
      return;
    }
    const username = this.nameRef.current.value;
    const password = this.passwordRef.current.value;
    // This is hardcoded here. In general this is where we would use the database and we 
    // would not know the list of all students of this app
    const listPossibleUsernames = ["student1", "student2", "student3", "student4"];
    if (listPossibleUsernames.indexOf(username) > -1) {
      this.props.saveSignInInfosProps(username, password);
      this.props.changePage(pages.MainPage);
    } else {
      alert('This username does not exist!');
      this.props.changePage(pages.SignInPage);
    }
  }
}

// Map redux state to component props
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
function mapStateToProps(appState: Edu4YouState) {
  return {
    // no props from state here
  }
}

// Map redux actions to component props
// This function returns an object with one function that the component can call. This function
// is a props of the component
function mapDispatchToProps(dispatch: any) {
  return {
    saveSignInInfosProps: (u: string, p: string) => dispatch(createSignInAction(u, p))
  }
}

// The Hight Order Component (HOC)
// props need to be received by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);

export { connectedComponent as SignInPage }
