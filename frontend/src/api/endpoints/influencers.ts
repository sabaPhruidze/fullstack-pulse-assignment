import type { InfluencersResponse } from "../../types/portfolio";
import { api } from "../http";

export const getInfluencers = async (): Promise<InfluencersResponse> => {
  const { data } = await api.get<InfluencersResponse>("/api/influencers");
  return data;
};
