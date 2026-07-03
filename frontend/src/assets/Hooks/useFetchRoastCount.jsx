import { useQuery } from "@tanstack/react-query";
import { getCountAndRecentRoastApi } from "../Api/apiUtils";

const useFetchRoastCount = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: getCountAndRecentRoastApi,
    staleTime: 1000*60,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: "always"
  });
};

export default useFetchRoastCount;
