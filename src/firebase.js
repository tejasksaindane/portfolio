import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA93m-TOgnD8pIoQECWj60tCNHO_3H33A4",
  authDomain: "portfolio-28eda.firebaseapp.com",
  projectId: "portfolio-28eda",
  storageBucket: "portfolio-28eda.appspot.com",
  messagingSenderId: "416417045763",
  appId: "1:416417045763:web:7cff6feb42babdf26c9d36",
  measurementId: "G-F966CR35CL",
});

const db = firebaseApp.firestore();
export default db;
