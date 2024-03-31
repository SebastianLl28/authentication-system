import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoute from "./layout/protected-route/ProtectedRoute.layout";
import AppPage from "./pages/app/appPage";

const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const RegisterPage = lazy(() => import("./pages/register/RegisterPage"));
// const AppPage = lazy(() => import("./pages/app/appPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<AppPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster expand={true} position="bottom-right" richColors closeButton />
    </BrowserRouter>
  );
};

export default App;
