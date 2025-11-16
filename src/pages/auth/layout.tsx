import { Link, Navigate, Outlet } from "react-router";
import zeptera from "../../assets/zeptera.svg";
import { useAuth } from "@/hooks/useAuth";

const AuthLayout = () => {
  const { currentUser } = useAuth();
  if (currentUser) return <Navigate to="/" replace />;

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 md:gap-10">
        <Link to={"/"} className="flex justify-cneter items-center gap-4 mt-3">
          <img src={zeptera} alt="logo" className="w-16" />
          <div className="flex flex-col">
            <h1 className="font-funnel text-4xl font-bold text-foreground">
              Zeptera
            </h1>
            <h3 className="font-funnel font-semibold text-primary">
              Human Brain is Still Superior
            </h3>
          </div>
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
