import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { aboutImage } from "@/lib/images";
import { Star, MapPin, Heart, ShieldCheck, Truck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-beige border border-borderSoft rounded-full px-4 py-1.5 text-[11px]"><Star size={12} className="fill-gold text-gold"/> {BUSINESS.rating.toFixed(1)}/5 — {BUSINESS.reviewsCount} Google Reviews</div>
            <h1 className="font-serif text-[36px] md:text-[52px] leading-[0.95] tracking-tight text-brown mt-4">A.T Cosmetics LTD —<br/>Your beauty<br/>essentials in Owerri</h1>
            <p className="text-[14px] leading-relaxed text-brown/70 mt-6 max-w-[520px]">
              A.T Cosmetics LTD is a cosmetics and skincare store based in Owerri, Imo State, Nigeria. We offer a variety of skincare products, beauty and cosmetic essentials to help customers find suitable options and build a convenient beauty routine.
            </p>
            <p className="text-[14px] leading-relaxed text-brown/70 mt-4 max-w-[520px]">
              Customers mention our good selection of facial skincare, helpful service when choosing products for different skin types, and a good range that goes beyond just makeup. Whether you are looking for a face cleanser, sunscreen, serums, moisturisers or makeup, we aim to make it easier to compare options before buying.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-[480px]">
              <div className="bg-white border border-borderSoft rounded-[18px] p-4">
                <MapPin size={18} className="text-brown mb-2"/>
                <div className="font-serif text-[14px] text-brown">Physical store</div>
                <div className="text-[11px] text-brown/60 mt-1">Awibe Plaza, 1 MCC Wetheral Road, Owerri</div>
              </div>
              <div className="bg-white border border-borderSoft rounded-[18px] p-4">
                <Heart size={18} className="text-brown mb-2"/>
                <div className="font-serif text-[14px] text-brown">Helpful service</div>
                <div className="text-[11px] text-brown/60 mt-1">As noted in customer reviews</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="bg-brown text-ivory px-7 py-3 rounded-full text-[11px] tracking-widest uppercase font-semibold">Shop collection</Link>
              <Link href="/contact" className="bg-white border border-borderSoft px-7 py-3 rounded-full text-[11px] tracking-widest uppercase font-medium">Visit us</Link>
            </div>
          </div>
          <div className="relative rounded-[28px] overflow-hidden bg-white border border-borderSoft aspect-[4/5] md:aspect-[4/3] shadow-premium">
            <Image src={aboutImage} alt="A.T Cosmetics store" fill className="object-cover" unoptimized />
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-borderSoft rounded-[20px] p-6">
            <ShieldCheck size={20} className="mb-3"/>
            <div className="font-serif text-[16px] text-brown">What we offer</div>
            <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">Facial cleansers, face serums, moisturisers, sunscreens, face creams, toners, face masks, body care, makeup and accessories. Variety that makes comparison easier.</div>
          </div>
          <div className="bg-white border border-borderSoft rounded-[20px] p-6">
            <Heart size={20} className="mb-3"/>
            <div className="font-serif text-[16px] text-brown">Customer-focused</div>
            <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">We help customers find suitable products for their needs — from oily skin options to everyday essentials — without medical claims or guaranteed outcomes.</div>
          </div>
          <div className="bg-white border border-borderSoft rounded-[20px] p-6">
            <Truck size={20} className="mb-3"/>
            <div className="font-serif text-[16px] text-brown">Convenient shopping</div>
            <div className="text-[13px] text-brown/60 mt-2 leading-relaxed">In-store shopping, in-store pickup and delivery options. WhatsApp ordering for easy enquiries and confirmation.</div>
          </div>
        </div>

        <div className="mt-12 bg-beige border border-borderSoft rounded-[22px] p-6 text-[11px] leading-relaxed text-brown/60">
          <strong className="text-brown">Transparency note:</strong> We do not invent founding year, staff members, awards or company history. Information here is limited to what is supported by business listing and genuine customer reviews. Product catalogue shown on this site uses sample data for demonstration — please confirm availability with store.
        </div>
      </div>
    </div>
  );
}
