import React from 'react'
import ReactDOM from 'react-dom/client'
import UsersPage from './pages/UsersPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import RootLayout from './layouts/RootLayout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import LandingPage from './pages/LandingPage'
import AccountPage from './pages/AccountPage'

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/dashboard",
    Component: RootLayout,
    children: [
      {
        path: "account",
        Component: AccountPage
      },
      {
        path: "users",
        Component: UsersPage
      }
    ],
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
