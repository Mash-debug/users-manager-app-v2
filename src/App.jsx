import LandingPage from "./pages/LandingPage";
import AccountPage from "./pages/AccountPage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootLayout from "./layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import UserContextProvider from "./contexts/UserContext";
import { Paths } from "./constants/paths";
import GanttPage from "./pages/GanttPage";

const router = createBrowserRouter([
  {
    path: Paths.root,
    Component: BaseLayout,
    errorElement: <NotFoundPage />,
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
      {
        path: "gantt",
        Component: GanttPage
      }
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
