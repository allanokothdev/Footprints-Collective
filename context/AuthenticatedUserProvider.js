import React, { useState, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
    const [uid, setUid] = useState(null);
    const [user, setUser] = useState(null);
    const [footprint, setFootprint] = useState(0);

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
        <AuthenticatedUserContext.Provider value={{ uid, setUid, user, setUser, footprint, setFootprint }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};
