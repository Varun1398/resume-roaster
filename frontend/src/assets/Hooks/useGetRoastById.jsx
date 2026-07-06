import { useQuery } from "@tanstack/react-query";
import { getRoastById } from "../Api/apiUtils";

export const useGetRoastById = (roastId) => {
  return useQuery({
    queryKey: ["roast", roastId],
    queryFn: () => getRoastById(roastId),
    enabled: !!roastId,
    refetchOnMount: false,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });
};
