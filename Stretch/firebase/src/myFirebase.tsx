import firebaseApp from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCzUTWQpoVu956eV_6AQtI5ENtwyxjtHeQ",
    authDomain: "tnt-2020-firebase-demo.firebaseapp.com",
    databaseURL: "https://tnt-2020-firebase-demo.firebaseio.com",
    projectId: "tnt-2020-firebase-demo",
    storageBucket: "tnt-2020-firebase-demo.appspot.com",
    messagingSenderId: "351067380140",
    appId: "1:351067380140:web:7fcb50dc0a72bf8fda4209"
};


export class MyFirebase {
    constructor() {
        if (firebase.apps.length === 0) {
            firebaseApp.initializeApp(firebaseConfig);
        }
    }
    // CRUD:

    // CREATE:
    // basic write
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0
    createUser1(name: string, eml: string, profilePicURL: string) {

        let newUserRef = firebase.database().ref('users/1');
        newUserRef.set({
            username: name,
            email: eml,
            profile_picture: profilePicURL
        }).then(
            () => { console.log("Added the new user successfully!"); },
            (reason: any) => (console.log("ERROR: Did NOT add the user.  Reason: " + reason))
        );
    }

    // TODO: Use push to add a child element
    // https://firebase.google.com/docs/reference/node/firebase.database.Reference#push
    // with a previous id of '1', this generated the key of 'MD6yX0XNX7riPu2-_90' :)
    createANOTHERUser(name: string, eml: string, profilePicURL: string) {
        let newUserRef = firebase.database().ref('users');
        newUserRef.push().set(
            {
                username: name,
                email: eml,
                profile_picture: profilePicURL
            }
        ).then(
            () => { console.log("Added the BRAND NEW new user successfully!"); },
            (reason: any) => (console.log("ERROR: Did NOT add the brand new user.  Reason: " + reason))
        );
    }

    // READ:
    // basic read
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#read_data_once
    getAnObject(location: string, callWhenFinished: (data: any) => void): void {
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
    getListOfObjects(location: string, callWhenFinished: (data: any) => void): void {
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
    updateObject(location: string, updates: {}, callWhenFinished: (err: Error | null) => void): void {
        let ref = firebase.database().ref(location);
        ref.update(updates, callWhenFinished); // This will call the 'callWhenFinished' function for us
    }

    // DELETE
    // https://firebase.google.com/docs/reference/node/firebase.database.Reference#remove
    deleteObject(location: string, callWhenFinished: (err: Error | null) => void): void {
        firebase.database().ref(location).remove()
            .then(callWhenFinished)
            .catch(callWhenFinished);
    }
}

//export const FirebaseContext = React.createContext<Firebase | null>(null);