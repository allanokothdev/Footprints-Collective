import React, { useState, createContext, useEffect } from 'react';
import {
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from '../utils/firebase'

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
    const [uid, setUid] = useState(null);
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
            } else {
                setUid(null)
            }
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthenticatedUserContext.Provider value={{ uid, user, setUser, googleSignIn }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};
