import { useNavigate } from '@tanstack/react-router';
import { Apple, Milk, Package, Home, Coffee, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Fruits & Vegetables', icon: Apple, color: 'text-green-600' },
  { name: 'Dairy & Bakery', icon: Milk, color: 'text-yellow-600' },
  { name: 'Packaged Foods', icon: Package, color: 'text-orange-600' },
  { name: 'Household', icon: Home, color: 'text-blue-600' },
  { name: 'Beverages', icon: Coffee, color: 'text-purple-600' },
  { name: 'Personal Care', icon: Sparkles, color: 'text-pink-600' }
];

export default function CategoryQuickLinks() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.name}
            variant="outline"
            onClick={() => navigate({ to: '/categories' })}
            className="h-auto flex-col gap-2 p-6 hover-lift"
          >
            <Icon className={`h-8 w-8 ${category.color}`} />
            <span className="text-sm font-medium text-center">{category.name}</span>
          </Button>
        );
      })}
    </div>
  );
}

