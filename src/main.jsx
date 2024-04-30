import React from 'react'
import ReactDOM from 'react-dom/client'
import UsersPage from './pages/UsersPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import RootLayout from './layouts/RootLayout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/users",
    Component: UsersPage,
  },
  {
    path: "/register",
    Component: RegisterPage
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
