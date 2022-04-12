import React, {useState, useContext, useEffect} from "react";
import {logOutApp} from "../Util/api";
import {getLogin} from "../Util/auth";

const AuthContext = React.createContext('');

function useAuth() {
    return useContext(AuthContext);
}


function AuthContextProvider({ children }) {
    const [ currentAuth, setCurrentAuth ] = useState('');
    const [ isTrainer, setIsTrainer ] = useState(false);
    const [login, setBool] = useState(null);


    const logOutUser = () => {
        setCurrentAuth('');
        logOutApp();
    }

    const setLogin = () => {
        setBool(getLogin)
        console.log(login)
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

export {
    useAuth,
    AuthContextProvider
}

export default AuthContext;