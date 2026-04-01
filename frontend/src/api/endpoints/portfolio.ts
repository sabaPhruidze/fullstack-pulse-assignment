import type { PortfolioResponse } from "../../types/portfolio";
import { api } from "../http";

export const getPortfolio = async (): Promise<PortfolioResponse> => {
  const { data } = await api.get<PortfolioResponse>("/api/portfolio");
  return data;
};
