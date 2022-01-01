import React, { useState, useContext } from "react";
import { logOutApp } from "../Util/api";

const AuthContext = React.createContext('');

function useAuth() {
    return useContext(AuthContext);
}

function AuthContextProvider({ children }) {
    const [ currentAuth, setCurrentAuth ] = useState('');
    const [ isTrainer, setIsTrainer ] = useState(false);

    const logOutUser = () => {
        setCurrentAuth('');
        logOutApp();
    }

    const setLogin = () => {
        const login = window.localStorage.getItem("Login");

        if (!login) {
            return;
        }
    
        if (login === 'trener') {
            setIsTrainer(true);
        }
 
        setCurrentAuth(login) 
    }

    return (
        <AuthContext.Provider
            value={{ currentAuth, setCurrentAuth, logOutUser, setLogin, isTrainer }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function getLogin(){
    const login = window.localStorage.getItem("Login");
    return login;
}

export {
    useAuth,
    AuthContextProvider,
    getLogin
}

export default AuthContext;