import { baseApi } from "../../../api/baseApi";
import { ILogin } from "../schema/login.schema";

export const loginService = async (data: ILogin) =>
  await baseApi.post("/login", data).then((res) => res.data);
