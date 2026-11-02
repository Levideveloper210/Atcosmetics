"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X, Heart, User } from "lucide-react";
import { useCart } from "./cart-provider";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Skincare", href: "/shop?category=Face%20Serums" },
  { label: "Makeup", href: "/shop?category=Makeup" },
  { label: "Brands", href: "/brands" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-xl border-b border-borderSoft">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px] md:h-[78px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-brown text-ivory flex items-center justify-center font-serif text-[14px] tracking-widest font-bold">
              AT
            </div>
            <div className="leading-none">
              <div className="font-serif text-[18px] md:text-[20px] font-semibold tracking-[0.12em] text-brown group-hover:text-gold transition-colors">A.T COSMETICS</div>
              <div className="font-sans text-[9px] tracking-[0.35em] uppercase text-brown/60 -mt-0.5">LTD • OWERRI</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="font-sans text-[12px] tracking-[0.18em] uppercase text-brown/70 hover:text-brown transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link href="/shop" className="w-9 h-9 rounded-full hover:bg-beige flex items-center justify-center text-brown transition">
              <Search size={18} />
            </Link>
            <Link href="/reviews" className="hidden md:flex w-9 h-9 rounded-full hover:bg-beige items-center justify-center text-brown transition">
              <Heart size={18} />
            </Link>
            <Link href="/cart" className="relative w-9 h-9 rounded-full hover:bg-beige flex items-center justify-center text-brown transition">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gold text-brown text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 rounded-full hover:bg-beige flex items-center justify-center text-brown">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-borderSoft py-6 animate-in fade-in">
            <nav className="flex flex-col gap-5">
              {navLinks.map(link => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="font-sans text-[13px] tracking-[0.2em] uppercase text-brown">
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-borderSoft mt-2 flex flex-col gap-2">
                <div className="font-sans text-[11px] tracking-widest uppercase text-brown/50">Visit us</div>
                <div className="text-sm text-brown leading-relaxed">{BUSINESS.address}</div>
                <div className="text-sm text-brown">{BUSINESS.phone} • {BUSINESS.whatsappDisplay}</div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
