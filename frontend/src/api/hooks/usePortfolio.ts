import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../endpoints/portfolio";
import type { PortfolioResponse } from "../../types/portfolio";

const usePortfolio = () => {
  return useQuery<PortfolioResponse>({
    queryKey: ["portfolio"],
    queryFn: async () => {
      return getPortfolio();
    },
    staleTime: 30_000, //
    refetchOnWindowFocus: false,
  });
};
export default usePortfolio;
