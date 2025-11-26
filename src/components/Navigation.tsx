import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { supabase, Category } from '../lib/supabase';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetchCategories();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .order('display_order')
      .limit(6);

    if (data) setCategories(data);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-900 tracking-tight">ASEAN ART</span>
              <p className="text-xs text-amber-700 -mt-1">Recycled Teak Furniture</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-900 font-medium transition-colors"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && categories.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    All Products
                  </a>
                  <div className="border-t border-gray-100 my-2"></div>
                  {categories.map(category => (
                    <a
                      key={category.id}
                      href={`/products?category=${category.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/services"
              className="text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Services
            </a>

            <a
              href="/projects"
              className="text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Projects
            </a>

            <a
              href="/about"
              className="text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              About Us
            </a>

            <a
              href="/contact"
              className="bg-amber-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-amber-800 transition-colors shadow-sm hover:shadow-md"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-amber-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a
              href="/"
              className="block py-2 text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/products"
              className="block py-2 text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Products
            </a>
            {categories.map(category => (
              <a
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="block py-2 pl-4 text-sm text-gray-600 hover:text-amber-900 transition-colors"
              >
                {category.name}
              </a>
            ))}
            <a
              href="/services"
              className="block py-2 text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/projects"
              className="block py-2 text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="/about"
              className="block py-2 text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block py-2 text-gray-700 hover:text-amber-900 font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
