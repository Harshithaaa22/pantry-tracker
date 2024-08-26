// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATYxNqTGGjgSATpHmRpwU08AbRoVjGa9I",
  authDomain: "pantrytracker-444b2.firebaseapp.com",
  projectId: "pantrytracker-444b2",
  storageBucket: "pantrytracker-444b2.appspot.com",
  messagingSenderId: "824425370866",
  appId: "1:824425370866:web:6dd52ec53d71965cb7ac6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export{auth,firestore};
