import app from 'firebase/app'
import firebase from 'firebase'
import React from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyCzUTWQpoVu956eV_6AQtI5ENtwyxjtHeQ",
    authDomain: "tnt-2020-firebase-demo.firebaseapp.com",
    databaseURL: "https://tnt-2020-firebase-demo.firebaseio.com",
    projectId: "tnt-2020-firebase-demo",
    storageBucket: "tnt-2020-firebase-demo.appspot.com",
    messagingSenderId: "351067380140",
    appId: "1:351067380140:web:7fcb50dc0a72bf8fda4209"
};

export class Firebase {

    private firebaseApp: firebase.app.App;
    private firebaseDB: firebase.database.Database;

    constructor() {
        this.firebaseApp = app.initializeApp(firebaseConfig);
        this.firebaseDB = this.firebaseApp.database();

        // first, let's create a Firebase DB
        // Use the 'Realtime DB', not the 'cloud firestore'
        // 
        // Let's get familiar with this
        //      Add some stuff to it
        //      Notice that there's no schema / structure enforcement
        //      You CANNOT have circular references


        // Let's talk briefly about what to put in here
        //      For AppPrototype, maybe just put all of this.state into it?
        //  Normally you'd only store data that you want to persist across runs of your program 

        // more-or-less:
        // config info
        // database connection
        // get a reference to the place in the JSON doc that you want to modify
        // call set / once / update / remove / push on the ref
        // if you want to know whether it worked or not use Promise.then to run code once it's finished
        //      (or skip it)


        // CRUD:

        // CREATE:
        // basic write
        // https://firebase.google.com/docs/database/web/read-and-write?authuser=0
        firebase.database().ref('users/1').set({
            username: "UserName_1",
            email: "Email_1@email.com",
            profile_picture: "imageUrl_1"
        });

        // READ:
        // basic read
        // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#read_data_once
        firebase.database().ref('/users/1').once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            console.log("read this value in the original handler: " + username);
            return username;
        });

        // UPDATE:
        // this will only change the things that we give it, instead of replacing the object & all children
        // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#update_specific_fields
        // Get a key for a new Post.

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates: any = {};
        updates['username'] = "UserName_1_UPDATED";
        updates['email'] = "NEW_email@email.com";

        firebase.database().ref('users/1').update(updates);

        // TODO: Use push to add a child element
        // https://firebase.google.com/docs/reference/node/firebase.database.Reference#push
        // with a previous id of '1', this generated the key of 'MD6yX0XNX7riPu2-_90' :)
        let newUserRef = firebase.database().ref('users').push();
        let newUserPromise = newUserRef.set(
            {
                username: "UserName_2",
                email: "Email_2_@email.com",
                profile_picture: "imageUrl_2"
            }
        );

        newUserPromise.then(
            function () {
                console.log('Synchronization succeeded');
            }) // jQuery style chaining here
            .catch(function (error) {
                console.log('Synchronization failed: ' + error);
            });

        // DELETE
        // Now let's remove user #3 (added manually)
        // https://firebase.google.com/docs/reference/node/firebase.database.Reference#remove
        firebase.database().ref('users/3').remove()
            .then(function () {
                console.log("Remove succeeded.") // NOTE: This gets run even if there is no 'user 3'
            })
            .catch(function (error) {
                console.log("Remove failed: " + error.message)
            });
    }
}

export const FirebaseContext = React.createContext<Firebase | null>(null);