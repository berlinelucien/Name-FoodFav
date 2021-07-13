import firebaseApp from 'firebase/app'
import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyBTXhfQKZHqg1MCoNKprtZg68AflPNccMg",
    authDomain: "tnt-2021-firebase-demo.firebaseapp.com",
    databaseURL: "https://tnt-2021-firebase-demo-default-rtdb.firebaseio.com",
    projectId: "tnt-2021-firebase-demo",
    storageBucket: "tnt-2021-firebase-demo.appspot.com",
    messagingSenderId: "541950726243",
    appId: "1:541950726243:web:16d29f79e1aef5b2bae856"
  };


export class MyFirebase {
    constructor() {
        if (firebase.apps.length === 0) {
            firebaseApp.initializeApp(firebaseConfig);
        }
    }

    // // CREATE:
    // // basic write
    // // https://firebase.google.com/docs/database/web/read-and-write?authuser=0
    createUser1(name, eml, profilePicURL) {
        let newUserRef = firebase.database().ref('users/1');
        newUserRef.set({
            username: name,
            email: eml,
            profile_picture: profilePicURL
        }).then(
            () => { console.log("Added the new user successfully!"); },
            (reason) => (console.log("ERROR: Did NOT add the user.  Reason: " + reason))
        );;
    }

    createANOTHERUser(name, eml, profilePicURL) {
        let newUserRef = firebase.database().ref('users');
        newUserRef.push().set(
            {
                username: name,
                email: eml,
                profile_picture: profilePicURL
            }
        ).then(
            () => { console.log("Added the BRAND NEW new user successfully!"); },
            (reason) => (console.log("ERROR: Did NOT add the brand new user.  Reason: " + reason))
        );
    }

    // READ:
    // basic read
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#read_data_once
    getAnObject(location, callWhenFinished) {
        let ref = firebase.database().ref(location);
        ref.once('value').then(
            (snapshot) => {
                var objectToGet = snapshot.val() || null; // if we don't find anything then return an empty object
                console.log("read this value in the original handler: " + objectToGet);
                callWhenFinished(objectToGet);
            })
            .catch((error) => {
                console.log("Couldn't get the object: " + error);
                callWhenFinished(null)
            });
    }

    // READ:
    // read a list of objects
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#read_data_once
    getListOfObjects(location, callWhenFinished) {
        let ref = firebase.database().ref(location);
        ref.once('value').then(
            (snapshot) => {
                var listOfUsers = snapshot.val() || []; // Either we got the users, or else we have an empty list
                callWhenFinished(Object.values(listOfUsers));
            })
            .catch((error) => {
                console.log("Couldn't get list of objects: " + error);
                callWhenFinished([])
            });
    }

    // UPDATE:
    // this will only change the things that we give it, instead of replacing the object & all children
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#update_specific_fields
    // Get a key for a new Post.
    updateObject(location, updates, callWhenFinished) {
        let ref = firebase.database().ref(location);
        ref.update(updates, callWhenFinished); // This will call the 'callWhenFinished' function for us
    }

    // DELETE
    // https://firebase.google.com/docs/reference/node/firebase.database.Reference#remove
    deleteObject(location, callWhenFinished) {
        firebase.database().ref(location).remove()
            .then(callWhenFinished)
            .catch(callWhenFinished);
    }
}