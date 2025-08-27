import { useQuery } from "@tanstack/react-query";
import dedicationService from "../services/dedication.service";

export function useDedication(id) {
  const queryResult = useQuery({
    queryKey: ["dedication", id],
    queryFn: () => dedicationService.getDedication(id),
    staleTime: 5 * 60 * 1000,
  });

  return queryResult;
}