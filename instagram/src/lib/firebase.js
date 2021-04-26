import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Here I want to import the seed file

import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBYONrKiNzNdoaYy5tid59CHmnWjoOlH5Y",
    authDomain: "instagram-f58df.firebaseapp.com",
    projectId: "instagram-f58df",
    storageBucket: "instagram-f58df.appspot.com",
    messagingSenderId: "623636190319",
    appId: "1:623636190319:web:f6930acca444e115ece99a",
    measurementId: "G-3DCB729XBV"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where I want to call the seed file (only ONCE!)
seedDatabase(firebase)


export { firebase, FieldValue }