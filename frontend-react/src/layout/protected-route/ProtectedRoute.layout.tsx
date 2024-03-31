import { Navigate, Outlet } from "react-router-dom";
import { useVerifyToken } from "./hook/useVerifyToken";

const ProtectedRoute = () => {
  const { isLoading, isSuccess, isError } = useVerifyToken();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && isSuccess && <Outlet />}
      {!isLoading && isError && <Navigate to="/" replace={true} />}
    </>
  );
};

export default ProtectedRoute;
