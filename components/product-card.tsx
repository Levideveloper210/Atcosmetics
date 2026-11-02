"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { formatNaira } from "@/lib/utils";
import { useCart } from "./cart-provider";
import { ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addToCart(product, 1);
    setTimeout(() => setAdding(false), 700);
  };

  return (
    <div className="group relative bg-white rounded-[20px] border border-borderSoft overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out" unoptimized />
          <div className="absolute top-3 left-3 flex gap-2">
            {product.isSample && (
              <span className="text-[10px] tracking-widest uppercase font-medium px-2.5 py-1 rounded-full bg-brown/90 text-ivory backdrop-blur">Sample</span>
            )}
            {product.isBestseller && (
              <span className="text-[10px] tracking-widest uppercase font-medium px-2.5 py-1 rounded-full bg-gold text-brown">Bestseller</span>
            )}
          </div>
          {product.originalPrice && (
            <div className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full bg-white/90 text-brown">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-3 left-3 right-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="flex-1 bg-white/95 backdrop-blur text-brown text-[11px] tracking-widest uppercase font-medium py-2.5 rounded-full flex items-center justify-center gap-1.5 shadow-soft">
              <Eye size={14} /> View
            </span>
          </div>
        </div>
        <div className="p-4 md:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-brown/50 font-medium">{product.brand}</div>
              <h3 className="font-serif text-[15px] md:text-[16px] leading-tight text-brown mt-1 line-clamp-2 group-hover:text-gold transition-colors">{product.name}</h3>
            </div>
            <div className={`text-[10px] px-2 py-1 rounded-full font-medium shrink-0 ${product.availability === "In Stock" ? "bg-green-50 text-green-700" : product.availability === "Low Stock" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"}`}>
              {product.availability}
            </div>
          </div>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <div className="font-serif text-[18px] font-semibold text-brown">{formatNaira(product.price)}</div>
              {product.originalPrice && <div className="text-[12px] line-through text-brown/40">{formatNaira(product.originalPrice)}</div>}
              <div className="text-[10px] text-brown/40 mt-0.5">Sample price — confirm via WhatsApp</div>
            </div>
            <button onClick={handleAdd} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${adding ? "bg-green-600 text-white scale-110" : "bg-brown text-ivory hover:bg-gold hover:text-brown"}`}>
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
