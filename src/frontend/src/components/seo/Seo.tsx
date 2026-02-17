import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  includeStructuredData?: boolean;
}

export default function Seo({ title, description, keywords, includeStructuredData = false }: SeoProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Add structured data if requested
    if (includeStructuredData) {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'GroceryStore',
        name: 'IN2 Supermart',
        image: '/assets/generated/in2-hero.dim_1920x900.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'No. 134 Basement, 135P, Sector 23',
          addressLocality: 'Sonipat',
          addressRegion: 'Haryana',
          postalCode: '131001',
          addressCountry: 'IN'
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '22:00'
        },
        priceRange: '₹₹',
        telephone: '+91XXXXXXXXXX'
      };

      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, includeStructuredData]);

  return null;
}

