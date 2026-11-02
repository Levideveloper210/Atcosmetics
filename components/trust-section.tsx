import { Star, Store, Truck, PackageCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function TrustSection() {
  const items = [
    { icon: Star, title: `${BUSINESS.rating.toFixed(1)} Google Rating`, desc: `${BUSINESS.reviewsCount} Customer Reviews` },
    { icon: Store, title: "In-store Shopping", desc: "Visit us in Owerri" },
    { icon: Truck, title: "Delivery Available", desc: "Doorstep delivery" },
    { icon: PackageCheck, title: "In-store Pickup", desc: "Order & pick up" },
  ];
  return (
    <div className="bg-beige border-y border-borderSoft">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map(it => (
          <div key={it.title} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-borderSoft flex items-center justify-center shrink-0">
              <it.icon size={18} className="text-brown" />
            </div>
            <div>
              <div className="font-serif text-[13px] md:text-[14px] font-medium text-brown">{it.title}</div>
              <div className="font-sans text-[11px] md:text-[12px] text-brown/60 mt-0.5">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
