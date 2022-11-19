import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter, RouterProvider, Navigate,
} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Graph from './routes/Graph';
import Home from './routes/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Maybe use createHashRouter instead?
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/graph",
    element: <Graph />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
