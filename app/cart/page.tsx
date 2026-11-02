"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { formatNaira } from "@/lib/utils";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, cartCount } = useCart();

  if (items.length===0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-beige mx-auto flex items-center justify-center mb-6"><ShoppingBag size={28} className="text-brown/50"/></div>
        <h1 className="font-serif text-[28px] text-brown">Your cart is empty</h1>
        <p className="text-[13px] text-brown/60 mt-2">Add products to get started — all sample data, confirm via WhatsApp.</p>
        <Link href="/shop" className="mt-6 inline-flex bg-brown text-ivory px-7 py-3 rounded-full text-[11px] tracking-widest uppercase">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-[32px] md:text-[44px] leading-none tracking-tight text-brown">Cart</h1>
            <div className="text-[12px] text-brown/60 mt-2">{cartCount} items • Sample cart — confirm stock before checkout</div>
          </div>
          <Link href="/shop" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase border border-borderSoft px-5 py-2.5 rounded-full bg-white"><ArrowLeft size={14}/> Continue shopping</Link>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="space-y-4">
            {items.map(({product, quantity})=>(
              <div key={product.id} className="bg-white border border-borderSoft rounded-[18px] p-4 flex gap-4">
                <div className="relative w-24 h-24 rounded-[12px] overflow-hidden bg-beige shrink-0">
                  <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-brown/50">{product.brand}</div>
                      <Link href={`/product/${product.id}`} className="font-serif text-[15px] text-brown hover:text-gold leading-tight">{product.name}</Link>
                      <div className="text-[11px] text-brown/50 mt-1">{product.category} • {formatNaira(product.price)} each</div>
                      {product.isSample && <span className="mt-1 inline-flex text-[9px] px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">Sample price — confirm</span>}
                    </div>
                    <button onClick={()=>removeFromCart(product.id)} className="w-8 h-8 rounded-full bg-beige flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition"><Trash2 size={14}/></button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-beige border border-borderSoft rounded-full px-1.5 py-1">
                      <button onClick={()=>updateQuantity(product.id, quantity-1)} className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-borderSoft"><Minus size={12}/></button>
                      <span className="w-6 text-center text-[13px] font-medium">{quantity}</span>
                      <button onClick={()=>updateQuantity(product.id, quantity+1)} className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-borderSoft"><Plus size={12}/></button>
                    </div>
                    <div className="font-serif text-[16px] font-semibold text-brown">{formatNaira(product.price*quantity)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-[96px] h-fit bg-white border border-borderSoft rounded-[22px] p-6">
            <h2 className="font-serif text-[18px] text-brown">Order Summary</h2>
            <div className="mt-6 space-y-3 text-[13px]">
              <div className="flex justify-between"><span className="text-brown/60">Subtotal</span><span className="font-medium">{formatNaira(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-brown/60">Delivery</span><span className="text-brown/60">To be confirmed</span></div>
              <div className="border-t border-borderSoft pt-3 flex justify-between text-[15px] font-semibold"><span>Total estimate</span><span className="font-serif text-[18px]">{formatNaira(subtotal)}</span></div>
            </div>
            <div className="mt-4 p-3 rounded-[12px] bg-amber-50 border border-amber-200 text-[11px] text-amber-800 leading-relaxed">Sample prices only. Final total and delivery fee will be confirmed by A.T Cosmetics via WhatsApp. Order is an enquiry until business responds.</div>
            <Link href="/checkout" className="mt-6 w-full bg-brown text-ivory py-3.5 rounded-full flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-charcoal transition">Proceed to checkout <ArrowRight size={16}/></Link>
            <Link href="/shop" className="mt-3 w-full bg-beige border border-borderSoft py-3 rounded-full flex items-center justify-center gap-2 text-[11px] tracking-widest uppercase font-medium">Continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
