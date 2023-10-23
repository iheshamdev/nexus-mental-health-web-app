/* eslint-disable */
import React from 'react';
import { About, Home, Login, NotFound } from '@pages';
import { Navigate, useRoutes } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  const isAuthenticated = true;

  const routing = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: '/about',
      element: isAuthenticated ? <About /> : <Navigate to="/login" />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return routing;
};

export default AppRoutes;
