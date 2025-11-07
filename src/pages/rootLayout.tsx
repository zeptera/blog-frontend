import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      root layout
      <Outlet />
    </div>
  );
};

export default RootLayout;
