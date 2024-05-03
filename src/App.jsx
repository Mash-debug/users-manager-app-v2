import LandingPage from "./pages/LandingPage";
import AccountPage from "./pages/AccountPage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import UserContextProvider from "./contexts/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      {
        path: "",
        Component: LandingPage,
      },
    ],
  },
  {
    path: "/login",
    Component: BaseLayout,
    children: [
      {
        path: "",
        Component: LoginPage,
      },
    ],
  },
  {
    path: "/register",
    Component: BaseLayout,
    children: [
      {
        path: "",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: RootLayout,
    children: [
      {
        path: "account",
        Component: AccountPage,
      },
      {
        path: "users",
        Component: UsersPage,
      },
    ],
  },
]);

export default function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}
