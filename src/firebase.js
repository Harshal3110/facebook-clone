import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3E4aIylr22_KgwiPqBdooOexstyrGKks",
  authDomain: "facebook-clone-d439e.firebaseapp.com",
  projectId: "facebook-clone-d439e",
  storageBucket: "facebook-clone-d439e.appspot.com",
  messagingSenderId: "381352774854",
  appId: "1:381352774854:web:70f4213ec3181ada565bc7",
  measurementId: "G-X556FVZM9F",
};

// To connect react front-end with firebase back-end
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Get access to firebase data
const db = firebaseApp.firestore();
// setup authentication for login/signin...etc
const auth = firebase.auth();
// Tell firebase that google service is required
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
