import { useEffect } from "react";
import { useRouter } from "next/router";

type AuthRouteProps = {
  children: React.ReactNode;
};

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  return <>{children}</>;
};

export default AuthRoute;
