'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Sparkles, Calendar, Search, X } from 'lucide-react';

const IGORA_SHADES = [
  {
    id: 'naturals',
    title: 'Naturals & Baselines',
    description: 'Essential base colours, cool cedars, and rich natural tones for solid foundation and coverage.',
    shades: [
      { code: '10-0', name: 'Ultra Blonde Nature', category: 'Nature', gradient: 'linear-gradient(135deg, #F9F3D8 0%, #E3D8A3 100%)', text: '#5D4F1E', desc: 'Lightest natural blonde, ideal for bases level 8 or higher. Delivers clear, sun-kissed reflection.' },
      { code: '6-0', name: 'Dark Blonde Nature', category: 'Nature', gradient: 'linear-gradient(135deg, #7E6E59 0%, #675742 100%)', text: '#FFFFFF', desc: 'Standard natural dark blonde. Excellent for grey coverage and natural base balancing.' },
      { code: '5-0', name: 'Light Brown Nature', category: 'Nature', gradient: 'linear-gradient(135deg, #5B4E3E 0%, #443728 100%)', text: '#FFFFFF', desc: 'Natural light brown base. Neutral temperature, perfect for classic understated elegance.' },
      { code: '4-0', name: 'Medium Brown Nature', category: 'Nature', gradient: 'linear-gradient(135deg, #423528 0%, #2A1E14 100%)', text: '#FFFFFF', desc: 'Classic medium brown shade, excellent for full grey coverage and rich natural depth.' },
      { code: '3-0', name: 'Dark Brown Nature', category: 'Nature', gradient: 'linear-gradient(135deg, #2D2218 0%, #150D05 100%)', text: '#FFFFFF', desc: 'Rich dark brown shade, close to off-black. Highly saturated and reflective.' },
      { code: '1-0', name: 'Deep Black Nature', category: 'Nature', gradient: 'linear-gradient(135deg, #181818 0%, #080808 100%)', text: '#FFFFFF', desc: 'Intense jet black. Maximum pigment load for dramatic, highly polished dark hair.' },
      { code: '5-00', name: 'Light Brown Nature +', category: 'Nature +', gradient: 'linear-gradient(135deg, #564837 0%, #3D3021 100%)', text: '#FFFFFF', desc: 'Extra coverage light brown base. Specially formulated for stubborn, resistant white hair.' },
      { code: '3-00', name: 'Dark Brown Nature +', category: 'Nature +', gradient: 'linear-gradient(135deg, #2B2015 0%, #130D06 100%)', text: '#FFFFFF', desc: 'Deep, extra-dense dark brown base. Provides complete coverage on heavy grey percentages.' },
      { code: '10-14', name: 'Cool Cedar Platinum', category: 'Cedar', gradient: 'linear-gradient(135deg, #DFDCD0 0%, #C3BDB0 100%)', text: '#4A4335', desc: 'Ultra-cool ash-cedar platinum blonde. Neutralises unwanted brass and gold reflections.' },
      { code: '10-2', name: 'Pastel Cedar Blonde', category: 'Cedar', gradient: 'linear-gradient(135deg, #E6E1D3 0%, #CABFA8 100%)', text: '#4D432D', desc: 'Cool soft pearl cedar blonde. Ideal for toning pre-lightened hair to a soft silver-beige.' }
    ]
  },
  {
    id: 'chocolates-reds',
    title: 'Chocolates & Reds',
    description: 'Warm cocoa browns, fiery coppers, and dramatic crimson red shades.',
    shades: [
      { code: '8-65', name: 'Warm Cocoa Blonde', category: 'Chocolates', gradient: 'linear-gradient(135deg, #AA8F71 0%, #8D7153 100%)', text: '#FFFFFF', desc: 'Light warm chocolate shade. Blends gold and violet pigments for a luxurious beige-brown finish.' },
      { code: '7-65', name: 'Medium Chocolate', category: 'Chocolates', gradient: 'linear-gradient(135deg, #8E7051 0%, #725437 100%)', text: '#FFFFFF', desc: 'Rich milk chocolate brown with soft golden ash highlights. Highly popular salon classic.' },
      { code: '6-65', name: 'Dark Chocolate Cocoa', category: 'Chocolates', gradient: 'linear-gradient(135deg, #745638 0%, #593D22 100%)', text: '#FFFFFF', desc: 'Deep milk chocolate tone. Provides warm, multi-dimensional reflections under sunlight.' },
      { code: '6-68', name: 'Hazelnut Praline', category: 'Chocolates', gradient: 'linear-gradient(135deg, #6C4927 0%, #513112 100%)', text: '#FFFFFF', desc: 'Rich dark hazelnut brown with a strong red-gold undercurrent. Extremely shiny finish.' },
      { code: '5-65', name: 'Light Cocoa Brown', category: 'Chocolates', gradient: 'linear-gradient(135deg, #5F4227 0%, #462A12 100%)', text: '#FFFFFF', desc: 'Warm light chocolate brown. Ideal for brunette bases seeking soft chocolatey undertones.' },
      { code: '3-68', name: 'Dark Mocha Brown', category: 'Chocolates', gradient: 'linear-gradient(135deg, #371E0B 0%, #200D01 100%)', text: '#FFFFFF', desc: 'Very deep mocha chocolate. Strong red-gold undertones that keep dark bases looking warm.' },
      { code: '9-98', name: 'Extra Copper Red Blonde', category: 'Reds', gradient: 'linear-gradient(135deg, #D44E28 0%, #AA2A09 100%)', text: '#FFFFFF', desc: 'Vibrant strawberry blonde with high-saturation copper reflecting pigments.' },
      { code: '8-77', name: 'Intense Copper Blonde', category: 'Reds', gradient: 'linear-gradient(135deg, #D2691E 0%, #B22222 100%)', text: '#FFFFFF', desc: 'Vibrant, bright metallic copper. Recommended for fashion-forward red looks.' },
      { code: '6-88', name: 'Intense Red Blonde', category: 'Reds', gradient: 'linear-gradient(135deg, #A81C1C 0%, #7B0A0A 100%)', text: '#FFFFFF', desc: 'Intense deep crimson red. Rich saturated red tones with excellent longevity.' },
      { code: '6-99', name: 'Dark Violet Blonde', category: 'Reds', gradient: 'linear-gradient(135deg, #7B2F62 0%, #5A1743 100%)', text: '#FFFFFF', desc: 'Vibrant violet-burgundy tone. Adds cool-toned purple-red reflection to the hair.' },
      { code: '5-99', name: 'Light Violet Brown', category: 'Reds', gradient: 'linear-gradient(135deg, #651E4E 0%, #460C32 100%)', text: '#FFFFFF', desc: 'Deep burgundy violet brown. Dramatic and mysterious look for dark bases.' },
      { code: '4-99', name: 'Medium Violet Brown', category: 'Reds', gradient: 'linear-gradient(135deg, #4A1237 0%, #2E0520 100%)', text: '#FFFFFF', desc: 'Intense plum-black violet. Looks black in dim lighting but explodes into violet-purple under sun.' }
    ]
  },
  {
    id: 'fashion-tonal',
    title: 'Fashion & Tonal Series',
    description: 'Gold-beiges, rich sand tones, and natural fashion-cover blends.',
    shades: [
      { code: '8-45', name: 'Golden Honey Blonde', category: 'Bamboo', gradient: 'linear-gradient(135deg, #CAA76A 0%, #B08C4E 100%)', text: '#FFFFFF', desc: 'Bright bamboo gold blonde with soft copper reflections. Warm, honeyed shade.' },
      { code: '7-64', name: 'Caramel Bamboo', category: 'Bamboo', gradient: 'linear-gradient(135deg, #B58A54 0%, #9C713D 100%)', text: '#FFFFFF', desc: 'Medium caramel blonde. Neutral-warm blend, very popular for soft balayage highlights.' },
      { code: '6-45', name: 'Warm Bamboo Gold', category: 'Bamboo', gradient: 'linear-gradient(135deg, #9C784C 0%, #825F35 100%)', text: '#FFFFFF', desc: 'Dark warm gold-copper blonde. Excellent transition shade for highlights on dark hair.' },
      { code: '7-55', name: 'Double Gold Honey', category: 'Honey', gradient: 'linear-gradient(135deg, #CE9D52 0%, #B2833A 100%)', text: '#FFFFFF', desc: 'Intense golden honey blonde. Formulated with double gold concentration for rich golden glow.' },
      { code: '6-55', name: 'Dark Honey Gold', category: 'Honey', gradient: 'linear-gradient(135deg, #AA7D3B 0%, #8E6223 100%)', text: '#FFFFFF', desc: 'Deep honey gold blonde. Adds rich, golden brunette dimensions to brown hair.' },
      { code: '5-62', name: 'Havana Sand', category: 'Havana', gradient: 'linear-gradient(135deg, #7C5F43 0%, #63472C 100%)', text: '#FFFFFF', desc: 'Cool chocolate beige sand shade. Beautiful earthy brown with neutral reflection.' },
      { code: '5-68', name: 'Teakwood Brown', category: 'Teak', gradient: 'linear-gradient(135deg, #6B4E38 0%, #523722 100%)', text: '#FFFFFF', desc: 'Medium teakwood brown. Combines chocolate and mahogany undertones for an organic finish.' },
      { code: '5-88', name: 'Autumn Leaf Red', category: 'Autumn Leaf', gradient: 'linear-gradient(135deg, #A04A3C 0%, #7E2F23 100%)', text: '#FFFFFF', desc: 'Rich auburn brown with deep autumn red pigments. Warm and seasonal.' },
      { code: '7-50', name: 'Golden Beige Cover', category: 'Absolutes', gradient: 'linear-gradient(135deg, #B8966E 0%, #9B7B54 100%)', text: '#FFFFFF', desc: 'Beige gold absolute. Custom blend for 100% white hair coverage with soft fashion reflections.' },
      { code: '6-50', name: 'Dark Golden Beige Absolute', category: 'Absolutes', gradient: 'linear-gradient(135deg, #977651 0%, #7B5C37 100%)', text: '#FFFFFF', desc: 'Deep gold absolute coverage. Delivers warm blonde coverage on mature hair.' },
      { code: '5-50', name: 'Light Golden Brown Absolute', category: 'Absolutes', gradient: 'linear-gradient(135deg, #795A39 0%, #5F4222 100%)', text: '#FFFFFF', desc: 'Absolute light brown coverage. Leaves a soft, natural golden shine on grey hair.' }
    ]
  },
  {
    id: 'specialities',
    title: 'Specialities & Highlighting',
    description: 'High-lift pastels, pure pigments boosters, and vibrant fashion lights for extreme lift and toning.',
    shades: [
      { code: '12-0', name: 'Super Highlift Neutral', category: 'Highlifts', gradient: 'linear-gradient(135deg, #FAF4D9 0%, #ECE1BC 100%)', text: '#4D472D', desc: 'High-lift blonde booster. Lifts up to 4-5 levels on natural bases without bleaching.' },
      { code: '12-1', name: 'Super Highlift Ash', category: 'Highlifts', gradient: 'linear-gradient(135deg, #EBE6DA 0%, #D2CAD6 100%)', text: '#4B4354', desc: 'Intense ash high-lift blonde. Best for cooling down orange and yellow pigments during lifting.' },
      { code: '12-19', name: 'Highlift Ash Violet', category: 'Highlifts', gradient: 'linear-gradient(135deg, #E6E4EA 0%, #C4BED8 100%)', text: '#473E5B', desc: 'High-lift ash violet blonde. Double action violet pigments ensure clean platinum results.' },
      { code: '9.5-1', name: 'Pastel Ice Ash', category: 'Highlifts', gradient: 'linear-gradient(135deg, #E3E4E8 0%, #CAD0D8 100%)', text: '#3E4752', desc: 'Toner for pre-lightened hair. Delivers an ice-ash silver finish.' },
      { code: '9.5-49', name: 'Pastel Rose Gold', category: 'Highlifts', gradient: 'linear-gradient(135deg, #E8D3C7 0%, #D8B7B2 100%)', text: '#5D4642', desc: 'Trendy pastel rose gold toner. Combines peach, violet, and beige reflex.' },
      { code: '0-55', name: 'Gold Booster', category: 'Booster', gradient: 'linear-gradient(135deg, #FCB823 0%, #D29205 100%)', text: '#FFFFFF', desc: 'Pure yellow gold concentrate. Used to add warmth or intensify gold reflections.' },
      { code: '0-77', name: 'Copper Booster', category: 'Booster', gradient: 'linear-gradient(135deg, #FC6A03 0%, #D05202 100%)', text: '#FFFFFF', desc: 'Pure orange copper concentrate. Used to boost orange reflections in fashion red formulations.' },
      { code: '0-88', name: 'Red Booster', category: 'Booster', gradient: 'linear-gradient(135deg, #E50000 0%, #990000 100%)', text: '#FFFFFF', desc: 'Pure red concentrate. Dramatically intensifies cherry or crimson red tones.' },
      { code: '0-22', name: 'Blue Neutraliser / Booster', category: 'Booster', gradient: 'linear-gradient(135deg, #0047AB 0%, #000080 100%)', text: '#FFFFFF', desc: 'Pure blue concentrate. Neutralises orange undertones or intensifies cool metallic ash shades.' },
      { code: '0-33', name: 'Green anti-red Booster', category: 'Booster', gradient: 'linear-gradient(135deg, #008080 0%, #004F4F 100%)', text: '#FFFFFF', desc: 'Pure matte green concentrate. Neutralises unwanted red pigments in dark bases.' },
      { code: 'L-00', name: 'Fashion Lights Blonde', category: 'Fashion Lights', gradient: 'linear-gradient(135deg, #E5D6A7 0%, #C4B384 100%)', text: '#4D4428', desc: 'Lifts and colours dark hair in one step. Ideal for honey blonde highlights.' },
      { code: 'L-77', name: 'Fashion Lights Copper', category: 'Fashion Lights', gradient: 'linear-gradient(135deg, #DD642B 0%, #B84713 100%)', text: '#FFFFFF', desc: 'Lifts and deposits intense copper on dark bases. Ideal for warm contrast highlights.' },
      { code: 'L-88', name: 'Fashion Lights Red', category: 'Fashion Lights', gradient: 'linear-gradient(135deg, #BA1313 0%, #870707 100%)', text: '#FFFFFF', desc: 'Lifts and deposits rich red tones in a single step on natural dark hair bases.' }
    ]
  }
];

