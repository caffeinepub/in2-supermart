import { Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface OfferCardProps {
  title: string;
  description: string;
  discountLabel: string;
  startDate: bigint;
  endDate: bigint;
}

export default function OfferCard({ title, description, discountLabel, startDate, endDate }: OfferCardProps) {
  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            <Tag className="h-3 w-3 mr-1" />
            {discountLabel}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <span>
            Valid: {formatDate(startDate)} - {formatDate(endDate)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

