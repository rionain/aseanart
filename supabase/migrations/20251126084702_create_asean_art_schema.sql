/*
  # ASEAN ART Furniture Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text) - Category name (e.g., "Dining", "Living Room")
      - `slug` (text, unique) - URL-friendly identifier
      - `display_order` (integer) - Order in navigation
      - `created_at` (timestamptz)
    
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Product description
      - `category_id` (uuid) - Foreign key to categories
      - `materials` (text) - Materials used (teak, recycled wood, etc.)
      - `dimensions` (text) - Product dimensions
      - `image_url` (text) - Primary image URL
      - `gallery_images` (text[]) - Array of additional image URLs
      - `is_featured` (boolean) - Show on homepage
      - `display_order` (integer) - Order in listings
      - `created_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `slug` (text, unique) - URL-friendly identifier
      - `location` (text) - Project location
      - `description` (text) - Project scope and details
      - `image_url` (text) - Primary image URL
      - `gallery_images` (text[]) - Array of project images
      - `completion_date` (date) - When project was completed
      - `display_order` (integer) - Order in showcase
      - `created_at` (timestamptz)
    
    - `banner_slides`
      - `id` (uuid, primary key)
      - `title` (text) - Slide title
      - `subtitle` (text) - Slide subtitle/description
      - `image_url` (text) - Banner image URL
      - `cta_text` (text) - Call-to-action button text
      - `cta_link` (text) - Where CTA button links to
      - `display_order` (integer) - Order in banner rotation
      - `is_active` (boolean) - Show/hide slide
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (no auth required for viewing)
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  materials text DEFAULT '',
  dimensions text DEFAULT '',
  image_url text NOT NULL,
  gallery_images text[] DEFAULT '{}',
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  location text DEFAULT '',
  description text DEFAULT '',
  image_url text NOT NULL,
  gallery_images text[] DEFAULT '{}',
  completion_date date,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create banner_slides table
CREATE TABLE IF NOT EXISTS banner_slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text DEFAULT '',
  image_url text NOT NULL,
  cta_text text DEFAULT 'Learn More',
  cta_link text DEFAULT '/products',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE banner_slides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active banner slides"
  ON banner_slides FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_categories_order ON categories(display_order);
CREATE INDEX IF NOT EXISTS idx_products_order ON products(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_banner_slides_order ON banner_slides(display_order) WHERE is_active = true;