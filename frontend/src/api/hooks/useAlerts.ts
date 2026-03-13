import { useQuery } from "@tanstack/react-query";
import { getAlerts } from "../endpoints/alerts";
import type { Alerts } from "../../types/alerts";

const useAlerts = () => {
  return useQuery<Alerts>({
    queryKey: ["alerts"],
    queryFn: async () => {
      return getAlerts();
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};
export default useAlerts;
