import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase, Product } from '../lib/supabase';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('is_featured', true)
      .order('display_order')
      .limit(9);

    if (data && data.length > 0) {
      setProducts(data);
    } else {
      setProducts(defaultProducts);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Featured Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted furniture made from premium recycled teak wood,
            combining timeless design with sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-4">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm font-medium">View Details</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                {product.name}
              </h3>
              {product.materials && (
                <p className="text-sm text-gray-600">{product.materials}</p>
              )}
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/products"
            className="inline-flex items-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-800 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Dining Table',
    slug: 'classic-dining-table',
    description: 'Solid teak dining table',
    category_id: null,
    materials: 'Recycled Teak Wood',
    dimensions: '200 x 100 x 76 cm',
    image_url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery_images: [],
    is_featured: true,
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Teak Bookshelf',
    slug: 'teak-bookshelf',
    description: 'Elegant bookshelf',
    category_id: null,
    materials: 'Old Teak Wood',
    dimensions: '180 x 80 x 35 cm',
    image_url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery_images: [],
    is_featured: true,
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Queen Size Bed',
    slug: 'queen-size-bed',
    description: 'Luxurious queen bed',
    category_id: null,
    materials: 'Recycled Teak Wood',
    dimensions: '160 x 200 cm',
    image_url: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery_images: [],
    is_featured: true,
    display_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Rattan Armchair',
    slug: 'rattan-armchair',
    description: 'Comfortable rattan chair',
    category_id: null,
    materials: 'Rattan & Teak',
    dimensions: '75 x 75 x 85 cm',
    image_url: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery_images: [],
    is_featured: true,
    display_order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Coffee Table',
    slug: 'coffee-table',
    description: 'Modern coffee table',
    category_id: null,
    materials: 'Recycled Teak Wood',
    dimensions: '120 x 60 x 45 cm',
    image_url: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery_images: [],
    is_featured: true,
    display_order: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'TV Cabinet',
    slug: 'tv-cabinet',
    description: 'Elegant TV stand',
    category_id: null,
    materials: 'Old Teak Wood',
    dimensions: '180 x 45 x 55 cm',
    image_url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery_images: [],
    is_featured: true,
    display_order: 6,
    created_at: new Date().toISOString(),
  },
];
