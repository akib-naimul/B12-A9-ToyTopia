import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const register = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        if (name || photoURL) {
          await updateProfile(res.user, {
            displayName: name || "",
            photoURL: photoURL || "",
          });
        }
        return res;
      }
    );
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = { user, loading, googleLogin, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
