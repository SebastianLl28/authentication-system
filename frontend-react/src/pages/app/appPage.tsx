import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../layout/protected-route/hook/useVerifyToken";

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

  const { data, isSuccess, isLoading, refetch } = useVerifyToken();

  return (
    <main className="py-12 min-h-dvh relative">
      <h2 className="text-center text-6xl font-bold">
        Welcome to the App Page
      </h2>
      <div>
        <p>{!isLoading && isSuccess && data && JSON.stringify(data)}</p>
        <button
          onClick={() => refetch()}
          type="button"
          className="my-4 text-white bg-blue-600 hover:bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Verify token
        </button>
      </div>
      <button
        onClick={handleLogout}
        type="button"
        className="my-4 text-white bg-blue-600 hover:bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-0 left-5 flex items-center gap-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 text-white"
        >
          <path
            d="M5 2H16C17.6569 2 19 3.34315 19 5V19C19 19.5523 18.5523 20 18 20H15"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 2L12.5883 3.51767C13.9906 3.79812 15 5.02937 15 6.45941V20.7802C15 21.4112 14.4227 21.8845 13.8039 21.7608L6.60777 20.3216C5.67292 20.1346 5 19.3138 5 18.3604V2Z"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12V14"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Logout</span>
      </button>
    </main>
  );
};

export default AppPage;
