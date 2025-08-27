import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DeezerService from '../services/deezer.service';

// Versión con control manual del debounce
export function useSearchSongsManual(query, delay = 500) {
  const [debouncedQuery, setDebouncedQuery] = useState('');
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

  const queryResult = useQuery({
    queryKey: ['deezer-search', debouncedQuery],
    queryFn: () => DeezerService.serachSongs(debouncedQuery),
    staleTime: 5 * 60 * 1000,
  });

  return {
    ...queryResult,
    isDebouncing,
    searchQuery: debouncedQuery,
    originalQuery: query,
  };
}
