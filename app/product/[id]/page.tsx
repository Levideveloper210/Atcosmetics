"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { formatNaira, whatsappUrl, generateWhatsAppProductMessage } from "@/lib/utils";
import { useCart } from "@/components/cart-provider";
import ProductCard from "@/components/product-card";
import { ArrowLeft, ShoppingBag, MessageCircle, Plus, Minus, Star, ShieldCheck, Truck, Store } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const product = getProductById(id);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-20 text-center">
        <div className="font-serif text-[24px] text-brown">Product not found</div>
        <Link href="/shop" className="mt-4 inline-flex bg-brown text-ivory px-6 py-3 rounded-full text-[11px] uppercase tracking-widest">Back to shop</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);
  const message = generateWhatsAppProductMessage(product.name, product.price);
  const waLink = whatsappUrl(message);

  const handleAdd = () => {
    addToCart(product, qty);
  };

  const handleBuyNow = () => {
    addToCart(product, qty);
    router.push("/cart");
  };

  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-6 md:py-10">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-brown/60 hover:text-brown mb-6"><ArrowLeft size={14}/> Back to shop</Link>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-white border border-borderSoft">
              <Image src={product.images[activeImage] || product.image} alt={product.name} fill className="object-cover" unoptimized />
              {product.isSample && <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-brown text-ivory">Sample data</span>}
            </div>
            <div className="flex gap-3">
              {product.images.map((img,i)=>(
                <button key={i} onClick={()=>setActiveImage(i)} className={`relative w-20 h-20 rounded-[14px] overflow-hidden border-2 ${activeImage===i ? "border-brown" : "border-borderSoft"}`}>
                  <Image src={img} alt="thumb" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-brown/50">{product.brand} • {product.category}</div>
                <h1 className="font-serif text-[30px] md:text-[40px] leading-[0.95] tracking-tight text-brown mt-2">{product.name}</h1>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} size={12} className={`${i < Math.floor(product.rating||5) ? "fill-gold text-gold" : "text-borderSoft"}`} />)}</div>
                  <span className="text-[11px] text-brown/60">{product.rating} • Sample rating</span>
                </div>
              </div>
              <div className={`text-[11px] px-3 py-1 rounded-full ${product.availability==="In Stock" ? "bg-green-50 text-green-700 border border-green-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>{product.availability}</div>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <div className="font-serif text-[30px] font-semibold text-brown">{formatNaira(product.price)}</div>
              {product.originalPrice && <div className="text-[16px] line-through text-brown/30">{formatNaira(product.originalPrice)}</div>}
            </div>
            <div className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 inline-flex mt-2">Sample price — confirm current price with store via WhatsApp</div>

            <p className="mt-6 text-[14px] leading-relaxed text-brown/70">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.details.map(d=>(
                <span key={d} className="text-[11px] px-3 py-1.5 rounded-full bg-beige border border-borderSoft text-brown/70">{d}</span>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-[18px] bg-white border border-borderSoft">
              <div className="flex items-center justify-between">
                <div className="font-serif text-[14px] text-brown">Quantity</div>
                <div className="flex items-center gap-3 bg-beige border border-borderSoft rounded-full px-2 py-1">
                  <button onClick={()=>setQty(Math.max(1,qty-1))} className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-borderSoft"><Minus size={14}/></button>
                  <span className="w-6 text-center text-[14px] font-medium">{qty}</span>
                  <button onClick={()=>setQty(qty+1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-borderSoft"><Plus size={14}/></button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button onClick={handleAdd} className="bg-brown text-ivory py-3.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold flex items-center justify-center gap-2 hover:bg-charcoal transition"><ShoppingBag size={16}/> Add to Cart</button>
                <button onClick={handleBuyNow} className="bg-gold text-brown py-3.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-goldLight transition">Buy Now</button>
              </div>

              <a href={waLink} target="_blank" className="mt-3 w-full border border-borderSoft py-3 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-beige transition"><MessageCircle size={16}/> Enquire on WhatsApp</a>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="p-2 rounded-[12px] bg-beige"><Store size={16} className="mx-auto"/><div className="text-[10px] mt-1">In-store</div></div>
                <div className="p-2 rounded-[12px] bg-beige"><Truck size={16} className="mx-auto"/><div className="text-[10px] mt-1">Delivery</div></div>
                <div className="p-2 rounded-[12px] bg-beige"><ShieldCheck size={16} className="mx-auto"/><div className="text-[10px] mt-1">5.0 Rated</div></div>
              </div>
            </div>

            <div className="mt-6 text-[11px] leading-relaxed text-brown/50 bg-white border border-borderSoft rounded-[14px] p-4">
              <strong className="text-brown/70">Note:</strong> This product entry is sample data for demonstration. It is not confirmed to be in stock and the price is illustrative. Please confirm availability and current price via WhatsApp or by visiting {BUSINESS.address}. We do not make medical claims or guarantee skin results.
            </div>
          </div>
        </div>

        {related.length>0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-[26px] md:text-[32px] tracking-tight text-brown">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-6">
              {related.map(p=> <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
