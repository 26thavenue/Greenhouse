import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
