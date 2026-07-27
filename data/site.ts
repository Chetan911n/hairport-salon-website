/**
 * SITE DATA — SOURCE OF TRUTH (VERIFIED VIA GOOGLE BUSINESS LISTING)
 * ----------------------------------------------------------------
 * Verified details from live Google Business Listing for:
 * "THE HAIRPORT" — Nashik Road, Maharashtra.
 * Rating: 4.5 Stars | 181+ Google Reviews
 * Phone: 099223 38669 (+91 99223 38669)
 * Hours: Open Daily · Closes 9:00 PM
 * Address: Shop No. 3-5 Laxman Villa, Nr, Taran Talav Rd, Gayakhe Colony, Nashik Road, Nashik, Maharashtra 422101
 * Landmark: Near Datta Mandir Stop & Taran Talav Rd
 * ----------------------------------------------------------------
 */

export const brand = {
  name: 'The Hairport',
  tagline: 'Nashik Road’s Premier Unisex Salon & Barbershop',
  city: 'Nashik, Maharashtra',
};

export type Branch = {
  id: string;
  name: string;
  status: 'verified' | 'placeholder';
  address: string;
  area: string;
  landmark?: string;
  pincode: string;
  hours: string;
  phone: string;
  rating?: number;
  reviewCount?: number;
  mapsQuery: string;
  lat: number;
  lng: number;
};

export const branches: Branch[] = [
  {
    id: 'nashik-road',
    name: 'THE HAIRPORT — Flagship Salon',
    status: 'verified',
    address: 'Shop No. 3-5 Laxman Villa, Nr, Taran Talav Rd, Gayakhe Colony, Nashik Road',
    area: 'Nashik Road (Near Datta Mandir Stop)',
    landmark: 'Near Datta Mandir Stop & Taran Talav Rd',
    pincode: '422101',
    hours: 'Open Daily · Closes 9:00 PM',
    phone: '099223 38669',
    rating: 4.5,
    reviewCount: 181,
    mapsQuery: 'THE HAIRPORT, Shop No 3-5 Laxman Villa, Nr Taran Talav Rd, Gayakhe Colony, Nashik Road, Nashik 422101',
    lat: 19.9525,
    lng: 73.8656,
  },
];

export const contact = {
  phone: '099223 38669',
  phoneFormatted: '+91 99223 38669',
  whatsapp: '+919922338669',
  email: 'reception@hairport.com',
  instagram: '@hairport_nashik',
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
    title: 'Hair Cut & Styling',
    description: 'Precision cutting by senior hairstylists tailored to face structure, hair texture and lifestyle.',
  },
  {
    slug: 'hair-colour',
    title: 'Hair Colour (Global & Highlights)',
    description: 'Global colour, highlights and root touch-ups using premium low-damage formulations.',
  },
  {
    slug: 'hair-spa',
    title: 'Warm/Cold Hair Wash & Spa',
    description: 'Restorative scalp massages, warm/cold water hair washes, and deep conditioning therapies.',
  },
  {
    slug: 'skin',
    title: 'Skin & Facial Therapies',
    description: 'Custom facials, steam cleansers, and skin treatments in dedicated private sections.',
  },
  {
    slug: 'bridal',
    title: 'Bridal & Toddler Styling',
    description: 'Unhurried bridal makeover packages and gentle, patient haircuts for kids and toddlers.',
  },
];

export const sampleServices: Service[] = [
  { slug: 'signature-cut', name: 'Signature Haircut by Prashant Sir', category: 'hair', description: 'Expert precision haircut by Alim Hakim-trained senior hairstylist Prashant.' },
  { slug: 'beard-sculpt', name: 'Beard Trim & Sculpt by Tejas', category: 'hair', description: 'Custom beard shaping, hot towel conditioning, and razor edge lines.' },
  { slug: 'hair-wash-spa', name: 'Warm Water Wash & Spa by Kunal', category: 'hair-spa', description: 'Relaxing scalp massage and warm water hair wash.' },
  { slug: 'signature-facial', name: 'Skin Refresh Facial', category: 'skin', description: 'Tailored deep-pore facial for healthy, glowing skin.' },
  { slug: 'toddler-cut', name: 'Gentle Toddler & Kids Cut', category: 'bridal', description: 'Patient, fun haircut experience for toddlers and kids.' },
];

export const seo = {
  siteUrl: 'https://hairportsalon.online',
  defaultTitle: 'THE HAIRPORT — Premium Salon in Nashik Road (4.5★ Rated)',
  defaultDescription:
    'THE HAIRPORT is a 4.5★ rated premium unisex salon in Nashik Road, Maharashtra. Precision cuts by Prashant Sir, Tejas & Kunal, hair spa, separate ladies section & warm water hair wash.',
};

export type Review = {
  name: string;
  comment: string;
  rating: number;
  date: string;
  role?: string;
};

export const realGoogleReviews: Review[] = [
  {
    name: 'Paresh Chitnis',
    comment: 'Prashant is a senior hairstylist. He is a very soft spoken and gentleman. PN Hairport is located at an accessible location. Very convenient place and good locality. The salon is very clean and professional.',
    rating: 5,
    date: 'Google Review',
    role: 'Local Guide (95 Reviews)'
  },
  {
    name: 'Siddharth Pareek',
    comment: 'Exceptional service and attention to detail. Prashant Sir and team take the time to understand your hair type before styling.',
    rating: 5,
    date: 'Google Review',
    role: 'Verified Customer'
  },
  {
    name: 'Harshal Raut',
    comment: 'Best salon in Nashik Road! Clean environment, courteous staff and great hair wash service.',
    rating: 5,
    date: 'Google Review',
    role: 'Verified Customer'
  },
  {
    name: 'Immanuel Barse',
    comment: 'Thrilled with the service ... Good going Hairport !',
    rating: 5,
    date: 'Google Review',
    role: 'Verified Customer'
  },
  {
    name: 'Gopal Malani',
    comment: 'Very good place for haircut with co operative staff.',
    rating: 5,
    date: 'Google Review',
    role: 'Verified Customer'
  }
];
