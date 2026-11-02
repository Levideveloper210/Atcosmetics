"use client";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";
import { MapPin, Phone, MessageCircle, Clock, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { contactImage } from "@/lib/images";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const handleEnquiry = () => {
    const msg = `Hello A.T Cosmetics LTD,\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}\n\nPlease assist.`;
    window.open(whatsappUrl(msg), "_blank");
  };

  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brown/50">Get in touch</div>
            <h1 className="font-serif text-[36px] md:text-[52px] leading-[0.95] tracking-tight text-brown mt-2">Visit, Call<br/>or Chat</h1>
            <p className="text-[13px] text-brown/60 mt-4 max-w-[480px] leading-relaxed">A.T Cosmetics LTD is at Awibe Plaza, 1 MCC Wetheral Road, Uratta Road, Owerri. We offer in-store shopping, in-store pickup and delivery. Contact us for opening hours beyond Tuesday verified time.</p>

            <div className="mt-8 space-y-4">
              <div className="bg-white border border-borderSoft rounded-[18px] p-5 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center shrink-0"><MapPin size={18}/></div>
                <div>
                  <div className="font-serif text-[14px] text-brown">Address</div>
                  <div className="text-[13px] text-brown/70 mt-1 leading-relaxed">{BUSINESS.address}</div>
                  <a href={BUSINESS.mapsUrl} target="_blank" className="mt-2 inline-flex items-center gap-1 text-[11px] tracking-widest uppercase font-semibold border-b border-brown pb-0.5">Get Directions <ArrowUpRight size={12}/></a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-borderSoft rounded-[18px] p-5">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center mb-3"><Phone size={18}/></div>
                  <div className="font-serif text-[14px] text-brown">Phone</div>
                  <div className="text-[13px] text-brown/70 mt-1">{BUSINESS.phone}</div>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="mt-2 inline-flex text-[11px] uppercase tracking-widest font-semibold border-b border-brown pb-0.5">Call now</a>
                </div>
                <div className="bg-white border border-borderSoft rounded-[18px] p-5">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center mb-3"><MessageCircle size={18}/></div>
                  <div className="font-serif text-[14px] text-brown">WhatsApp</div>
                  <div className="text-[13px] text-brown/70 mt-1">{BUSINESS.whatsappDisplay}</div>
                  <a href={BUSINESS.whatsappLink} target="_blank" className="mt-2 inline-flex text-[11px] uppercase tracking-widest font-semibold border-b border-brown pb-0.5">Chat now</a>
                </div>
              </div>

              <div className="bg-white border border-borderSoft rounded-[18px] p-5">
                <div className="flex gap-3">
                  <Clock size={18} className="shrink-0 mt-0.5"/>
                  <div>
                    <div className="font-serif text-[14px] text-brown">Opening Hours</div>
                    <div className="text-[13px] text-brown/70 mt-1">Opens at 8:00 AM on Tuesday (verified from Google listing)</div>
                    <div className="text-[11px] text-brown/50 mt-1">Other days: Contact store to confirm — do not rely on invented hours. Edit in lib/constants.ts when verified.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] overflow-hidden border border-borderSoft h-[280px] relative bg-beige">
                <iframe title="Map" src={`https://www.google.com/maps?q=${BUSINESS.mapQuery}&z=16&output=embed`} className="w-full h-full border-0" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-[96px] space-y-6">
            <div className="relative rounded-[24px] overflow-hidden bg-white border border-borderSoft aspect-[4/3]">
              <Image src={contactImage} alt="Contact" fill className="object-cover" unoptimized />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-white/95 backdrop-blur rounded-[14px] p-4 flex items-center justify-between">
                  <div className="text-[12px] text-brown"><span className="font-semibold">{BUSINESS.name}</span><br/><span className="text-[11px] text-brown/60">{BUSINESS.city}, {BUSINESS.state}</span></div>
                  <a href={BUSINESS.mapsUrl} target="_blank" className="bg-brown text-ivory px-4 py-2 rounded-full text-[10px] uppercase tracking-widest">Directions</a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-borderSoft rounded-[22px] p-6">
              <h3 className="font-serif text-[18px] text-brown">Send an enquiry</h3>
              <p className="text-[11px] text-brown/50 mt-1">Will open WhatsApp with your message to {BUSINESS.whatsappDisplay}</p>
              <div className="mt-5 space-y-4">
                <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Your name" className="w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
                <input value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} placeholder="Phone number" className="w-full px-4 py-3 rounded-full bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
                <textarea value={form.message} onChange={e=>setForm({...form, message: e.target.value})} rows={4} placeholder="How can we help? E.g. I'm looking for..." className="w-full px-4 py-3 rounded-[18px] bg-beige border border-borderSoft text-[13px] focus:outline-none focus:border-brown" />
                <button onClick={handleEnquiry} className="w-full bg-brown text-ivory py-3.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-charcoal transition">Send via WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
