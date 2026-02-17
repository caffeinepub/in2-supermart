import { useState } from 'react';
import { useAdminOffers } from '@/hooks/offers/useAdminOffers';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Loader2, Power } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import OfferEditorDialog from '@/components/offers/OfferEditorDialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import type { Data as OfferData } from '@/backend';

export default function AdminOffersPage() {
  const { offers, isLoading, createOffer, updateOffer, deleteOffer, toggleOffer } = useAdminOffers();
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState<OfferData | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [offerToDelete, setOfferToDelete] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleCreate = () => {
    setEditingOffer(null);
    setEditorOpen(true);
  };

  const handleEdit = (offer: OfferData) => {
    setEditingOffer(offer);
    setEditorOpen(true);
  };

  const handleSave = async (data: {
    title: string;
    description: string;
    discountLabel: string;
    startDate: bigint;
    endDate: bigint;
    active: boolean;
  }) => {
    setIsSaving(true);
    try {
      if (editingOffer) {
        await updateOffer.mutateAsync({ id: editingOffer.id, ...data });
        toast.success('Offer updated successfully');
      } else {
        await createOffer.mutateAsync(data);
        toast.success('Offer created successfully');
      }
      setEditorOpen(false);
    } catch (error) {
      console.error('Save error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save offer');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setOfferToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!offerToDelete) return;
    try {
      await deleteOffer.mutateAsync(offerToDelete);
      toast.success('Offer deleted successfully');
      setDeleteDialogOpen(false);
      setOfferToDelete(null);
    } catch (error) {
      console.error('Delete error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to delete offer');
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleOffer.mutateAsync(id);
      toast.success('Offer status updated');
    } catch (error) {
      console.error('Toggle error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to toggle offer');
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">Manage Offers</h1>
          <p className="text-muted-foreground">Create and manage promotional offers for your store</p>
        </div>
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="h-4 w-4" />
          Create Offer
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : !offers || offers.length === 0 ? (
        <Alert>
          <AlertDescription>
            No offers yet. Click "Create Offer" to add your first promotional offer.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Valid Period</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell className="font-medium">{offer.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{offer.discountLabel}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(offer.startDate)} - {formatDate(offer.endDate)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={offer.active ? 'default' : 'outline'}>
                      {offer.active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleToggle(offer.id)}
                        disabled={toggleOffer.isPending}
                        title={offer.active ? 'Deactivate' : 'Activate'}
                      >
                        <Power className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(offer)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(offer.id)}
                        disabled={deleteOffer.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <OfferEditorDialog
        open={editorOpen}
        onOpenChange={setEditorOpen}
        offer={editingOffer}
        onSave={handleSave}
        isSaving={isSaving}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Offer</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this offer? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

