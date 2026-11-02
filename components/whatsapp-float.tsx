"use client";
import { BUSINESS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 transition-transform">
      <MessageCircle size={28} className="fill-white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
