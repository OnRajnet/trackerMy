import React, { useState, useContext } from "react";
import { logOutApp } from "../Util/api";

const AuthContext = React.createContext('');

function useAuth() {
    return useContext(AuthContext);
}

function AuthContextProvider({ children }) {
    const [ currentAuth, setCurrentAuth ] = useState('');

    const logOutUser = () => {
        setCurrentAuth('');
        logOutApp();
    }

    return (
        <AuthContext.Provider
            value={{ currentAuth, setCurrentAuth, logOutUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function getLogin(){
    const login = window.localStorage.getItem("Login")
    return login;
}

export {
    useAuth,
    AuthContextProvider,
    getLogin
}

export default AuthContext;