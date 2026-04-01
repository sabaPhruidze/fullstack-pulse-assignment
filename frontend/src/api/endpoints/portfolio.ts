import type {
  PortfolioResponse,
  PortfolioPerformanceResponse,
} from "../../types/portfolio";
import { api } from "../http";

export const getPortfolio = async (): Promise<PortfolioResponse> => {
  const { data } = await api.get<PortfolioResponse>("/api/portfolio");
  return data;
};
export const getPortfolioPerformace =
  async (): Promise<PortfolioPerformanceResponse> => {
    const { data } = await api.get<PortfolioPerformanceResponse>(
      "/api/portfolio/performance",
    );
    return data;
  };
