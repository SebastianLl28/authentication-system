import { useQuery } from "@tanstack/react-query";
import { verifyTokenService } from "../service/verifyToken.service";

export const useVerifyToken = () =>
  useQuery({
    queryKey: ["verify-token"],
    queryFn: verifyTokenService,
    retry: 1,
    refetchOnWindowFocus: false,
  });
