// AuthContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signup = async (email, password) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    const value = {
        currentUser,
        signup,
        // Add other functions like login, logout, etc. here if needed
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
