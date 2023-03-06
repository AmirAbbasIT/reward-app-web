// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3rY-eqSKXB2XOpCV8-Hwpk1PrM_FiQOc",
  authDomain: "rewardapp-9fe51.firebaseapp.com",
  projectId: "rewardapp-9fe51",
  storageBucket: "rewardapp-9fe51.appspot.com",
  messagingSenderId: "771871439469",
  appId: "1:771871439469:web:fef1148a8f9c4a1cfe5d64",
  measurementId: "G-9Z7477TDMR",
};
if (!Firebase?.apps.length) {
  Firebase?.initializeApp(firebaseConfig);
}
export default Firebase;

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider);
};
