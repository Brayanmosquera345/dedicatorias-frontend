import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import pexelsService from "../services/pexels.service";

export function useSearchPhotos(query, delay = 500, perPage = 10) {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(handler);
      setIsDebouncing(false);
    };
  }, [query, delay]);

  const queryResult = useInfiniteQuery({
    queryKey: ["photos-search", debouncedQuery],
    queryFn: ({ pageParam = 1 }) =>
      pexelsService.searchImages(debouncedQuery, pageParam, perPage),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined; // si no hay más resultados
      return allPages.length + 1; // siguiente página
    },
    staleTime: 5 * 60 * 1000,
  });

  return {
    ...queryResult,
    isDebouncing,
    searchQuery: debouncedQuery,
    originalQuery: query,
  };
}
