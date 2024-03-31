import { useMutation } from "@tanstack/react-query";
import { loginService } from "../service/login.service";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../schema/login.schema";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILogin) => loginService(data),
    onSuccess: (res) => {
      navigate("/app");
      localStorage.setItem("token", res.token);
      toast.success(res.message ?? "Login successful");
    },
    onError: () => {
      toast.error("Login failed, email or password is incorrect");
    },
  });
};
