import firebaseApp from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tnt-mike-demo.firebaseapp.com",
    databaseURL: "https://tnt-mike-demo-default-rtdb.firebaseio.com",
    projectId: "tnt-mike-demo",
    storageBucket: "tnt-mike-demo.appspot.com",
    messagingSenderId: "1095239119272",
    appId: "1:1095239119272:web:1099644bd4df3a680cad9d",
};

export class MyFirebase {
    constructor() {
        if (firebase.apps.length === 0) {
            firebaseApp.initializeApp(firebaseConfig);
        }
    }

    getImage(imageName, fnxToRunWhenWeHaveTheUrl) {
        var starsRef = firebase
            .storage()
            .ref()
            .child("images/" + imageName);

        starsRef
            .getDownloadURL()
            .then((url) => {
                fnxToRunWhenWeHaveTheUrl(url);
            })
            .catch((error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/object-not-found":
                        console.log("File doesn't exist");
                        break;
                    case "storage/unauthorized":
                        console.log(
                            "User doesn't have permission to access the object"
                        );
                        break;
                    case "storage/canceled":
                        console.log("User canceled the upload");
                        break;
                    default:
                    case "storage/unknown":
                        console.log(
                            "Unknown error occurred, inspect the server response"
                        );
                        break;
                }
            });
    }

    storeFile(file, fnxToCall) {
        // The file param would be a File object from a file selection event in the browser.
        // See:
        // - https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
        // - https://developer.mozilla.org/en-US/docs/Web/API/File

        const metadata = {
            contentType: file.type,
        };

        // [START storage_on_complete]
        const storageRef = firebase.storage().ref();
        storageRef
            .child("images/" + file.name)
            .put(file, metadata)
            .then((snapshot) => {
                console.log("Uploaded", snapshot.totalBytes, "bytes.");
                console.log("File metadata:", snapshot.metadata);
                // Let's get a download URL for the file.
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log("File available at", url);

                    // if we were given a function to call, then call it now:
                    if (fnxToCall) {
                        fnxToCall(url);
                    }
                });
            })
            .catch((error) => {
                console.error("Upload failed", error);
                // ...
            });
    }

    getAllImages(fnxToRun) {
        console.log("getting all images");
        // Create a reference under which you want to list
        var listRef = firebase.storage().ref().child("/images");

        // Find all the prefixes and items.
        listRef
            .listAll()
            .then((res) => {
                res.items.forEach((theImageRef) =>
                    this.getUrlForAnImage(theImageRef, fnxToRun)
                );
            })
            .catch((error) => {
                console.log("Error getting all images! " + error);
                // Uh-oh, an error occurred!
            });
    }

    getUrlForAnImage(imageRef, fnxToCall) {
        console.log("Getting url for " + imageRef.fullPath);
        imageRef
            .getDownloadURL()
            .then(function (url) {
                fnxToCall(url, imageRef.fullPath);
            })
            .catch(function (error) {
                // Handle any errors
            });
    }

    // // CREATE:
    // // basic write
    // // https://firebase.google.com/docs/database/web/read-and-write?authuser=0
    createUser1(name, eml, profilePicURL) {
        let newUserRef = firebase.database().ref("users/1");
        newUserRef
            .set({
                username: name,
                email: eml,
                profile_picture: profilePicURL,
            })
            .then(() => {
                console.log("Added the new user successfully!");
            })
            .catch((reason) =>
                console.log("ERROR: Did NOT add the user.  Reason: " + reason)
            );
    }

    createANOTHERUser(name, eml, profilePicURL) {
        let newUserRef = firebase.database().ref("users");
        newUserRef
            .push()
            .set({
                username: name,
                email: eml,
                profile_picture: profilePicURL,
            })
            .then(() => {
                console.log("Added the BRAND NEW new user successfully!");
            })
            .catch((reason) =>
                console.log(
                    "ERROR: Did NOT add the brand new user.  Reason: " + reason
                )
            );
    }

    // READ:
    // basic read
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#read_data_once
    getAnObject(location, callWhenFinished) {
        let ref = firebase.database().ref(location);
        ref.once("value")
            .then((snapshot) => {
                var objectToGet = snapshot.val() || null; // if we don't find anything then return an empty object
                console.log(
                    "read this value in the original handler: " + objectToGet
                );
                callWhenFinished(objectToGet);
            })
            .catch((error) => {
                console.log("Couldn't get the object: " + error);
                callWhenFinished(null);
            });
    }

    // READ:
    // read a list of objects
    // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#read_data_once
    getListOfObjects(location, callWhenFinished) {
        let ref = firebase.database().ref(location);
        ref.once("value")
            .then((snapshot) => {
                var listOfUsers = snapshot.val() || []; // Either we got the users, or else we have an empty list
                callWhenFinished(Object.values(listOfUsers));
            })
            .catch((error) => {
                console.log("Couldn't get list of objects: " + error);
                callWhenFinished([]);
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
        firebase
            .database()
            .ref(location)
            .remove()
            .then(callWhenFinished)
            .catch(callWhenFinished);
    }
}
