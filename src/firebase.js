// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7qD6ByMYqXMDFSMMaXwpbc_y7h3x4rgI",
  authDomain: "netflix-clone-768a4.firebaseapp.com",
  projectId: "netflix-clone-768a4",
  storageBucket: "netflix-clone-768a4.appspot.com",
  messagingSenderId: "219389268876",
  appId: "1:219389268876:web:08d5936c42dd79746d3ca9",
  measurementId: "G-E0QHCHPBHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// const analyti cs = getAnalytics(app); 

export {auth};
export default db ;