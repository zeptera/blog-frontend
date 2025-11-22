import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "../pages/rootLayout";
import AuthLayout from "../pages/auth/layout.tsx";
import Home from "../pages/home";
import Login from "../pages/auth/login.tsx";
import Signup from "../pages/auth/signup.tsx";
import Onboarding from "@/pages/onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            index: true,
            loader: () => redirect("/auth/login"),
          },
          {
            path: "login",
            Component: Login,
          },
          {
            path: "signup",
            Component: Signup,
          },
        ],
      },
      {
        path: "onboarding",
        Component: Onboarding,
      },
    ],
  },
]);

export default router;
