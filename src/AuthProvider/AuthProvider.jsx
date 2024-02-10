import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubprovider = new GithubAuthProvider();
    const axios = useAxiosPublic();
    const [darkMode, setDarkMode] = useState(false);



     // create Users
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


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

    // git hub Login
    const gitHubLogIn = () => {
        setLoader(true);
        return signInWithPopup(auth, gitHubprovider)
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
            if (currentUser) {
                const user = { email: currentUser.email };
                axios.post("/create-jwt-token", user)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem("access-token", res.data.token);
                            setLoader(false);
                        }
                })
            } else {
                localStorage.removeItem("access-token");
                setLoader(false);
            }
        });
        return () => {
            unSub();
        }
    },[axios])


    const authInfo = {
        user,
        loader,
        createUser,
        login,
        logOut,
        googleLogin,
        updateName,
        setDarkMode,
        darkMode,
        gitHubLogIn
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