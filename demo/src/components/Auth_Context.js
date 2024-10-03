import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(() => {

        // Get initial authenticated state from localStorage
        return localStorage.getItem('authenticated') === 'true';
    });

    const login = () => {
        setAuthenticated(true);
        localStorage.setItem('authenticated', 'true'); // Save to localStorage
    };

    const logout = () => {
        setAuthenticated(false);
        localStorage.removeItem('authenticated'); // Remove from localStorage
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
