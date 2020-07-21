import React from "react";
import { pages } from "./App";

import { joinInfo } from "./redux/actions"
import { IYourShareState } from './redux/types';
import { connect } from 'react-redux';

interface SignupScreenProps {
  changePage: (page: pages) => void;
  saveJoinInfo: (n: string, t: string, d: string) => void;
}

class SignupPage extends React.Component<SignupScreenProps> {
  nameRef: React.RefObject<HTMLInputElement>;
  phoneNumRef: React.RefObject<HTMLInputElement>;
  zipCodeRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.nameRef = React.createRef();
    this.phoneNumRef = React.createRef();
    this.zipCodeRef = React.createRef();
  }

  render() {
    return (
      <div>
        <h1>Join Your Community</h1>
        <h2>Sign-up</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Name:
          <input type="text" ref={this.nameRef} />
            </label>
          </p>
          <p>
            <label>
              Phone number:
          <input type="text" ref={this.phoneNumRef} />
            </label>
          </p>
          <p>
            <label>
              Zip code:
          <input type="text" ref={this.zipCodeRef} />
            </label>
          </p>
          <p>
            <input type="submit" value="Join" />
          </p>
        </form>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Sign-In
        </p>
      </div>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current == null || this.phoneNumRef.current == null || this.zipCodeRef.current == null) {
      alert('INTERNAL ERROR: missing reference!');
      return;
    }
    this.props.saveJoinInfo(this.nameRef.current.value, this.phoneNumRef.current.value, this.zipCodeRef.current.value);
    this.props.changePage(pages.WelcomePage)
  }
}

// Map redux state to component state
function mapStateToProps(state: IYourShareState) {
  return {
    // no data props
  }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    saveJoinInfo: (n: string, p: string, z: string) => dispatch(joinInfo(n, p, z))
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);

export { connectedComponent as SignupPage }
