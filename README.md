# A.T Cosmetics LTD — Premium E-Commerce Beauty Store

Premium, modern, high-converting cosmetics and skincare e-commerce website built for A.T Cosmetics LTD, Owerri, Imo State, Nigeria.

## Live Features
- Premium design (warm ivory, soft beige, blush pink, deep brown, champagne gold)
- Fully functional shop with search, category & brand filters, sorting
- Product details pages with gallery, quantity, Add to Cart, Buy Now, WhatsApp enquiry
- Shopping cart with localStorage persistence
- Checkout with delivery/pickup + WhatsApp order submission
- Brands, Reviews (real reviews), About, Contact with Google Maps
- Responsive, mobile-first, SEO ready
- WhatsApp floating support: +2347033574227

## Business Info
- Name: A.T Cosmetics LTD
- Address: Awibe Plaza, 1 MCC Wetheral Road, Uratta Road, Owerri 460242, Imo State, Nigeria
- Phone: 0703 357 4227
- WhatsApp: 2347033574227
- Rating: 5.0/5 from 33 reviews
- Shopping: In-store, In-store pickup, Delivery
- Opening: Opens at 8:00 AM on Tuesday (only verified hour — edit others in `app/contact/page.tsx`)

## Product Data
All products in `lib/products.ts` are marked `isSample: true` — clearly identified as sample data for demonstration. Replace with real inventory easily. Images config in `lib/images.ts`.

> ⚠️ Do not claim official partnerships. Brands shown (La Roche-Posay, Anua, Jumiso, Medicube) are referenced from customer reviews.

## Tech Stack
- Next.js 14 App Router
- React 18 + TypeScript
- Tailwind CSS
- Lucide React icons
- No database — central file `lib/products.ts`

## Getting Started Locally

1. **Install dependencies**
```bash
npm install
```

2. **Run dev server**
```bash
npm run dev
```
Open http://localhost:3000

3. **Build check**
```bash
npm run build
```

## Deploy to GitHub + Vercel

1. **Create GitHub repo**
- Go to github.com → New repository → `at-cosmetics-ltd` → Create (empty)

2. **Push code**
```bash
git init
git add .
git commit -m "feat: initial premium A.T Cosmetics store"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/at-cosmetics-ltd.git
git push -u origin main
```

3. **Deploy on Vercel**
- Go to vercel.com → Add New Project → Import your GitHub repo
- Framework preset: Next.js
- Build command: `npm run build`
- Output: default
- Deploy

No env vars needed for v1. Add later if you integrate payments.

## Customization

- Products: edit `lib/products.ts`
- Images: edit `lib/images.ts` to replace remote URLs with your own `/public` images
- Brand list: `lib/products.ts` → `brands`
- Contact hours, map link: `app/contact/page.tsx`
- WhatsApp number: search `2347033574227` — central in `lib/constants.ts`
- Colors: `tailwind.config.ts`

## Folder Structure
```
/app
  /about
  /brands
  /cart
  /checkout
  /contact
  /product/[id]
  /reviews
  /shop
  layout.tsx
  page.tsx
  globals.css
/components
  header.tsx
  footer.tsx
  cart-provider.tsx
  product-card.tsx
  etc
/lib
  products.ts
  images.ts
  constants.ts
  utils.ts
```

## Important Notes
- No fake payment — WhatsApp checkout generates formatted message to +2347033574227
- Prices in ₦ with sample disclaimer
- All buttons functional — no decorative dead buttons
- Cart persists via localStorage
- Mobile menu, search, filters fully working

Built as premium international beauty e-commerce experience with Nigerian identity.
