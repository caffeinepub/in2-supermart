import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Loader2 } from 'lucide-react';
import type { Data as OfferData } from '@/backend';

interface OfferEditorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  offer?: OfferData | null;
  onSave: (data: {
    title: string;
    description: string;
    discountLabel: string;
    startDate: bigint;
    endDate: bigint;
    active: boolean;
  }) => Promise<void>;
  isSaving: boolean;
}

export default function OfferEditorDialog({
  open,
  onOpenChange,
  offer,
  onSave,
  isSaving
}: OfferEditorDialogProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [discountLabel, setDiscountLabel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [active, setActive] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (offer) {
      setTitle(offer.title);
      setDescription(offer.description);
      setDiscountLabel(offer.discountLabel);
      setStartDate(new Date(Number(offer.startDate) / 1_000_000).toISOString().split('T')[0]);
      setEndDate(new Date(Number(offer.endDate) / 1_000_000).toISOString().split('T')[0]);
      setActive(offer.active);
    } else {
      setTitle('');
      setDescription('');
      setDiscountLabel('');
      setStartDate(new Date().toISOString().split('T')[0]);
      setEndDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
      setActive(true);
    }
    setErrors({});
  }, [offer, open]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!discountLabel.trim()) newErrors.discountLabel = 'Discount label is required';
    if (!startDate) newErrors.startDate = 'Start date is required';
    if (!endDate) newErrors.endDate = 'End date is required';
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    const startTimestamp = BigInt(new Date(startDate).getTime() * 1_000_000);
    const endTimestamp = BigInt(new Date(endDate).getTime() * 1_000_000);

    await onSave({
      title,
      description,
      discountLabel,
      startDate: startTimestamp,
      endDate: endTimestamp,
      active
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{offer ? 'Edit Offer' : 'Create New Offer'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Weekend Special Discount"
            />
            {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the offer details..."
              rows={3}
            />
            {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="discountLabel">
              Discount Label <span className="text-destructive">*</span>
            </Label>
            <Input
              id="discountLabel"
              value={discountLabel}
              onChange={(e) => setDiscountLabel(e.target.value)}
              placeholder="e.g., 20% OFF, Buy 1 Get 1"
            />
            {errors.discountLabel && <p className="text-sm text-destructive">{errors.discountLabel}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">
                Start Date <span className="text-destructive">*</span>
              </Label>
              <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              {errors.startDate && <p className="text-sm text-destructive">{errors.startDate}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">
                End Date <span className="text-destructive">*</span>
              </Label>
              <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              {errors.endDate && <p className="text-sm text-destructive">{errors.endDate}</p>}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="active" checked={active} onCheckedChange={setActive} />
            <Label htmlFor="active">Active (visible to customers)</Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isSaving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Offer'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

