import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_3_diqA9y3I0kULBRj5xHgmCbjkuzCU8",
  authDomain: "facebook-clone-42e08.firebaseapp.com",
  projectId: "facebook-clone-42e08",
  storageBucket: "facebook-clone-42e08.firebasestorage.app",
  messagingSenderId: "933457893764",
  appId: "1:933457893764:web:65d64d53800ad6333a25d1",
  measurementId: "G-LRF7SQSCPE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;