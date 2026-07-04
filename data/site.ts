/**
 * SITE DATA — SOURCE OF TRUTH
 * ----------------------------------------------------------------
 * Every field below is tagged as VERIFIED or PLACEHOLDER.
 *
 * VERIFIED fields come from a public Justdial listing for
 * "Pn The Hairport", Nashik Road, found during research for this
 * project (checked July 2026). This appears to be the only
 * public listing trading under the "Hairport" name in Nashik —
 * no second or third branch could be verified publicly.
 *
 * PLACEHOLDER fields are clearly marked so nobody mistakes them
 * for real business information. Replace every PLACEHOLDER value
 * with confirmed details (or content from the salon owner) before
 * this site goes live. Do not launch with placeholders intact.
 * ----------------------------------------------------------------
 */

export const brand = {
  name: 'Hairport',
  tagline: 'Nashik’s Premium Unisex Salon', // PLACEHOLDER (positioning line, not a verified slogan)
  city: 'Nashik, Maharashtra',
};

export type Branch = {
  id: string;
  name: string;
  status: 'verified' | 'placeholder';
  address: string;
  area: string;
  pincode: string;
  hours: string;
  rating?: number;
  reviewCount?: number;
  mapsQuery: string;
  lat: number;
  lng: number;
};

export const branches: Branch[] = [
  {
    id: 'nashik-road',
    name: 'Hairport — Nashik Road',
    status: 'verified',
    address: 'Lakshman Villa, Near Swimming Pool, Gaikhe Colony, Nashik Road',
    area: 'Nashik Road',
    pincode: '422101',
    hours: 'Open until 10:00 PM (verify weekly schedule before launch)',
    rating: 4.4,
    reviewCount: 189,
    mapsQuery: 'Pn The Hairport, Lakshman Villa, Nashik Road, Nashik 422101',
    lat: 19.9525,
    lng: 73.8656,
  },
  {
    id: 'branch-2-placeholder',
    name: 'Hairport — Second Branch (PLACEHOLDER)',
    status: 'placeholder',
    address: 'Address not publicly verified — replace before launch',
    area: 'TBD',
    pincode: '—',
    hours: 'TBD',
    mapsQuery: 'Hairport Nashik',
    lat: 20.0059,
    lng: 73.7912,
  },
  {
    id: 'branch-3-placeholder',
    name: 'Hairport — Third Branch (PLACEHOLDER)',
    status: 'placeholder',
    address: 'Address not publicly verified — replace before launch',
    area: 'TBD',
    pincode: '—',
    hours: 'TBD',
    mapsQuery: 'Hairport Nashik',
    lat: 19.9975,
    lng: 73.7898,
  },
];

export const contact = {
  phonePlaceholder: '+91 XXXXX XXXXX', // PLACEHOLDER — no verified number, do not invent one
  whatsappPlaceholder: '+91 XXXXX XXXXX', // PLACEHOLDER
  emailPlaceholder: 'hello@hairport.example', // PLACEHOLDER
  instagramPlaceholder: '@hairport.nashik', // PLACEHOLDER — unverified handle
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  description: string;
};

export const serviceCategories = [
  {
    slug: 'hair',
    title: 'Hair',
    description: 'Precision cutting and styling for every texture, tailored to face, lifestyle and occasion.',
  },
  {
    slug: 'hair-colour',
    title: 'Hair Colour',
    description: 'Global colour, balayage and correction using considered, low-damage techniques.',
  },
  {
    slug: 'hair-spa',
    title: 'Hair Spa',
    description: 'Restorative rituals that rebuild strength, shine and scalp health.',
  },
  {
    slug: 'skin',
    title: 'Skin',
    description: 'Facials and skin therapies designed around your skin, not a menu.',
  },
  {
    slug: 'bridal',
    title: 'Bridal',
    description: 'A considered, unhurried bridal experience — from trial to the final look.',
  },
];

// Exact treatment names and prices are PLACEHOLDER — confirm the live
// service menu with Hairport directly before publishing.
export const sampleServices: Service[] = [
  { slug: 'signature-cut', name: 'Signature Cut & Finish', category: 'hair', description: 'A considered cut, shaped to you, finished by hand.' },
  { slug: 'balayage', name: 'Balayage & Global Colour', category: 'hair-colour', description: 'Hand-painted dimension with a low-damage approach.' },
  { slug: 'keratin-spa', name: 'Restorative Hair Spa', category: 'hair-spa', description: 'Deep conditioning ritual for strength and shine.' },
  { slug: 'signature-facial', name: 'Signature Facial', category: 'skin', description: 'A tailored facial for your skin’s current needs.' },
  { slug: 'bridal-trial', name: 'Bridal Trial & Styling', category: 'bridal', description: 'A full look, trialled and perfected ahead of the day.' },
];

export const seo = {
  siteUrl: 'https://www.hairport.example', // PLACEHOLDER — set to the real production domain
  defaultTitle: 'Hairport — Premium Unisex Salon in Nashik',
  defaultDescription:
    'Hairport is a premium unisex hair and beauty salon in Nashik. Precision cuts, colour, hair spa, skin and bridal services in a considered, modern setting.',
};
