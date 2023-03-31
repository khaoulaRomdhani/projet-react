import { Route, Navigate,Outlet } from 'react-router-dom';
import React from 'react';


function AuthGarde({ component: Component, isAuthenticated, ...rest }) {
  const token = localStorage.getItem('token');
  const auth = null; 
  if (!isAuthenticated && !token) {
    return auth ? <Outlet /> : <Navigate to="/connecter" />;
  }

  // Ajouter cette logique pour sauvegarder le token dans le local storage
  if (token) {
    localStorage.setItem('token', token);
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default AuthGarde;
