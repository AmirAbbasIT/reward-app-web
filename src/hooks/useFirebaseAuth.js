import { useState, useEffect } from "react";
import Firebase from "../configs/firebaseinit";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid || "",
  email: user.email || "",
  accessToken: user.accessToken || "",
  displayName: user.displayName || "",
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        var formattedUser = formatAuthUser(res?.user);
        setAuthUser(formattedUser);
        setLoading(false);
      })
      .catch((err) => {
        createUserWithEmailAndPassword(email, password)
          .then((res) => {
            var formattedUser = formatAuthUser(res?.user);
            setAuthUser(formattedUser);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          });
      });
  };

  const createUserWithEmailAndPassword = (email, password) =>
    Firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () => Firebase.auth().signOut().then(clear);

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
