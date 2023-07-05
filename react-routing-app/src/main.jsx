import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './root';

const routes = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    children: [

  {
    path: 'about',
    element: <aboutme />,
  },
  
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
