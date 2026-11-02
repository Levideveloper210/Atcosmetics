"use client";
import { useState, useMemo, useEffect } from "react";
import { products, categories, brands, Product } from "@/lib/products";
import ProductCard from "@/components/product-card";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

type SortType = "featured" | "newest" | "price-low" | "price-high";

function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [sort, setSort] = useState<SortType>("featured");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory || (selectedCategory === "Facial Cleansers" && ["Facial Cleansers"].includes(p.category)));
    }
    if (selectedBrand) {
      result = result.filter(p => p.brand === selectedBrand);
    }
    switch (sort) {
      case "price-low": result.sort((a,b)=>a.price-b.price); break;
      case "price-high": result.sort((a,b)=>b.price-a.price); break;
      case "newest": result.sort((a,b)=> (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: result.sort((a,b)=> (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    return result;
  }, [search, selectedCategory, selectedBrand, sort]);

  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-12">
        <div className="mb-8">
          <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50">Catalogue</div>
          <h1 className="font-serif text-[36px] md:text-[52px] leading-none tracking-tight text-brown mt-2">Shop</h1>
          <p className="text-[13px] text-brown/60 mt-3 max-w-[560px]">Browse skincare, makeup and beauty accessories. All products listed are sample data for demonstration — please confirm availability and current price via WhatsApp.</p>
          <div className="mt-2 text-[11px] px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-flex text-amber-800">Sample catalogue — replace with actual inventory in lib/products.ts</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="lg:w-[260px] shrink-0">
            <div className="lg:sticky lg:top-[96px] space-y-6">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/40" />
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products, brands..." className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>

              <div className="bg-white rounded-[18px] border border-borderSoft p-5">
                <div className="font-serif text-[14px] text-brown mb-4">Categories</div>
                <div className="flex flex-col gap-2">
                  <button onClick={()=>setSelectedCategory("")} className={`text-left text-[12px] tracking-wide px-3 py-2 rounded-full border transition ${selectedCategory==="" ? "bg-brown text-ivory border-brown" : "bg-beige border-borderSoft text-brown/70 hover:text-brown"}`}>All Categories</button>
                  {categories.map(c=>(
                    <button key={c} onClick={()=>setSelectedCategory(c)} className={`text-left text-[12px] tracking-wide px-3 py-2 rounded-full border transition ${selectedCategory===c ? "bg-brown text-ivory border-brown" : "bg-beige border-borderSoft text-brown/70 hover:text-brown"}`}>{c}</button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[18px] border border-borderSoft p-5">
                <div className="font-serif text-[14px] text-brown mb-4">Brands</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={()=>setSelectedBrand("")} className={`text-[11px] px-3 py-1.5 rounded-full border ${selectedBrand==="" ? "bg-brown text-ivory border-brown" : "bg-beige border-borderSoft"}`}>All</button>
                  {brands.map(b=>(
                    <button key={b} onClick={()=>setSelectedBrand(b)} className={`text-[11px] px-3 py-1.5 rounded-full border transition ${selectedBrand===b ? "bg-brown text-ivory border-brown" : "bg-beige border-borderSoft hover:border-brown/30"}`}>{b}</button>
                  ))}
                </div>
              </div>

              {(selectedCategory || selectedBrand || search) && (
                <button onClick={()=>{setSelectedCategory(""); setSelectedBrand(""); setSearch("");}} className="w-full py-2.5 rounded-full bg-white border border-borderSoft text-[11px] tracking-widest uppercase flex items-center justify-center gap-1.5"><X size={14}/> Clear filters</button>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white border border-borderSoft rounded-full px-4 py-2.5">
              <div className="text-[12px] text-brown/70"><span className="font-semibold text-brown">{filtered.length}</span> products</div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-widest text-brown/50 hidden md:inline">Sort</span>
                <select value={sort} onChange={e=>setSort(e.target.value as SortType)} className="bg-beige border border-borderSoft rounded-full px-3 py-1.5 text-[12px] focus:outline-none">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filtered.length===0 ? (
              <div className="bg-white border border-borderSoft rounded-[22px] p-12 text-center">
                <div className="font-serif text-[20px] text-brown">No products found</div>
                <div className="text-[13px] text-brown/60 mt-2">Try adjusting your filters or search.</div>
                <button onClick={()=>{setSearch(""); setSelectedCategory(""); setSelectedBrand("");}} className="mt-4 bg-brown text-ivory px-5 py-2.5 rounded-full text-[11px] uppercase tracking-widest">Clear all</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Suspense } from "react";
export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-brown/60">Loading shop...</div>}>
      <ShopClient />
    </Suspense>
  );
}
