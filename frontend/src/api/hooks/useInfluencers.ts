import { useQuery } from "@tanstack/react-query";
import { getInfluencers } from "../endpoints/influencers";
import type { InfluencersResponse } from "../../types/portfolio";

const useInfluencers = () => {
  return useQuery<InfluencersResponse>({
    queryKey: ["influencers"],
    queryFn: async () => {
      return getInfluencers();
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};
export default useInfluencers;
