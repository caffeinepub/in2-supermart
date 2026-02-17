import { useQuery } from '@tanstack/react-query';
import { useActor } from '../useActor';

export function useCallerRole() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery({
    queryKey: ['callerRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      const isAdmin = await actor.isCallerAdmin();
      return { isAdmin };
    },
    enabled: !!actor && !actorFetching,
    retry: false
  });

  return {
    isAdmin: query.data?.isAdmin ?? false,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched
  };
}

