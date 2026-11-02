"use client";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { formatNaira, whatsappUrl } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowLeft, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    address: "",
    state: "Imo State",
    city: "Owerri",
    orderType: "delivery" as "delivery" | "pickup",
    notes: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = () => {
    if (!form.fullName || !form.phone || !form.address) {
      setError("Please fill in full name, phone and delivery address.");
      return;
    }
    if (items.length===0) {
      setError("Your cart is empty.");
      return;
    }
    const lines = [];
    lines.push(`*NEW ORDER ENQUIRY — A.T COSMETICS LTD*`);
    lines.push("");
    lines.push(`*Customer Details*`);
    lines.push(`Name: ${form.fullName}`);
    lines.push(`Phone: ${form.phone}`);
    if (form.whatsapp) lines.push(`WhatsApp: ${form.whatsapp}`);
    lines.push(`Address: ${form.address}`);
    lines.push(`City: ${form.city}, State: ${form.state}`);
    lines.push(`Order Type: ${form.orderType === "delivery" ? "Delivery" : "In-store Pickup"}`);
    if (form.notes) lines.push(`Notes: ${form.notes}`);
    lines.push("");
    lines.push(`*Products*`);
    items.forEach(({product, quantity}) => {
      lines.push(`• ${product.name} (${product.brand}) x${quantity} — ${formatNaira(product.price*quantity)} ${product.isSample ? "[SAMPLE PRICE]" : ""}`);
    });
    lines.push("");
    lines.push(`Subtotal (sample): ${formatNaira(subtotal)}`);
    lines.push(`Delivery fee: To be confirmed by store`);
    lines.push(`Total estimate (sample): ${formatNaira(subtotal)}`);
    lines.push("");
    lines.push(`Please confirm availability, current prices and delivery fee. This is an enquiry until you respond. Thank you!`);
    lines.push("");
    lines.push(`Store: ${BUSINESS.address}`);

    const message = lines.join("\n");
    const url = whatsappUrl(message, BUSINESS.whatsapp);
    window.open(url, "_blank");
    // Optionally clear after?
    // clearCart();
  };

  if (items.length===0) {
    return (
      <div className="max-w-[720px] mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-[28px] text-brown">No items to checkout</h1>
        <Link href="/shop" className="mt-6 inline-flex bg-brown text-ivory px-6 py-3 rounded-full text-[11px] uppercase tracking-widest">Go to shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-12">
        <Link href="/cart" className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-brown/60 mb-6"><ArrowLeft size={14}/> Back to cart</Link>
        <h1 className="font-serif text-[32px] md:text-[44px] leading-none tracking-tight text-brown">Checkout</h1>
        <p className="text-[12px] text-brown/60 mt-2">WhatsApp checkout — no payment gateway. Order confirmed only after store replies.</p>

        <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="bg-white border border-borderSoft rounded-[22px] p-6 md:p-8">
            <h2 className="font-serif text-[18px] text-brown">Customer & Delivery Details</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-widest text-brown/60">Full name *</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your full name" className="mt-1.5 w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-brown/60">Phone number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="0703..." className="mt-1.5 w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-brown/60">WhatsApp (if different)</label>
                <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="Optional" className="mt-1.5 w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-widest text-brown/60">Delivery address / Pickup note *</label>
                <input name="address" value={form.address} onChange={handleChange} placeholder="House number, street, area" className="mt-1.5 w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-brown/60">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="mt-1.5 w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-brown/60">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="mt-1.5 w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-widest text-brown/60">Delivery or pickup</label>
                <div className="mt-1.5 grid grid-cols-2 gap-3">
                  <button type="button" onClick={()=>setForm({...form, orderType: "delivery"})} className={`py-3 rounded-full border text-[12px] tracking-wide ${form.orderType==="delivery" ? "bg-brown text-ivory border-brown" : "bg-beige border-borderSoft"}`}>Delivery</button>
                  <button type="button" onClick={()=>setForm({...form, orderType: "pickup"})} className={`py-3 rounded-full border text-[12px] tracking-wide ${form.orderType==="pickup" ? "bg-brown text-ivory border-brown" : "bg-beige border-borderSoft"}`}>In-store Pickup</button>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-widest text-brown/60">Order notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any notes about your order, skin type etc (do not include medical claims)" className="mt-1.5 w-full px-4 py-3 rounded-[18px] bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
              </div>
            </div>
            {error && <div className="mt-4 text-[12px] text-red-600 bg-red-50 border border-red-200 rounded-full px-4 py-2">{error}</div>}
          </div>

          <div className="h-fit lg:sticky lg:top-[96px] bg-white border border-borderSoft rounded-[22px] p-6">
            <h3 className="font-serif text-[18px] text-brown">Order Summary</h3>
            <div className="mt-4 space-y-3 max-h-[320px] overflow-auto pr-1">
              {items.map(({product, quantity})=>(
                <div key={product.id} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-[10px] overflow-hidden bg-beige shrink-0"><Image src={product.image} alt={product.name} fill className="object-cover" unoptimized /></div>
                  <div className="flex-1">
                    <div className="text-[12px] leading-tight text-brown">{product.name}</div>
                    <div className="text-[11px] text-brown/50">x{quantity} • {formatNaira(product.price*quantity)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-borderSoft mt-5 pt-4 space-y-2 text-[13px]">
              <div className="flex justify-between"><span className="text-brown/60">Subtotal (sample)</span><span className="font-medium">{formatNaira(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-brown/60">Delivery fee</span><span className="text-brown/60">To be confirmed</span></div>
              <div className="flex justify-between font-semibold text-[15px] pt-2 border-t border-borderSoft"><span>Total estimate</span><span className="font-serif text-[18px]">{formatNaira(subtotal)}</span></div>
            </div>
            <div className="mt-4 flex gap-2 text-[10px] text-brown/50 bg-beige rounded-[12px] p-3 border border-borderSoft"><ShieldCheck size={14} className="shrink-0"/> <span>Order is an enquiry. Not confirmed until A.T Cosmetics responds on WhatsApp with availability and final total.</span></div>
            <button onClick={handleWhatsAppOrder} className="mt-5 w-full bg-[#25D366] text-white py-3.5 rounded-full flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold hover:brightness-110 transition"><MessageCircle size={18}/> Place Order on WhatsApp</button>
            <div className="mt-3 text-[11px] text-brown/50 text-center">Will open WhatsApp to {BUSINESS.whatsappDisplay} with your order details.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