const YUTIKA_SHADES = [
  {
    id: 'naturals-cool',
    title: 'Naturals & Cool Browns',
    description: 'Nourishing base colours for full grey coverage and balanced neutral-cool tones, infused with macadamia oil.',
    shades: [
      { code: '1', name: 'Natural Black', category: 'Natural', gradient: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)', text: '#FFFFFF', desc: 'Deep jet black. Rich, solid coverage with brilliant glossy shine.' },
      { code: '2', name: 'Darkest Brown', category: 'Natural', gradient: 'linear-gradient(135deg, #2A201C 0%, #150E0C 100%)', text: '#FFFFFF', desc: 'Extra dark brown. Appears almost black, providing soft, natural depth.' },
      { code: '3', name: 'Dark Brown', category: 'Natural', gradient: 'linear-gradient(135deg, #3A2F2A 0%, #221814 100%)', text: '#FFFFFF', desc: 'Classic dark brown shade. Perfect neutral tone.' },
      { code: '4', name: 'Brown', category: 'Natural', gradient: 'linear-gradient(135deg, #4A3E38 0%, #31251E 100%)', text: '#FFFFFF', desc: 'Standard medium brown. Rich base tone with excellent coverage.' },
      { code: '5', name: 'Light Brown', category: 'Natural', gradient: 'linear-gradient(135deg, #62524A 0%, #473831 100%)', text: '#FFFFFF', desc: 'Natural light brown. Adds soft chocolatey reflections to dark hair.' },
      { code: '6', name: 'Dark Blonde', category: 'Natural', gradient: 'linear-gradient(135deg, #7A695E 0%, #5F4F45 100%)', text: '#FFFFFF', desc: 'Natural dark blonde. Ideal for transitioning from brown to blonde.' },
      { code: '7', name: 'Blonde', category: 'Natural', gradient: 'linear-gradient(135deg, #9C8A79 0%, #82705E 100%)', text: '#FFFFFF', desc: 'Classic medium natural blonde. High reflection and clarity.' },
      { code: '8', name: 'Light Blonde', category: 'Natural', gradient: 'linear-gradient(135deg, #BFA992 0%, #A28D77 100%)', text: '#5E4E3C', desc: 'Warm natural light blonde. Highly reflective, sun-kissed finish.' },
      { code: '9', name: 'Very Light Blonde', category: 'Natural', gradient: 'linear-gradient(135deg, #D4BEA3 0%, #BBA287 100%)', text: '#5D4932', desc: 'Extra light blonde with pale gold undertones.' },
      { code: '10', name: 'Lightest Blonde', category: 'Natural', gradient: 'linear-gradient(135deg, #EAD6BB 0%, #CDB79C 100%)', text: '#5F4B32', desc: 'Maximum light natural blonde level. Clean platinum reflection.' },
      { code: 'Ultra Blonde', name: 'Ultra Blonde', category: 'Natural', gradient: 'linear-gradient(135deg, #F3E3CD 0%, #DFCEB7 100%)', text: '#5F503B', desc: 'Pure luminous ultra blonde. Maximum clear lift.' },
      { code: '7.13', name: 'Ash Golden Blonde', category: 'Cool Brown', gradient: 'linear-gradient(135deg, #998773 0%, #7E6D5B 100%)', text: '#FFFFFF', desc: 'Cool blonde with double ash and soft gold tones. Sophisticated finish.' },
      { code: '8.13', name: 'Light Beige Blonde', category: 'Cool Brown', gradient: 'linear-gradient(135deg, #BFA990 0%, #A18D76 100%)', text: '#5E4D3A', desc: 'Sandy beige blonde. Ultra-chic, neutralises warm orange reflection.' }
    ]
  },
  {
    id: 'golds-warm',
    title: 'Golds & Warm Browns',
    description: 'Golden honeys and warm mahogany woods for radiant, multi-dimensional shine.',
    shades: [
      { code: '4.3', name: 'Golden Brown', category: 'Gold', gradient: 'linear-gradient(135deg, #594532 0%, #3D2C1B 100%)', text: '#FFFFFF', desc: 'Medium brown with rich, shiny golden undertones.' },
      { code: '5.3', name: 'Light Golden Brown', category: 'Gold', gradient: 'linear-gradient(135deg, #745F4B 0%, #594432 100%)', text: '#FFFFFF', desc: 'Warm light brown base reflecting bright golden light.' },
      { code: '8.3', name: 'Light Golden Blonde', category: 'Gold', gradient: 'linear-gradient(135deg, #C5A376 0%, #A78759 100%)', text: '#FFFFFF', desc: 'Shimmering gold blonde. Gives a glowing warm halo appearance.' },
      { code: '5.35', name: 'Light Golden Mahogany Brown', category: 'Warm Brown', gradient: 'linear-gradient(135deg, #72503A 0%, #563723 100%)', text: '#FFFFFF', desc: 'Brunette blend combining gold reflection with mahogany red undertones.' },
      { code: '6.34', name: 'Dark Golden Copper Blonde', category: 'Warm Brown', gradient: 'linear-gradient(135deg, #8E6544 0%, #714C2D 100%)', text: '#FFFFFF', desc: 'Warm amber blonde. Rich combination of gold and copper.' },
      { code: '8.34', name: 'Light Golden Copper Blonde', category: 'Warm Brown', gradient: 'linear-gradient(135deg, #C3996E 0%, #A77E55 100%)', text: '#FFFFFF', desc: 'Bright copper-gold sand blonde. Highly reflective metallic tone.' }
    ]
  },
  {
    id: 'ash-mahogany',
    title: 'Ash & Mahogany',
    description: 'Refined smoky ashes and rich mahogany purples for distinct character.',
    shades: [
      { code: '3.1', name: 'Dark Ash Brown', category: 'Ash', gradient: 'linear-gradient(135deg, #373330 0%, #201D1A 100%)', text: '#FFFFFF', desc: 'Smoky dark brown. Neutralises warm red undertones completely.' },
      { code: '5.17', name: 'Light Ash Cool Brown', category: 'Ash', gradient: 'linear-gradient(135deg, #5B544E 0%, #423C37 100%)', text: '#FFFFFF', desc: 'Cool matte light brown. Features ash and cedar reflect for a clean earthy feel.' },
      { code: '7.1', name: 'Ash Blonde', category: 'Ash', gradient: 'linear-gradient(135deg, #8E8377 0%, #73695F 100%)', text: '#FFFFFF', desc: 'Classic cool ash blonde. Excellent for reducing yellow/brass reflections.' },
      { code: '5.5', name: 'Light Mahogany Brown', category: 'Mahogany', gradient: 'linear-gradient(135deg, #5E3A37 0%, #442220 100%)', text: '#FFFFFF', desc: 'Earthy mahogany brown. Features red-violet tones for an organic luxury feel.' }
    ]
  },
  {
    id: 'copper-reds',
    title: 'Coppers, Burgundy & Reds',
    description: 'Vibrant coppers, intense berries, burgundy purples, and high-visibility reds.',
    shades: [
      { code: '4.45', name: 'Copper Mahogany Brown', category: 'Copper', gradient: 'linear-gradient(135deg, #6C3D28 0%, #512714 100%)', text: '#FFFFFF', desc: 'Warm auburn brown blending copper metal reflections and mahogany red.' },
      { code: '4.65', name: 'Red Mahogany Brown', category: 'Reddish', gradient: 'linear-gradient(135deg, #74322C 0%, #561914 100%)', text: '#FFFFFF', desc: 'Rich reddish-brown. Adds classic red wine undertones to a medium-dark base.' },
      { code: '4.8', name: 'Chocolate Brown', category: 'Chocolate', gradient: 'linear-gradient(135deg, #4A3022 0%, #311A0E 100%)', text: '#FFFFFF', desc: 'Pure cacao chocolate brown. Rich and comforting warm brunette tone.' },
      { code: '7.83', name: 'Chocolate Golden Blonde', category: 'Chocolate', gradient: 'linear-gradient(135deg, #A47D55 0%, #89633C 100%)', text: '#FFFFFF', desc: 'Glistening light golden brown. Blends warm chocolate and soft honey reflex.' },
      { code: '4.20', name: 'Extra Burgundy Brown', category: 'Burgundy', gradient: 'linear-gradient(135deg, #4F223D 0%, #360E27 100%)', text: '#FFFFFF', desc: 'Intense berry burgundy. Highly saturated cool-toned purple-brown.' },
      { code: '4.26', name: 'Burgundy Red Brown', category: 'Burgundy', gradient: 'linear-gradient(135deg, #592038 0%, #3E0B21 100%)', text: '#FFFFFF', desc: 'Vibrant plum-red burgundy. Combines violet purple and bright crimson red.' },
      { code: 'Red Orange', name: 'Vibrant Red Orange', category: 'Red', gradient: 'linear-gradient(135deg, #E52B13 0%, #B81300 100%)', text: '#FFFFFF', desc: 'Ultra-bright fashion red orange. Pure high-octane copper-red pigment.' },
      { code: 'Red', name: 'Intense Fashion Red', category: 'Red', gradient: 'linear-gradient(135deg, #C50C30 0%, #8E0018 100%)', text: '#FFFFFF', desc: 'Vibrant classic red. Deeply saturated fashion red tone.' }
    ]
  }
];

