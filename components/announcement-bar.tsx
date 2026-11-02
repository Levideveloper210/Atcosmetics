import { ANNOUNCEMENT } from "@/lib/constants";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-brown text-ivory text-[11px] md:text-xs tracking-[0.18em] uppercase py-2.5 text-center font-sans font-medium">
      <span className="inline-flex items-center gap-2">
        <span className="w-1 h-1 bg-gold rounded-full animate-pulse" />
        {ANNOUNCEMENT}
        <span className="w-1 h-1 bg-gold rounded-full animate-pulse" />
      </span>
    </div>
  );
}
