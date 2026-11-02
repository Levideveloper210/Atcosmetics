import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnnouncementBar from "@/components/announcement-bar";
import WhatsAppFloat from "@/components/whatsapp-float";
import { CartProvider } from "@/components/cart-provider";
import { BUSINESS } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A.T Cosmetics LTD | Premium Skincare & Beauty Store in Owerri",
    template: "%s | A.T Cosmetics LTD"
  },
  description: "Discover quality skincare, beauty essentials and trusted products at A.T Cosmetics LTD in Owerri. 5.0★ from 33 reviews. In-store shopping, pickup & delivery.",
  keywords: ["A.T Cosmetics", "skincare Owerri", "cosmetics Owerri", "La Roche-Posay Nigeria", "Anua Nigeria", "beauty store Imo State"],
  openGraph: {
    title: "A.T Cosmetics LTD — Your Beauty Essentials, Delivered",
    description: "Premium skincare & beauty store in Owerri. Shop La Roche-Posay, Anua, Jumiso, Medicube and more.",
    type: "website",
    locale: "en_NG",
  },
  metadataBase: new URL("https://atcosmetics.example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: BUSINESS.name,
            address: BUSINESS.address,
            telephone: BUSINESS.phoneRaw,
            aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS.rating, reviewCount: BUSINESS.reviewsCount },
            openingHours: "Mo-Su 08:00-20:00"
          })
        }} />
      </body>
    </html>
  );
}
