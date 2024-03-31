import { baseApi } from "../../../api/baseApi";

export const verifyTokenService = async () =>
  await baseApi.get("/verifyToken").then((res) => res.data);
