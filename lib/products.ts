// Central product data — easy to edit. All are SAMPLE data for demonstration.
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  details: string[];
  availability: "In Stock" | "Low Stock" | "Out of Stock";
  isSample: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  rating?: number;
};

export const categories = [
  "Facial Cleansers",
  "Face Serums",
  "Moisturisers",
  "Sunscreens",
  "Face Creams",
  "Toners",
  "Face Masks",
  "Body Lotions",
  "Body Wash",
  "Makeup",
  "Lip Care",
  "Beauty Accessories",
] as const;

export const brands = ["La Roche-Posay", "Anua", "Jumiso", "Medicube", "CeraVe", "Beauty of Joseon", "Paula's Choice", "The Ordinary"] as const;

export const homeCategories = [
  { name: "Facial Skincare", slug: "Facial Cleansers", count: 8 },
  { name: "Cleansers", slug: "Facial Cleansers", count: 6 },
  { name: "Serums", slug: "Face Serums", count: 7 },
  { name: "Moisturisers and Face Creams", slug: "Moisturisers", count: 5 },
  { name: "Sunscreens", slug: "Sunscreens", count: 4 },
  { name: "Body Care", slug: "Body Lotions", count: 5 },
  { name: "Makeup", slug: "Makeup", count: 4 },
  { name: "Beauty Accessories", slug: "Beauty Accessories", count: 3 },
];

