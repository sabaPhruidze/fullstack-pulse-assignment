import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../endpoints/assets";
import type { Assets } from "../../types/assets";

export type AssetFilter = "all" | "stocks" | "crypto";

type Params = {
  filter: AssetFilter;
  search: string;
};

const useAssets = ({ filter, search }: Params) => {
  return useQuery<Assets>({
    queryKey: ["assets", filter, search],
    queryFn: async () => {
      return getAssets();
      //{
      //    type:filter ==='all' ? 'all' : filter === 'stocks' ? 'stock ' : 'crypto',
      //   seach:search.trim() || undefined,
      //} as any
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};

export default useAssets;
