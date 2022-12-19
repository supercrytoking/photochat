import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHvzEMYhbg6wGBOYhLSjus9r-eFWGHCrk",
    authDomain: "snapchat-yt-292da.firebaseapp.com",
    projectId: "snapchat-yt-292da",
    storageBucket: "snapchat-yt-292da.appspot.com",
    messagingSenderId: "1090066287840",
    appId: "1:1090066287840:web:ed6b9770cc744886695485"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};