import { useEffect } from 'react';
import auth from '../Util/auth';
import { useAuth } from "../Context/AuthContext";
import {Redirect, Route} from "react-router-dom";

export default function ProtectedRoute ({ component: Component, ...restOfProps }) {
    const isAuthenticated = auth.getAccessToken();
    const { setCurrentAuth } = useAuth();
   

    useEffect(() => {
      const login = auth.getLogin()

      if (login) {
        setCurrentAuth(login);
      }
    }, [])

    return (
        <Route
          {...restOfProps}
          render={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      );
}