export const products: Product[] = [
  {
    id: "lrp-anthelios-uvmune-400",
    name: "Anthelios UVMune 400 Invisible Fluid SPF50+",
    brand: "La Roche-Posay",
    category: "Sunscreens",
    price: 18500,
    originalPrice: 21000,
    image: "https://images.unsplash.com/photo-1556228578-8c89d1ad90df?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89d1ad90df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Ultra-light, very high protection fluid with Mexoryl 400. Leaves no white cast, suitable for sensitive skin. Sample product — confirm availability with store.",
    details: ["50ml", "SPF50+ UVA/UVB", "Fragrance-free", "For sensitive skin", "Sample data - verify stock"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.9,
  },
  {
    id: "anua-heartleaf-77-toner",
    name: "Heartleaf 77% Soothing Toner",
    brand: "Anua",
    category: "Toners",
    price: 14200,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Calming toner with 77% Heartleaf extract to soothe irritated skin and refine texture. Sample product — confirm availability.",
    details: ["250ml", "77% Heartleaf", "Vegan", "For oily & sensitive skin"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.8,
  },
  {
    id: "anua-niacin-10-tx4-serum",
    name: "Niacinamide 10% + TXA 4% Serum",
    brand: "Anua",
    category: "Face Serums",
    price: 16800,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Brightening serum targeting dark spots and uneven tone with Niacinamide and Tranexamic Acid. Sample data only.",
    details: ["30ml", "10% Niacinamide", "4% TXA", "Sample data"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.9,
  },
  {
    id: "jumiso-waterfull-hyaluronic-cream",
    name: "Waterfull Hyaluronic Acid Cream",
    brand: "Jumiso",
    category: "Moisturisers",
    price: 12500,
    image: "https://images.unsplash.com/photo-1570554886111-eafa6a0a29d2?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570554886111-eafa6a0a29d2?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Deeply hydrating cream with 5 types of Hyaluronic Acid and fermented ingredients for plump, dewy skin. Sample product.",
    details: ["50ml", "5 Hyaluronic Complex", "Fermented complex", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.7,
  },
  {
    id: "jumiso-aye-booster",
    name: "All Day Vitamin Brightening & Balancing Serum",
    brand: "Jumiso",
    category: "Face Serums",
    price: 13900,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Vitamin C serum with brightening and balancing benefits for dull skin. Sample data.",
    details: ["30ml", "Vitamin Tree extract", "Non-irritating", "Sample data"],
    availability: "Low Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.8,
  },
  {
    id: "medicube-zero-pore-pad",
    name: "Zero Pore Pad 2.0",
    brand: "Medicube",
    category: "Toners",
    price: 15200,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Dual-textured toner pads to exfoliate and tighten pores. Sample product.",
    details: ["70 pads", "Pore care", "Exfoliating", "Sample data"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.8,
  },
  {
    id: "medicube-ager-booster-pro",
    name: "Age-R Booster Pro",
    brand: "Medicube",
    category: "Beauty Accessories",
    price: 89500,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Premium skincare device for absorption, elasticity and pore care. Sample product — price estimate only, confirm with store.",
    details: ["Device", "6 functions", "Sample price", "Confirm availability"],
    availability: "In Stock",
    isSample: true,
    isNew: true,
    rating: 4.9,
  },
  {
    id: "medicube-collagen-jelly-cream",
    name: "Collagen Jelly Cream",
    brand: "Medicube",
    category: "Face Creams",
    price: 14800,
    image: "https://images.unsplash.com/photo-1570554886111-eafa6a0a29d2?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570554886111-eafa6a0a29d2?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Jelly-textured collagen cream for firm, bouncy skin. Sample product.",
    details: ["110ml", "Collagen", "Jelly texture", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.7,
  },
  {
    id: "lrp-cicaplast-b5",
    name: "Cicaplast Baume B5+ Repairing Balm",
    brand: "La Roche-Posay",
    category: "Moisturisers",
    price: 16500,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Repairing balm for damaged, irritated skin. Sample product.",
    details: ["40ml", "Panthenol 5%", "Maddecassoside", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.9,
  },
  {
    id: "cerave-hydrating-cleanser",
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    category: "Facial Cleansers",
    price: 11200,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Gentle hydrating cleanser with ceramides and hyaluronic acid. Sample data.",
    details: ["236ml", "Ceramides", "Non-foaming", "Sample data"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.8,
  },
  {
    id: "boj-relief-sun-rice-probiotics",
    name: "Relief Sun: Rice + Probiotics SPF50+",
    brand: "Beauty of Joseon",
    category: "Sunscreens",
    price: 12800,
    image: "https://images.unsplash.com/photo-1556228578-8c89d1ad90df?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89d1ad90df?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Lightweight organic sunscreen with rice and probiotics for calm, protected skin. Sample.",
    details: ["50ml", "SPF50+ PA++++", "Rice extract", "Sample data"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.9,
  },
  {
    id: "ordinary-niacinamide-10-zinc",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "Face Serums",
    price: 8900,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    ],
    description: "High-strength vitamin and mineral blemish formula. Sample data.",
    details: ["30ml", "10% Niacinamide", "1% Zinc", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.6,
  },
  {
    id: "anua-heartleaf-pore-cleansing-foam",
    name: "Heartleaf Quercetinol Pore Deep Cleansing Foam",
    brand: "Anua",
    category: "Facial Cleansers",
    price: 10800,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Deep cleansing foam for pores with Heartleaf. Sample data.",
    details: ["150ml", "Heartleaf", "Quercetinol", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.7,
  },
  {
    id: "paulas-bha-2pct-exfoliant",
    name: "Skin Perfecting 2% BHA Liquid Exfoliant",
    brand: "Paula's Choice",
    category: "Toners",
    price: 17500,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Salicylic acid exfoliant to unclog pores and smooth texture. Sample data.",
    details: ["118ml", "2% Salicylic Acid", "BHA", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.9,
  },
  {
    id: "jumiso-have-a-good-cream-snail-mucin",
    name: "Have A Good Cream Snail & Centella",
    brand: "Jumiso",
    category: "Face Creams",
    price: 11900,
    image: "https://images.unsplash.com/photo-1570554886111-eafa6a0a29d2?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570554886111-eafa6a0a29d2?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Snail mucin + Centella cream for repair and hydration. Sample.",
    details: ["50g", "Snail mucin", "Centella", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.6,
  },
  {
    id: "medicube-red-foam-cleanser",
    name: "Red Foam Cleanser",
    brand: "Medicube",
    category: "Facial Cleansers",
    price: 9800,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Gentle foam cleanser for sensitive skin. Sample data.",
    details: ["120ml", "Low pH", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.5,
  },
  {
    id: "makeup-foundation-luminous",
    name: "Luminous Silk Foundation — Sample Shade",
    brand: "Beauty of Joseon",
    category: "Makeup",
    price: 14500,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Natural finish foundation — sample shade, confirm availability and shades with store.",
    details: ["30ml", "Natural finish", "Sample shade"],
    availability: "Low Stock",
    isSample: true,
    rating: 4.6,
  },
  {
    id: "lip-care-balm-tinted",
    name: "Tinted Lip Balm — Blush Rose",
    brand: "Anua",
    category: "Lip Care",
    price: 4500,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Hydrating tinted lip balm with subtle color. Sample data.",
    details: ["4.5g", "Tinted", "Sample data"],
    availability: "In Stock",
    isSample: true,
    isNew: true,
    rating: 4.7,
  },
  {
    id: "body-lotion-cerave-moisturising",
    name: "Moisturising Lotion — Dry to Very Dry Skin",
    brand: "CeraVe",
    category: "Body Lotions",
    price: 13200,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Lightweight body lotion with ceramides. Sample data.",
    details: ["236ml", "Ceramides", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.8,
  },
  {
    id: "face-mask-clay-pore",
    name: "Super Volcanic Pore Clay Mask",
    brand: "Medicube",
    category: "Face Masks",
    price: 8900,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Clay mask to absorb excess oil and refine pores. Sample data.",
    details: ["100ml", "Volcanic clay", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.6,
  },
  {
    id: "beauty-accessories-jade-roller",
    name: "Rose Quartz Facial Roller",
    brand: "Anua",
    category: "Beauty Accessories",
    price: 6500,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Facial roller for depuffing and massage. Sample data.",
    details: ["Rose quartz", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.5,
  },
  {
    id: "body-wash-gentle",
    name: "Gentle Hydrating Body Wash",
    brand: "CeraVe",
    category: "Body Wash",
    price: 10500,
    image: "https://images.unsplash.com/photo-1589065829850-2ccad8e6ff3b?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589065829850-2ccad8e6ff3b?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Non-irritating body wash for sensitive skin. Sample data.",
    details: ["236ml", "Ceramides", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.7,
  },
  {
    id: "lrp-effaclar-duo-m",
    name: "Effaclar Duo+M Anti-Blemish Moisturiser",
    brand: "La Roche-Posay",
    category: "Moisturisers",
    price: 16200,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Anti-blemish moisturiser for oily, blemish-prone skin. Sample data.",
    details: ["40ml", "Niacinamide", "Sample data"],
    availability: "In Stock",
    isSample: true,
    isBestseller: true,
    rating: 4.8,
  },
  {
    id: "toner-anua-77-clear-pad",
    name: "Heartleaf 77 Clear Pad",
    brand: "Anua",
    category: "Toners",
    price: 13500,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Toner pads with Heartleaf for gentle exfoliation. Sample.",
    details: ["70 pads", "Pore care", "Sample data"],
    availability: "In Stock",
    isSample: true,
    rating: 4.7,
  },
];

export const bestSellers = products.filter(p => p.isBestseller);
export const newArrivals = products.filter(p => p.isNew);

export const reviewsData = [
  {
    name: "Favour Iwuagwu",
    text: "A.T Cosmetics has a good selection of facial skincare products. I was able to get most of the things I needed in Owerri.",
    rating: 5,
  },
  {
    name: "Goodness Ezinne",
    text: "I needed skincare products for oily skin and found some options at A.T Cosmetics. The staff were helpful when I was deciding what to buy.",
    rating: 5,
  },
  {
    name: "Vivian Osuji",
    text: "I was looking for a face cleanser and was able to find one that is suitable for my skin. The staff were extremely helpful.",
    rating: 5,
  },
  {
    name: "Emmanuel Chinecherem",
    text: "A.T Cosmetics has more than just makeup. They have a good range of skincare and other beauty products as well.",
    rating: 5,
  },
  {
    name: "Micheal Wilson",
    text: "I came in looking for Age-R face cream and found several options. The store has a nice variety of skincare products.",
    rating: 5,
  },
  {
    name: "Eze Marvellous Chisom",
    text: "I was specifically looking for La Roche-Posay sunscreen and other skincare products. I found what I needed at A.T Cosmetics and had a good experience.",
    rating: 5,
  },
  {
    name: "Gift Ifeoma",
    text: "They have different skincare brands and products available, which made it easier for me to compare my options before buying.",
    rating: 5,
  },
  {
    name: "Mary-jane Chinonso",
    text: "I bought my Anua 10+ serum and Jumiso face cream from A.T Cosmetics. I like that there are different skincare options available.",
    rating: 5,
  },
];

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
export function getProductsByBrand(brand: string) {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}
export function getProductsByCategory(category: string) {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
export function getRelatedProducts(product: Product, limit = 4) {
  return products.filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category)).slice(0, limit);
}
