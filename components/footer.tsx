import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { MapPin, Phone, MessageCircle, Star, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown text-ivory">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-14 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-ivory text-brown flex items-center justify-center font-serif text-[14px] tracking-widest font-bold">AT</div>
              <div>
                <div className="font-serif text-[18px] tracking-[0.14em]">A.T COSMETICS</div>
                <div className="font-sans text-[9px] tracking-[0.35em] uppercase opacity-60">LTD • OWERRI</div>
              </div>
            </div>
            <p className="font-sans text-[13px] leading-relaxed opacity-70 max-w-[280px]">
              Your trusted beauty destination in Owerri. Discover quality skincare, beauty essentials and trusted products curated for your routine.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-ivory/10 border border-ivory/10 rounded-full px-4 py-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[12px] font-medium">5.0/5 — 33 Google Reviews</span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-[13px] tracking-[0.2em] uppercase mb-5 opacity-90">Shop</h4>
            <div className="flex flex-col gap-3 font-sans text-[13px] opacity-70">
              <Link href="/shop?category=Facial%20Cleansers" className="hover:opacity-100 hover:text-goldLight transition">Cleansers</Link>
              <Link href="/shop?category=Face%20Serums" className="hover:opacity-100 hover:text-goldLight transition">Serums</Link>
              <Link href="/shop?category=Moisturisers" className="hover:opacity-100 hover:text-goldLight transition">Moisturisers</Link>
              <Link href="/shop?category=Sunscreens" className="hover:opacity-100 hover:text-goldLight transition">Sunscreens</Link>
              <Link href="/shop?category=Makeup" className="hover:opacity-100 hover:text-goldLight transition">Makeup</Link>
              <Link href="/brands" className="hover:opacity-100 hover:text-goldLight transition">Brands</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-[13px] tracking-[0.2em] uppercase mb-5 opacity-90">Company</h4>
            <div className="flex flex-col gap-3 font-sans text-[13px] opacity-70">
              <Link href="/about" className="hover:opacity-100 transition">About Us</Link>
              <Link href="/reviews" className="hover:opacity-100 transition">Customer Reviews</Link>
              <Link href="/contact" className="hover:opacity-100 transition">Contact & Location</Link>
              <Link href="/shop" className="hover:opacity-100 transition">Shop All</Link>
              <Link href="/cart" className="hover:opacity-100 transition">Cart</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[13px] tracking-[0.2em] uppercase mb-5 opacity-90">Visit Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="font-sans text-[13px] opacity-70 leading-relaxed">{BUSINESS.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-gold mt-0.5" />
                <span className="font-sans text-[13px] opacity-70">{BUSINESS.phone}</span>
              </div>
              <div className="flex gap-3">
                <MessageCircle size={16} className="text-gold mt-0.5" />
                <a href={BUSINESS.whatsappLink} target="_blank" className="font-sans text-[13px] opacity-70 hover:text-goldLight transition">{BUSINESS.whatsappDisplay} — WhatsApp</a>
              </div>
              <div className="mt-2">
                <div className="font-sans text-[11px] tracking-[0.18em] uppercase opacity-50 mb-2">Shopping Options</div>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS.shoppingOptions.map(opt => (
                    <span key={opt} className="text-[11px] px-3 py-1 rounded-full bg-ivory/10 border border-ivory/10">{opt}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="font-sans text-[11px] tracking-wide opacity-50">
            © {new Date().getFullYear()} A.T Cosmetics LTD — Owerri, Imo State, Nigeria. All rights reserved. Sample product data for demonstration.
          </div>
          <div className="font-sans text-[11px] opacity-50 flex gap-6">
            <span>5.0★ Google Rating • 33 Reviews</span>
            <span>Opens at 8:00 AM on Tuesday (verified)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
