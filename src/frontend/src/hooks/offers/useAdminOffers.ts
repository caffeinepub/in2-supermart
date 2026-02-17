import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from '../useActor';
import type { Data as OfferData } from '@/backend';

export function useAdminOffers() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const offersQuery = useQuery<OfferData[]>({
    queryKey: ['allOffers'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllOffers();
    },
    enabled: !!actor
  });

  const createOffer = useMutation({
    mutationFn: async (data: {
      title: string;
      description: string;
      discountLabel: string;
      startDate: bigint;
      endDate: bigint;
      active: boolean;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createOffer(
        data.title,
        data.description,
        data.discountLabel,
        data.startDate,
        data.endDate,
        data.active
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allOffers'] });
      queryClient.invalidateQueries({ queryKey: ['activeOffers'] });
    }
  });

  const updateOffer = useMutation({
    mutationFn: async (data: {
      id: string;
      title: string;
      description: string;
      discountLabel: string;
      startDate: bigint;
      endDate: bigint;
      active: boolean;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateOffer(
        data.id,
        data.title,
        data.description,
        data.discountLabel,
        data.startDate,
        data.endDate,
        data.active
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allOffers'] });
      queryClient.invalidateQueries({ queryKey: ['activeOffers'] });
    }
  });

  const deleteOffer = useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.deleteOffer(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allOffers'] });
      queryClient.invalidateQueries({ queryKey: ['activeOffers'] });
    }
  });

  const toggleOffer = useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.toggleOfferActiveState(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allOffers'] });
      queryClient.invalidateQueries({ queryKey: ['activeOffers'] });
    }
  });

  return {
    offers: offersQuery.data,
    isLoading: offersQuery.isLoading,
    error: offersQuery.error,
    createOffer,
    updateOffer,
    deleteOffer,
    toggleOffer
  };
}

