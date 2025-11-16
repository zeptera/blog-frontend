import AuthProvider from "@/components/auth/authProvider";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default RootLayout;
