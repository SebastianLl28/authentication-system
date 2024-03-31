import { baseApi } from "../../../api/baseApi";
import { User } from "../../../model/User.model";

export const register = async (data: Omit<User, "id">) =>
  await baseApi.post("/", data);
