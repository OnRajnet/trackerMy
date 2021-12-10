import { useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";
import auth from '../Util/auth';
import { useAuth } from "../Context/AuthContext";

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