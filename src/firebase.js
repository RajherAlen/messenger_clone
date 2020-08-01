import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBT5y0XPTReta68UhMxwDkEbiVIlfRw-lE",
  authDomain: "messenger-clone-3ed0e.firebaseapp.com",
  databaseURL: "https://messenger-clone-3ed0e.firebaseio.com",
  projectId: "messenger-clone-3ed0e",
  storageBucket: "messenger-clone-3ed0e.appspot.com",
  messagingSenderId: "954192749121",
  appId: "1:954192749121:web:175d0e39879c85993a9cc0",
  measurementId: "G-ELDBMMG0P5",
});

const db = firebaseApp.firestore();

export default db;
