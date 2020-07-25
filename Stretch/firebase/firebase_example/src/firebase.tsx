import app from 'firebase/app'
import React from 'react';

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
    constructor() {
        app.initializeApp(firebaseConfig);
    }
}

export const FirebaseContext = React.createContext<Firebase | null>(null);