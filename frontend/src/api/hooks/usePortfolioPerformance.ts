import { useQuery } from "@tanstack/react-query";
import { getPortfolioPerformace } from "../endpoints/portfolio";
import type { PortfolioPerformanceResponse } from "../../types/portfolio";

const usePortfolioPerformance = () => {
  return useQuery<PortfolioPerformanceResponse>({
    queryKey: ["portfolio-performance"],
    queryFn: async () => {
      return getPortfolioPerformace();
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};
export default usePortfolioPerformance;
