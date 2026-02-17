import type { Assets, AssetFilter, Params } from "../../types/assets";
import { api } from "../http";

const mapFilterToApiType = (filter?: AssetFilter) => {
  if (!filter || filter === "all") return undefined; // if we not send anything or it is all than it will fetch all
  if (filter === "stocks") return "stock";
  return "crypto";
};

export const getAssets = async (params: Params = {}): Promise<Assets> => {
  const type = mapFilterToApiType(params.filter);
  const search =
    params.search && params.search.trim().length > 0
      ? params.search.trim()
      : undefined;
  const { data } = await api.get<Assets>("/api/assets", {
    params: {
      type,
      search,
    },
  });
  return data;
};
