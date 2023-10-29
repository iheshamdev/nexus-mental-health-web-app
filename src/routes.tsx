import React from 'react';
import {
  About,
  Announcements,
  Documents,
  Home,
  Login,
  NotFound,
  Services,
  WaitingList,
} from '@pages';
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
      path: '/services',
      element: isAuthenticated ? <Services /> : <Navigate to="/login" />,
    },
    {
      path: '/announcements',
      element: isAuthenticated ? <Announcements /> : <Navigate to="/login" />,
    },
    {
      path: '/documents',
      element: isAuthenticated ? <Documents /> : <Navigate to="/login" />,
    },
    {
      path: '/waiting-list',
      element: isAuthenticated ? <WaitingList /> : <Navigate to="/login" />,
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
