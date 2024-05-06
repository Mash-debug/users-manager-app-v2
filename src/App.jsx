import LandingPage from "./pages/LandingPage";
import AccountPage from "./pages/AccountPage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import UserContextProvider from "./contexts/UserContext";
import { Paths } from "./constants/paths";

const router = createBrowserRouter([
  {
    path: Paths.root,
    Component: BaseLayout,
    children: [
      {
        path: "",
        Component: LandingPage,
      },
    ],
  },
  {
    path: Paths.login,
    Component: BaseLayout,
    children: [
      {
        path: "",
        Component: LoginPage,
      },
    ],
  },
  {
    path: Paths.register,
    Component: BaseLayout,
    children: [
      {
        path: "",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: Paths.dashboard,
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
