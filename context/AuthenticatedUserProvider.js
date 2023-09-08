import React, { useState, createContext, useEffect } from 'react';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
    const [wallet, setWallet] = useState(null);
    const [footprint, setFootprint] = useState(0);

    useEffect(() => {
    }, [])

    return (
        <AuthenticatedUserContext.Provider value={{ wallet, setWallet, footprint, setFootprint }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};
