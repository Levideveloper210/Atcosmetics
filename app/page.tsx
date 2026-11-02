import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, ShieldCheck, MapPin, Phone, Truck } from "lucide-react";
import { bestSellers, homeCategories, reviewsData } from "@/lib/products";
import { categoryImages, heroImages } from "@/lib/images";
import ProductCard from "@/components/product-card";
import TrustSection from "@/components/trust-section";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="bg-ivory">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 py-8 md:py-12 items-stretch">
            <div className="relative rounded-[28px] overflow-hidden bg-brown min-h-[520px] md:min-h-[640px] flex">
              <Image src={heroImages.main} alt="Premium skincare" fill className="object-cover opacity-70" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/40 to-transparent" />
              <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center max-w-[560px]">
                <div className="inline-flex items-center gap-2 bg-ivory/15 backdrop-blur border border-ivory/20 rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-ivory mb-6">
                  <Sparkles size={12} className="text-gold" /> Premium Beauty • Owerri, Nigeria
                </div>
                <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-tight text-ivory">
                  Your Skin<br />Deserves<br /><span className="text-goldLight italic font-light">the Best.</span>
                </h1>
                <p className="mt-6 font-sans text-[14px] md:text-[15px] leading-relaxed text-ivory/80 max-w-[460px]">
                  Discover quality skincare, beauty essentials and trusted products at A.T Cosmetics. Find everything you need to build your beauty routine in one place.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/shop" className="inline-flex items-center gap-2 bg-ivory text-brown px-7 py-3.5 rounded-full font-sans text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-gold transition-colors">
                    Shop Now <ArrowRight size={16} />
                  </Link>
                  <Link href="/shop?category=Face%20Serums" className="inline-flex items-center gap-2 bg-transparent border border-ivory/30 text-ivory px-7 py-3.5 rounded-full font-sans text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-ivory/10 transition-colors">
                    Explore Skincare
                  </Link>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i=>(
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-brown bg-beige overflow-hidden">
                        <Image src={`https://images.unsplash.com/photo-${i===1 ? "1534528741775-53994a69daeb" : i===2 ? "1500648767791-00dcc994a43e" : "1438761681033-6461ffad8d80"}?q=80&w=100&auto=format&fit=crop`} alt="customer" width={36} height={36} unoptimized className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                  <div className="text-ivory">
                    <div className="flex items-center gap-1">
                      {Array.from({length:5}).map((_,i)=><Star key={i} size={12} className="fill-gold text-gold" />)}
                      <span className="ml-2 text-[12px] font-medium">5.0 from 33 reviews</span>
                    </div>
                    <div className="text-[11px] opacity-70">Trusted by customers in Owerri</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative rounded-[28px] overflow-hidden bg-beige min-h-[300px] flex-1">
                <Image src={heroImages.secondary} alt="Skincare routine" fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-0 p-6 md:p-8">
                  <div className="bg-white/95 backdrop-blur rounded-[18px] p-5 shadow-soft max-w-[320px]">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-brown/50 font-medium">Bestseller</div>
                    <div className="font-serif text-[18px] text-brown mt-1">Anthelios UVMune 400</div>
                    <div className="text-[12px] text-brown/60 mt-1">La Roche-Posay • Invisible Fluid SPF50+</div>
                    <Link href="/product/lrp-anthelios-uvmune-400" className="mt-3 inline-flex text-[11px] tracking-widest uppercase font-semibold text-brown border-b border-brown pb-0.5">Shop now</Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-[18px] bg-white border border-borderSoft p-4">
                  <div className="w-8 h-8 rounded-full bg-beige flex items-center justify-center mb-3"><MapPin size={14} /></div>
                  <div className="font-serif text-[13px] text-brown">Owerri Store</div>
                  <div className="text-[11px] text-brown/60 mt-1">Awibe Plaza, MCC Road</div>
                </div>
                <div className="rounded-[18px] bg-white border border-borderSoft p-4">
                  <div className="w-8 h-8 rounded-full bg-beige flex items-center justify-center mb-3"><Truck size={14} /></div>
                  <div className="font-serif text-[13px] text-brown">Delivery</div>
                  <div className="text-[11px] text-brown/60 mt-1">Doorstep delivery</div>
                </div>
                <div className="rounded-[18px] bg-white border border-borderSoft p-4">
                  <div className="w-8 h-8 rounded-full bg-beige flex items-center justify-center mb-3"><ShieldCheck size={14} /></div>
                  <div className="font-serif text-[13px] text-brown">5.0 Rated</div>
                  <div className="text-[11px] text-brown/60 mt-1">33 reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Featured Categories */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50 font-medium">Explore</div>
            <h2 className="font-serif text-[32px] md:text-[42px] leading-none tracking-tight text-brown mt-2">Featured Categories</h2>
          </div>
          <Link href="/shop" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-brown border-b border-brown pb-1">View all categories <ArrowRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {homeCategories.map(cat => (
            <Link key={cat.name} href={`/shop?category=${encodeURIComponent(cat.slug)}`} className="group relative rounded-[22px] overflow-hidden bg-white border border-borderSoft aspect-[4/5] md:aspect-[3/4]">
              <Image src={categoryImages[cat.name] || categoryImages["Facial Skincare"]} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-brown/10 to-transparent" />
              <div className="absolute bottom-0 p-5 w-full">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="font-serif text-[17px] md:text-[18px] leading-tight text-ivory">{cat.name}</div>
                    <div className="text-[11px] text-ivory/70 mt-1">{cat.count}+ products</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-ivory text-brown flex items-center justify-center group-hover:bg-gold transition-colors"><ArrowRight size={14} /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-white border-y border-borderSoft">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50 font-medium">Customer favourites</div>
              <h2 className="font-serif text-[32px] md:text-[42px] leading-none tracking-tight text-brown mt-2">Best Sellers</h2>
              <p className="text-[13px] text-brown/60 mt-3 max-w-[420px]">Curated from brands mentioned by our customers — La Roche-Posay, Anua, Jumiso, Medicube. Sample data — confirm stock via WhatsApp.</p>
            </div>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-brown text-ivory px-6 py-3 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-charcoal transition">Shop best sellers <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {bestSellers.slice(0,8).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-24">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50 font-medium">Trusted brands</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-[0.95] tracking-tight text-brown mt-3">Shop by Brand</h2>
          <p className="text-[13px] text-brown/60 mt-4 leading-relaxed">Brands referenced in customer reviews. Not a claim of official partnership or authorised distributor status. Product availability varies — please confirm with store.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { name: "La Roche-Posay", slug: "la-roche-posay" },
            { name: "Anua", slug: "anua" },
            { name: "Jumiso", slug: "jumiso" },
            { name: "Medicube", slug: "medicube" },
          ].map((b) => (
            <Link key={b.name} href={`/brands#${b.slug}`} className="group rounded-[22px] bg-white border border-borderSoft overflow-hidden hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] relative bg-beige overflow-hidden">
                <Image src={`https://images.unsplash.com/photo-${b.name==="La Roche-Posay" ? "1556228720-195a672e8a03" : b.name==="Anua" ? "1620916566398-39f1143ab7be" : b.name==="Jumiso" ? "1570554886111-eafa6a0a29d2" : "1598440947619-2c35fc9aa908"}?q=80&w=600&auto=format&fit=crop`} alt={b.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-serif text-[18px] text-brown">{b.name}</div>
                  <div className="text-[11px] text-brown/50 mt-0.5">View collection →</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-beige flex items-center justify-center group-hover:bg-brown group-hover:text-ivory transition-colors"><ArrowRight size={16} /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Shop */}
      <section className="bg-beige">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50 font-medium">Why choose us</div>
            <h2 className="font-serif text-[34px] md:text-[48px] leading-[0.95] tracking-tight text-brown mt-3">Why Shop With<br />A.T Cosmetics?</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <div className="w-10 h-10 rounded-full bg-white border border-borderSoft flex items-center justify-center mb-3"><Sparkles size={18} /></div>
                <div className="font-serif text-[16px] text-brown">Variety of Products</div>
                <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">Skincare, cleansers, serums, sunscreens, body care and makeup from brands customers ask for.</div>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-white border border-borderSoft flex items-center justify-center mb-3"><Phone size={18} /></div>
                <div className="font-serif text-[16px] text-brown">Helpful Service</div>
                <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">Staff help you compare options and find what suits your skin — as noted in our reviews.</div>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-white border border-borderSoft flex items-center justify-center mb-3"><MapPin size={18} /></div>
                <div className="font-serif text-[16px] text-brown">Physical Store in Owerri</div>
                <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">Visit us at Awibe Plaza, MCC Wetheral Road. In-store shopping & pickup.</div>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-white border border-borderSoft flex items-center justify-center mb-3"><Truck size={18} /></div>
                <div className="font-serif text-[16px] text-brown">Convenient Options</div>
                <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">Choose in-store shopping, in-store pickup, or delivery. WhatsApp checkout for easy orders.</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[28px] overflow-hidden bg-white border border-borderSoft aspect-[4/5] md:aspect-[4/3] shadow-premium">
            <Image src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop" alt="Why shop" fill className="object-cover" unoptimized />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-[18px] p-5 flex items-center justify-between">
              <div>
                <div className="font-serif text-[14px] text-brown">Awibe Plaza, Owerri</div>
                <div className="text-[11px] text-brown/60">{BUSINESS.address.slice(0,45)}...</div>
              </div>
              <Link href="/contact" className="bg-brown text-ivory px-4 py-2 rounded-full text-[11px] tracking-widest uppercase">Directions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-beige border border-borderSoft rounded-full px-4 py-1.5 text-[11px]"><Star size={12} className="fill-gold text-gold" /> 5.0/5 Google Rating • {BUSINESS.reviewsCount} Reviews</div>
            <h2 className="font-serif text-[32px] md:text-[42px] leading-none tracking-tight text-brown mt-4">What Customers Say</h2>
          </div>
          <Link href="/reviews" className="text-[11px] tracking-[0.18em] uppercase font-semibold border-b border-brown pb-1">Read all reviews</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviewsData.slice(0,3).map(r=>(
            <div key={r.name} className="rounded-[20px] bg-white border border-borderSoft p-6 shadow-card">
              <div className="flex gap-1 mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} size={12} className="fill-gold text-gold" />)}</div>
              <p className="font-sans text-[14px] leading-relaxed text-brown/80">“{r.text}”</p>
              <div className="mt-4 font-serif text-[14px] text-brown">{r.name}</div>
              <div className="text-[11px] text-brown/50">Verified Google review</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown text-ivory">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[32px] md:text-[44px] leading-[0.95]">Ready to build<br />your routine?</h2>
            <p className="text-[13px] opacity-70 mt-3 max-w-[420px]">Explore skincare, sunscreens, serums and more. Order via WhatsApp or visit us in Owerri.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="bg-ivory text-brown px-8 py-3.5 rounded-full text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-gold transition">Explore collection</Link>
            <a href={BUSINESS.whatsappLink} target="_blank" className="border border-ivory/30 text-ivory px-8 py-3.5 rounded-full text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-ivory/10 transition">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
