import React from 'react';
import { RouteObject } from 'react-router-dom';
const HomePage = React.lazy(() => import('../pages/HomePage'));
const FormGenratorPage = React.lazy(() => import('../pages/FormGenratorPage'));
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/form-generator',
    element: <FormGenratorPage />,
  },
];
