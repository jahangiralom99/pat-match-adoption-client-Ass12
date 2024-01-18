import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();



     // create Users
     const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login users
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out users
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    // google login
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

      // update profile 
  const updateName = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }

    // manage USers 
    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unSub();
        }
    },[])


    const authInfo = {
        user,
        loader,
        createUser,
        login,
        logOut,
        googleLogin,
        updateName
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default AuthProvider;