export interface Business {
  id: number;
  name: string;
  slug: string;
  category: string[];
  description: string;
  address: string;
  phone: string;
  website: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
}