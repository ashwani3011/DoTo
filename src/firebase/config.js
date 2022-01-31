import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbCaL33G2SsK2vgZMLVyxLH0EQZSSHvXg",
  authDomain: "doto-16d6f.firebaseapp.com",
  projectId: "doto-16d6f",
  storageBucket: "doto-16d6f.appspot.com",
  messagingSenderId: "604852959624",
  appId: "1:604852959624:web:0f449c4142bb1b60c7a23d",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp

const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, projectStorage, timestamp };
