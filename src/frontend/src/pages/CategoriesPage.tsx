import CategoryCard from '@/components/marketing/CategoryCard';
import Seo from '@/components/seo/Seo';

const categories = [
  {
    title: 'Fruits & Vegetables',
    description: 'Fresh, locally-sourced produce delivered daily for maximum freshness and nutrition',
    imageSrc: '/assets/generated/cat-fruits-veg.dim_800x600.png'
  },
  {
    title: 'Dairy & Bakery',
    description: 'Fresh milk, cheese, yogurt, and freshly baked bread and pastries every morning',
    imageSrc: '/assets/generated/cat-dairy-bakery.dim_800x600.png'
  },
  {
    title: 'Packaged Foods',
    description: 'Wide selection of cereals, snacks, canned goods, and ready-to-eat meals',
    imageSrc: '/assets/generated/cat-packaged-foods.dim_800x600.png'
  },
  {
    title: 'Household Essentials',
    description: 'Cleaning supplies, detergents, and everything you need to keep your home spotless',
    imageSrc: '/assets/generated/cat-household.dim_800x600.png'
  },
  {
    title: 'Beverages & Snacks',
    description: 'Refreshing drinks, juices, soft drinks, and a variety of tasty snacks for all ages',
    imageSrc: '/assets/generated/cat-beverages-snacks.dim_800x600.png'
  },
  {
    title: 'Personal Care',
    description: 'Toiletries, cosmetics, hygiene products, and wellness items for the whole family',
    imageSrc: '/assets/generated/cat-personal-care.dim_800x600.png'
  }
];

export default function CategoriesPage() {
  return (
    <>
      <Seo
        title="Shop by Category - IN2 Supermart | Grocery Store Sector 23 Sonipat"
        description="Browse our wide range of categories: Fresh Fruits & Vegetables, Dairy & Bakery, Packaged Foods, Household Essentials, Beverages & Snacks, and Personal Care products."
        keywords="Grocery Categories Sonipat, Fresh Produce Sonipat, Dairy Products, Household Items, Personal Care Products"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive selection of products organized for your convenience
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                imageSrc={category.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-6">
              Our friendly staff is always ready to help you locate products or take special requests. Visit us in store
              or give us a call!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

