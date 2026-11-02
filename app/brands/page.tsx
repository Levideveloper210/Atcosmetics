import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { brandImages } from "@/lib/images";
import ProductCard from "@/components/product-card";

const brandList = [
  { name: "La Roche-Posay", desc: "Dermatologist-tested skincare referenced by customers looking for sunscreens and repair care.", slug: "la-roche-posay" },
  { name: "Anua", desc: "K-beauty favourite with Heartleaf soothing line — mentioned for serums and cleansers.", slug: "anua" },
  { name: "Jumiso", desc: "Brightening and hydrating essentials — Vitamin and Hyaluronic lines noted in reviews.", slug: "jumiso" },
  { name: "Medicube", desc: "Pore care and Age-R devices including Age-R face cream options mentioned by customers.", slug: "medicube" },
];

export default function BrandsPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16">
        <div className="max-w-[720px]">
          <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50">Brand collections</div>
          <h1 className="font-serif text-[36px] md:text-[52px] leading-[0.95] tracking-tight text-brown mt-2">Shop by Brand</h1>
          <p className="text-[13px] text-brown/60 mt-4 leading-relaxed">Brands referenced in genuine customer reviews. Not a claim of official partnership, authorised distributor or guaranteed stock. Availability varies — confirm with store. Products below are sample data for demonstration.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {brandList.map(brand => {
            const brandProducts = products.filter(p=>p.brand===brand.name);
            return (
              <div key={brand.name} id={brand.slug} className="scroll-mt-[100px] bg-white border border-borderSoft rounded-[24px] overflow-hidden">
                <div className="relative h-[220px] bg-beige overflow-hidden">
                  <Image src={brandImages[brand.name] || "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"} alt={brand.name} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h2 className="font-serif text-[26px] text-ivory">{brand.name}</h2>
                    <p className="text-[12px] text-ivory/80 mt-1 max-w-[420px]">{brand.desc}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[11px] tracking-widest uppercase text-brown/50">{brandProducts.length} sample products</div>
                    <Link href={`/shop?brand=${encodeURIComponent(brand.name)}`} className="text-[11px] tracking-widest uppercase font-semibold border-b border-brown pb-0.5">View all</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {brandProducts.slice(0,4).map(p=> <ProductCard key={p.id} product={p} />)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-[18px] p-5 text-[11px] leading-relaxed text-amber-800">
          All brand collections shown here use sample product entries. To update inventory, edit <code className="bg-white px-1.5 py-0.5 rounded">lib/products.ts</code>. Do not display official partnership badges unless you have written authorisation from the brand.
        </div>
      </div>
    </div>
  );
}
