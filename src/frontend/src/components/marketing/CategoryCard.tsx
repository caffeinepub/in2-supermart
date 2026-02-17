import { Card, CardContent } from '@/components/ui/card';
import ResponsiveImage from '../media/ResponsiveImage';

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function CategoryCard({ title, description, imageSrc }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden hover-lift cursor-pointer group">
      <div className="aspect-[4/3] overflow-hidden">
        <ResponsiveImage
          src={imageSrc}
          alt={title}
          className="transition-transform duration-300 group-hover:scale-105"
          aspectRatio="4/3"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-heading text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

