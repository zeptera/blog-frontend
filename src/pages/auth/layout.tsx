import { Link, Outlet } from "react-router";
import zeptera from "../../assets/zeptera.svg";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div className="flex flex-col gap-10">
        <Link to={"/"} className="flex justify-cneter items-center gap-4">
          <img src={zeptera} alt="logo" className="w-16" />
          <h1 className="font-funnel text-4xl font-bold text-primary">
            Zeptera
          </h1>
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
