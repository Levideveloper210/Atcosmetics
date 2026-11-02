export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('NGN', '₦').trim();
}
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
export function generateWhatsAppProductMessage(productName: string, price?: number) {
  const base = `Hello A.T Cosmetics LTD, I'm interested in purchasing ${productName}.`;
  const pricePart = price ? ` Please let me know if it is available and confirm the current price (${formatNaira(price)} listed as sample).` : " Please let me know if it is available and confirm the current price.";
  return `${base}${pricePart}`;
}
export function whatsappUrl(message: string, number = "2347033574227") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
