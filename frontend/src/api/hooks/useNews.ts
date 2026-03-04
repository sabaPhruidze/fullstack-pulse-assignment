import { useQuery } from "@tanstack/react-query";
import { getNews } from "../endpoints/news";
import type { News } from "../../types/news";

const useNews = () => {
  return useQuery<News>({
    queryKey: ["news"],
    queryFn: async () => {
      return getNews();
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};
export default useNews;