export default function ColourGuidePage() {
  const router = useRouter();
  const [activeBrand, setActiveBrand] = useState<'igora' | 'yutika'>('igora');
  const [activeTab, setActiveTab] = useState('naturals');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShade, setSelectedShade] = useState<any | null>(null);

  const families = activeBrand === 'igora' ? IGORA_SHADES : YUTIKA_SHADES;

  // Handle auto resetting tabs when switching brands
  const handleBrandChange = (brand: 'igora' | 'yutika') => {
    setActiveBrand(brand);
    setSearchQuery('');
    if (brand === 'igora') {
      setActiveTab('naturals');
    } else {
      setActiveTab('naturals-cool');
    }
  };

  const activeFamily = families.find(f => f.id === activeTab);

  // Search filter across all brands and families
  const allShades = [
    ...IGORA_SHADES.flatMap(f => f.shades.map(s => ({ ...s, brand: 'Igora Royal', brandId: 'igora', familyTitle: f.title }))),
    ...YUTIKA_SHADES.flatMap(f => f.shades.map(s => ({ ...s, brand: 'Yutika Professional', brandId: 'yutika', familyTitle: f.title })))
  ];

  const filteredShades = searchQuery
    ? allShades.filter(s => s.code.toLowerCase().includes(searchQuery.toLowerCase()) || s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : activeFamily ? activeFamily.shades.map(s => ({
        ...s,
        brand: activeBrand === 'igora' ? 'Igora Royal' : 'Yutika Professional',
        brandId: activeBrand,
        familyTitle: activeFamily.title
      })) : [];

  const handleBookWithShade = (shade: any) => {
    const brandName = shade.brand || (activeBrand === 'igora' ? 'Igora Royal' : 'Yutika Professional');
    router.push(`/book?preselectedService=${encodeURIComponent('Hair Colour')}&shade=${encodeURIComponent(`${brandName} (${shade.code} - ${shade.name})`)}`);
  };

  return (
    <>
      <PageHeader eyebrow="Interactive Catalogue" title="Hairport shade" goldWord="cards." />

      <section className="pb-28 pt-8 md:pb-40 text-white min-h-screen">
        <div className="container-luxury">
          
          {/* Header Description & Search */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border pb-8 mb-10">
            <div>
              <p className="text-muted text-sm leading-relaxed max-w-xl">
                Explore our digital shade guides for our premium professional color brands. Click on any swatch to view formulation details and consult recommendations.
              </p>
            </div>
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search code or name..."
                className="w-full bg-[#111111] border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors font-sans"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-white">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {!searchQuery && (
            /* Brand Selector Buttons */
            <div className="flex justify-center gap-4 mb-10">
              <button
                onClick={() => handleBrandChange('igora')}
                className={`px-8 py-3 rounded-full font-display text-sm tracking-wider uppercase border transition-all cursor-pointer ${
                  activeBrand === 'igora'
                    ? 'bg-gold text-bg border-gold shadow-gold font-semibold'
                    : 'bg-transparent text-muted border-border hover:border-gold/50 hover:text-white'
                }`}
              >
                Igora Royal (Schwarzkopf)
              </button>
              <button
                onClick={() => handleBrandChange('yutika')}
                className={`px-8 py-3 rounded-full font-display text-sm tracking-wider uppercase border transition-all cursor-pointer ${
                  activeBrand === 'yutika'
                    ? 'bg-gold text-bg border-gold shadow-gold font-semibold'
                    : 'bg-transparent text-muted border-border hover:border-gold/50 hover:text-white'
                }`}
              >
                Yutika Professional
              </button>
            </div>
          )}

          {!searchQuery ? (
            /* Category Navigation Tabs per Brand */
            <div className="flex border-b border-border/50 pb-2 mb-10 gap-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
              {families.map((family) => (
                <button
                  key={family.id}
                  onClick={() => setActiveTab(family.id)}
                  className={`pb-3 text-sm font-sans uppercase tracking-widest font-semibold border-b-2 transition-all cursor-pointer ${
                    activeTab === family.id 
                      ? "border-gold text-gold" 
                      : "border-transparent text-muted hover:text-white"
                  }`}
                >
                  {family.title}
                </button>
              ))}
            </div>
          ) : (
            <div className="mb-8 text-sm text-muted">
              Showing {filteredShades.length} search results for &ldquo;{searchQuery}&rdquo;
            </div>
          )}

          {/* Section description */}
          {!searchQuery && activeFamily && (
            <div className="mb-10 max-w-2xl bg-card border border-border/40 p-6 rounded-xl">
              <h3 className="font-display text-lg text-white mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-gold" /> {activeFamily.title} Series
              </h3>
              <p className="text-muted text-sm leading-relaxed">{activeFamily.description}</p>
            </div>
          )}

          {/* Shades Swatch Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredShades.map((shade, i) => (
              <Reveal key={`${shade.code}-${shade.name}`} delay={i * 0.03}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedShade(shade)}
                  className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer shadow-lg hover:border-gold/50 transition-all flex flex-col h-full"
                >
                  {/* Color Swatch Visualizer */}
                  <div 
                    style={{ background: shade.gradient }}
                    className="w-full aspect-[4/3] flex flex-col justify-end p-4 relative group"
                  >
                    {/* Shadow overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                    
                    <span 
                      style={{ color: shade.text, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                      className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] uppercase tracking-widest font-bold font-sans"
                    >
                      {shade.category}
                    </span>
                    
                    <span className="relative z-10 text-white font-mono font-bold text-2xl tracking-tight leading-none">
                      {shade.code}
                    </span>
                  </div>
                  
                  {/* Swatch Metadata */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-display text-sm font-semibold tracking-wide leading-snug line-clamp-1">
                        {shade.name}
                      </h4>
                      {(searchQuery || shade.brand) && (
                        <p className="text-[10px] text-gold uppercase tracking-wider font-sans mt-1">
                          {shade.brand || (activeBrand === 'igora' ? 'Igora Royal' : 'Yutika Professional')}
                        </p>
                      )}
                    </div>
                    <p className="text-muted text-xs leading-relaxed line-clamp-2 mt-2">
                      {shade.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {filteredShades.length === 0 && (
            <div className="text-center py-20 border border-border border-dashed rounded-xl">
              <Info className="mx-auto text-muted mb-4" size={32} />
              <p className="text-muted font-serif italic">No matching shades found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Shade Detail Modal */}
      <AnimatePresence>
        {selectedShade && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-gold/30 p-8 rounded-2xl shadow-2xl w-full max-w-md relative text-muted font-sans"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedShade(null)}
                className="absolute top-5 right-5 text-muted hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Large Color Swatch Preview */}
              <div 
                style={{ background: selectedShade.gradient }}
                className="w-full h-32 rounded-xl mb-6 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-mono text-3xl font-bold tracking-tight">
                  {selectedShade.code}
                </span>
                <span className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[10px] uppercase tracking-widest font-bold">
                  {selectedShade.category}
                </span>
              </div>

              <h3 className="text-2xl font-display text-white mb-2 leading-tight">
                {selectedShade.name}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] text-gold uppercase tracking-widest border border-gold/30 px-3 py-1 rounded-full font-semibold bg-gold/5">
                  Brand: {selectedShade.brand || (activeBrand === 'igora' ? 'Igora Royal' : 'Yutika Professional')}
                </span>
                <span className="text-[10px] text-gold uppercase tracking-widest border border-gold/30 px-3 py-1 rounded-full font-semibold bg-gold/5">
                  Shade Code: {selectedShade.code}
                </span>
              </div>

              <div className="space-y-4 text-sm leading-relaxed border-t border-border/50 pt-6">
                <div>
                  <h5 className="text-white font-display text-xs uppercase tracking-wider mb-1 text-gold">Formula Description</h5>
                  <p className="text-muted leading-relaxed">{selectedShade.desc}</p>
                </div>
                
                <div>
                  <h5 className="text-white font-display text-xs uppercase tracking-wider mb-1 text-gold">Recommended Bases</h5>
                  <p className="text-muted leading-relaxed">
                    {selectedShade.code.startsWith('12-') || selectedShade.code.startsWith('9.5-') || selectedShade.code === 'Ultra Blonde'
                      ? 'Pre-lightened / Blonde bases (Level 8 to 10).'
                      : selectedShade.code === '1' || selectedShade.code === '2' || selectedShade.code === '3' || selectedShade.code.startsWith('1-0') || selectedShade.code.startsWith('3-')
                        ? 'Suitable for all base levels (Level 1 to 7).'
                        : 'Suitable for medium-to-light bases (Level 4 to 8).'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <button
                  onClick={() => setSelectedShade(null)}
                  className="w-full py-3.5 border border-border hover:border-white rounded-full text-xs font-semibold uppercase tracking-widest text-muted hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleBookWithShade(selectedShade);
                    setSelectedShade(null);
                  }}
                  className="w-full py-3.5 bg-gold hover:brightness-110 rounded-full text-xs font-semibold uppercase tracking-widest text-bg transition-all hover:shadow-gold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar size={14} /> Book Colour
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}} />
    </>
  );
}
