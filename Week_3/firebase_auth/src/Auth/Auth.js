import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase";
import React from "react";

    //You can replace the function signature with
    //function signInWithEmailPassword(email, pass)
    function signInWithEmailPassword() {
        var email = "test@example.com";
        var password = "hunter2";
        // [START auth_signin_password]
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
        // [END auth_signin_password]
      }
      
    //You can replace the function signature with
    //function signInWithEmailPassword(email, pass)
      function signUpWithEmailPassword() {
        var email = "test@example.com";
        var password = "hunter2";
        // [START auth_signup_password]
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
        // [END auth_signup_password]
      }
      
    function signOut() {
        // [START auth_sign_out]
        firebase.auth().signOut()
        .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        // [END auth_sign_out]
      }
      
    function authStateListener() {
        // [START auth_state_listener]
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
        // [END auth_state_listener]
      }
      
    function currentUser() {
        // [START auth_current_user]
        const user = firebase.auth().currentUser;
      
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // ...
        } else {
          // No user is signed in.
        }
        // [END auth_current_user]
      }