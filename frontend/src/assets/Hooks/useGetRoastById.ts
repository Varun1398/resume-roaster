import { useQuery } from "@tanstack/react-query";
import { getRoastById } from "../Api/apiUtils";

export const useGetRoastById = (roastId: string | undefined) => {
  return useQuery({
    queryKey: ["roast", roastId],
    queryFn: () => {
      if (!roastId) {
        throw new Error("Roast ID is missing")
      }
      return getRoastById(roastId)
    },
    enabled: !!roastId,
    refetchOnMount: false,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });
};
