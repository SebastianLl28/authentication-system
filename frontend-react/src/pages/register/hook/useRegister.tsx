import { useMutation } from "@tanstack/react-query";
import { register } from "../service/register.service";
import { User } from "../../../model/User.model";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: Omit<User, "id">) => register(data),
    onSuccess: () => {
      toast.success("user created successfully");
      navigate("/");
    },
    onError: () => {
      toast.error("error creating user");
    },
  });
};
