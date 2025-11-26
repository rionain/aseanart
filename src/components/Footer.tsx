import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ASEAN ART</h3>
                <p className="text-xs text-gray-400">Recycled Teak Furniture</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Crafting premium furniture from recycled and old teak wood,
              combining sustainability with timeless design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-amber-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-amber-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-amber-500 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-amber-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="/products?category=bedroom" className="hover:text-amber-500 transition-colors">
                  Bedroom
                </a>
              </li>
              <li>
                <a href="/products?category=dining" className="hover:text-amber-500 transition-colors">
                  Dining Room
                </a>
              </li>
              <li>
                <a href="/products?category=living" className="hover:text-amber-500 transition-colors">
                  Living Room
                </a>
              </li>
              <li>
                <a href="/products?category=storage" className="hover:text-amber-500 transition-colors">
                  Storage
                </a>
              </li>
              <li>
                <a href="/products?category=architectural" className="hover:text-amber-500 transition-colors">
                  Architectural
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                <span className="text-sm leading-relaxed">
                  PQ27+HHC, Jl. Ir H. Juanda, Cireundeu,<br />
                  Kec. Ciputat Tim., Kota Tangerang Selatan,<br />
                  Banten 15412, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <a href="tel:+62" className="text-sm hover:text-amber-500 transition-colors">
                  Contact us for inquiries
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <a href="mailto:info@aseanart.com" className="text-sm hover:text-amber-500 transition-colors">
                  info@aseanart.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://maps.google.com/?q=PQ27+HHC,+Jl.+Ir+H.+Juanda,+Cireundeu,+Kec.+Ciputat+Tim.,+Kota+Tangerang+Selatan,+Banten+15412,+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-amber-500 hover:text-amber-400 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Map</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} ASEAN ART. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
