import { BUSINESS } from "@/lib/constants";
import { reviewsData } from "@/lib/products";
import { Star } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[960px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-borderSoft rounded-full px-5 py-2 text-[12px]">
            <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} size={14} className="fill-gold text-gold"/>)}</div>
            <span className="font-medium">{BUSINESS.rating.toFixed(1)}/5 Google Rating — {BUSINESS.reviewsCount} Reviews</span>
          </div>
          <h1 className="font-serif text-[36px] md:text-[52px] leading-[0.95] tracking-tight text-brown mt-6">Customer Reviews</h1>
          <p className="text-[13px] text-brown/60 mt-4 max-w-[560px] mx-auto">Genuine feedback from customers who visited A.T Cosmetics LTD in Owerri. Reviews below are reproduced accurately from supplied Google reviews.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {reviewsData.map(r=>(
            <div key={r.name} className="bg-white border border-borderSoft rounded-[20px] p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} size={14} className="fill-gold text-gold"/>)}</div>
                <div className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-beige border border-borderSoft">Google</div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-brown/80">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brown text-ivory flex items-center justify-center font-serif text-[12px]">{r.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
                <div>
                  <div className="font-serif text-[14px] text-brown">{r.name}</div>
                  <div className="text-[11px] text-brown/50">Verified Google review • 5★</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={BUSINESS.mapsUrl} target="_blank" className="inline-flex bg-brown text-ivory px-8 py-3.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-charcoal transition">Read more Google Reviews</a>
          <div className="mt-4 text-[11px] text-brown/50">Link opens Google Maps search for {BUSINESS.address}. Replace with verified review URL when available in lib/constants.ts</div>
          <Link href="/shop" className="mt-6 inline-flex text-[11px] tracking-widest uppercase border-b border-brown pb-1">Shop collection</Link>
        </div>
      </div>
    </div>
  );
}
