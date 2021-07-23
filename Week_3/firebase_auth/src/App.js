import React from "react";
import "./App.css";
import firebaseApp from "firebase/app";
import firebase from "firebase";
import { CredentialsPage } from "./pages/CredentialsPage";
import { WelcomePage } from "./pages/WelcomePage";
import { Auth } from "./Auth/Auth";

var firebaseConfig = {
  apiKey: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  authDomain: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  databaseURL:
    "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  projectId: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  storageBucket:
    "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  messagingSenderId:
    "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  appId: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
};
class App extends React.Component {

  constructor(props) {
    super(props);

    if (firebase.apps.length === 0) {
      firebaseApp.initializeApp(firebaseConfig);
    }
    this.auth = new Auth()
    this.state = {
      currentUser: this.auth.currentUser()
    }
  }
  render() {
    if (this.state.currentUser !== null) {
        return <WelcomePage onAuthStateChanged={this.onAuthStateChanged}/>
    }

    else {
      return <CredentialsPage onAuthStateChanged={this.onAuthStateChanged} />
    }
  }

  onAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //var uid = user.uid;
          // ...
          this.setState({currentUser: user})
        } else {
          // User is signed out
          // ...
          this.setState({currentUser: null})
        }
      });
  } 
}
export default App;
