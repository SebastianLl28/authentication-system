import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AppPage = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const handleLogout = () => {
    // remove token from local storage
    localStorage.removeItem("token");
    // clear cache
    queryClient.clear();
    // navigate to login page
    navigate("/");
  };

  return (
    <div className="py-12">
      <h2 className="text-center text-6xl font-bold">
        Welcome to the App Page
      </h2>
      <button
        onClick={handleLogout}
        type="button"
        className="my-4 text-white bg-blue-600 hover:bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        logout
      </button>
    </div>
  );
};

export default AppPage;
