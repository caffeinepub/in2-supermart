import { useQuery } from '@tanstack/react-query';
import { useActor } from '../useActor';
import type { Data as OfferData } from '@/backend';

export function useActiveOffers() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<OfferData[]>({
    queryKey: ['activeOffers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActiveOffers();
    },
    enabled: !!actor && !actorFetching
  });
}

