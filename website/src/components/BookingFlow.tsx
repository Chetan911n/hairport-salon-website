'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { branches } from '@/data/site';

const steps = ['Service', 'Date & time', 'Your info', 'Confirm'];

export const SERVICES_CONFIG = {
  Male: {
    Hair: [
      { name: 'Classic Haircut & Fade', description: 'Precision scissor and clipper cut tailored to your head shape, finished with styling & hot towel.' },
      { name: 'Hair Wash & Styling', description: 'Relaxing scalp wash, hair conditioning and professional blowout styling.' },
      { name: 'Hair Colour', description: 'Premium ammonia-free hair colouring for natural grey coverage or custom shades.' },
    ],
    Skin: [
      { name: 'Face Scrub', description: 'Exfoliating face scrub to remove dead skin cells and unclog pores.' },
      { name: 'Deep Cleansing', description: 'Deep skin cleansing therapy for clear, oil-free, revitalized skin.' },
      { name: 'Skin De-Tan', description: 'Targeted tan removal and skin lightening treatment.' },
      { name: 'Face Steam', description: 'Soothing face steam treatment with warm towel pore relaxation.' },
    ],
    Treatments: [
      { name: 'Blue Tox Treatment', description: 'Advanced Bluetox hair therapy for deep restructuring, frizz elimination, and intense shine.' },
      { name: 'Nano Plastia Treatment', description: 'Nanoplastia organic smoothing and hair alignment therapy.' },
      { name: 'Smoothing Treatment', description: 'Long-lasting hair smoothing and silk alignment.' },
      { name: 'Keratin Treatment', description: 'Protein-infused Keratin therapy for smooth, frizz-free, manageable hair.' },
      { name: 'Perming Treatment', description: 'Professional texturizing perm for long-lasting curls and volume.' },
    ],
    Waxing: [
      { name: 'Ear & Nose Waxing', description: 'Gentle, quick hair removal for ears and nostrils.' },
      { name: 'Eyebrow Shaping', description: 'Precision threading or wax shaping for clean eyebrow contours.' },
    ]
  },
  Female: {
    Hair: [
      { name: 'Hair Styling', description: 'Professional hair blowout, iron curls, or occasion styling.' },
      { name: 'Hair Wash & Conditioning', description: 'Restorative scalp wash, deep conditioning massage, and hair dry.' },
    ],
    Treatments: [
      { name: 'Blue Tox Treatment', description: 'Advanced Bluetox hair therapy for deep restructuring, frizz elimination, and intense shine.' },
      { name: 'Nano Plastia Treatment', description: 'Nanoplastia organic smoothing and hair alignment therapy.' },
      { name: 'Smoothing Treatment', description: 'Long-lasting hair smoothing and silk alignment.' },
      { name: 'Keratin Treatment', description: 'Protein-infused Keratin therapy for smooth, frizz-free, manageable hair.' },
      { name: 'Perming Treatment', description: 'Professional texturizing perm for long-lasting curls and volume.' },
    ],
    Skin: [
      { name: 'Face Scrub & Exfoliation', description: 'Gentle facial scrub to smooth texture and enhance skin glow.' },
      { name: 'Deep Cleansing Facial', description: 'Custom deep cleansing therapy for radiant, hydrated skin.' },
      { name: 'Skin De-Tan Pack', description: 'Specialized de-tan formula for sun tan removal and bright complexion.' },
      { name: 'Face Steam Therapy', description: 'Herbal facial steam and essential oil misting.' },
    ],
    Waxing: [
      { name: 'Full Face Threading/Waxing', description: 'Soft, gentle hair removal for upper lip, chin, and sideburns.' },
      { name: 'Arm & Leg Waxing', description: 'Smooth, soothing waxing treatment with post-wax skin lotion.' },
    ]
  }
};

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number.')
    .max(15, 'Enter a valid phone number.'),
  notes: z.string().max(400).optional(),
  colourNumber: z.string().max(100).optional(),
});

type FormValues = z.infer<typeof schema>;

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days: (Date | null)[] = [];
  const startDay = date.getDay();

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
];

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [serviceCategory, setServiceCategory] = useState<'Hair' | 'Skin' | 'Treatments' | 'Waxing'>('Hair');
  const [branchId] = useState('nashik-road');
  const [service, setService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [details, setDetails] = useState<FormValues | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const now = new Date();
  const currentMonth = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const days = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const label = `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const canProceed =
    (step === 0 && service) ||
    (step === 1 && selectedDate && selectedTime) ||
    (step === 2 && details) ||
    step === 3;

  const handleConfirm = async () => {
    setSubmitting(true);

    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gender,
          serviceCategory,
          service,
          branchId,
          date: selectedDate?.toISOString(),
          time: selectedTime,
          name: details?.name,
          phone: details?.phone,
          notes: details?.notes,
          colourNumber: details?.colourNumber,
        }),
      });
    } catch (err) {
      console.warn('Booking API notice:', err);
    } finally {
      setConfirmed(true);
      setSubmitting(false);

      // Trigger WhatsApp booking confirmation to reception
      const text = `Hi THE HAIRPORT Nashik Road, I would like to reserve a chair:\n\n👤 Name: ${details?.name}\n📞 Phone: ${details?.phone}\n✂️ Service: ${gender} - ${serviceCategory} - ${service}\n📅 Date: ${selectedDate?.toDateString()}\n⏰ Time: ${selectedTime}${details?.notes ? `\n📝 Notes: ${details.notes}` : ''}`;
      const waUrl = `https://wa.me/919922338669?text=${encodeURIComponent(text)}`;
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);
    }
  };

  if (confirmed) {
    const branch = branches.find((b) => b.id === branchId);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-lg rounded-2xl border border-[#DDD4C6] bg-white p-10 text-center shadow-card text-black"
      >
        <CheckCircle2 className="mx-auto text-[#A87444]" size={48} />
        <h2 className="mt-6 font-display text-3xl font-bold text-[#2B2B2B]">Appointment requested</h2>
        <p className="mt-3 text-sm text-[#6E6A63] leading-relaxed">
          Your booking request has been sent! The staff has received your details in the active salon queue.
        </p>
        <div className="mt-8 space-y-2.5 rounded-xl border border-[#DDD4C6] bg-[#F8F6F2] p-6 text-left text-sm text-[#2B2B2B]">
          <p><span className="font-bold text-[#A87444]">Service:</span> {gender} - {serviceCategory} - {service}</p>
          <p><span className="font-bold text-[#A87444]">Branch:</span> {branch?.name}</p>
          <p><span className="font-bold text-[#A87444]">Date:</span> {selectedDate?.toDateString()}</p>
          <p><span className="font-bold text-[#A87444]">Time:</span> {selectedTime}</p>
          <p><span className="font-bold text-[#A87444]">Name:</span> {details?.name}</p>
          <p><span className="font-bold text-[#A87444]">Phone:</span> {details?.phone}</p>
          {details?.notes && <p><span className="font-bold text-[#A87444]">Notes:</span> {details.notes}</p>}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl text-black">
      {/* Step indicator */}
      <div className="mb-10 flex items-center justify-between gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
                i <= step ? 'border-[#A87444] bg-[#A87444] text-white shadow-subtle' : 'border-[#DDD4C6] bg-white text-[#6E6A63]'
              }`}
            >
              {i + 1}
            </div>
            <p className={`mt-2 hidden text-center text-xs font-bold sm:block ${i === step ? 'text-[#A87444]' : 'text-[#6E6A63]'}`}>
              {s}
            </p>
          </div>
        ))}
      </div>

      <div className="min-h-[360px] rounded-2xl border border-[#DDD4C6] bg-white p-6 md:p-10 shadow-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            {step === 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-[#2B2B2B] mb-6">Choose gender &amp; service section</h2>
                
                {/* Gender selector */}
                <div className="flex gap-3">
                  {(["Male", "Female"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => {
                        setGender(g);
                        setService(null);
                      }}
                      className={`flex-1 rounded-xl border py-3 text-center transition-all cursor-pointer font-bold ${
                        gender === g ? 'border-[#A87444] bg-[#A87444] text-white shadow-subtle' : 'border-[#DDD4C6] bg-[#F8F6F2] text-[#2B2B2B] hover:border-[#A87444]'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                {/* Service Category selector */}
                <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                  {(["Hair", "Skin", "Treatments", "Waxing"] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setServiceCategory(cat);
                        setService(null);
                      }}
                      className={`flex-1 min-w-[100px] rounded-xl border py-2.5 px-3 text-center transition-all cursor-pointer font-bold text-xs sm:text-sm ${
                        serviceCategory === cat ? 'border-[#A87444] bg-[#A87444] text-white shadow-subtle' : 'border-[#DDD4C6] bg-[#F8F6F2] text-[#2B2B2B] hover:border-[#A87444]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <h3 className="mt-8 font-display text-lg font-bold text-[#2B2B2B] border-b border-[#DDD4C6] pb-2">Select a treatment</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SERVICES_CONFIG[gender][serviceCategory]?.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setService(s.name)}
                      className={`rounded-xl border p-4 text-left transition-all cursor-pointer ${
                        service === s.name ? 'border-[#A87444] bg-[#EFE8DE]/80 shadow-subtle' : 'border-[#DDD4C6] bg-[#F8F6F2] hover:border-[#A87444]'
                      }`}
                    >
                      <p className="text-[#2B2B2B] font-bold">{s.name}</p>
                      <p className="mt-1 text-xs text-[#6E6A63] leading-relaxed font-medium">{s.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-[#2B2B2B]">Pick date &amp; time</h2>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={() => setMonthOffset((m) => Math.max(0, m - 1))} aria-label="Previous month" className="text-[#2B2B2B] hover:text-[#A87444] cursor-pointer">
                    <ChevronLeft size={24} />
                  </button>
                  <p className="text-[#2B2B2B] font-bold text-lg">{label}</p>
                  <button onClick={() => setMonthOffset((m) => m + 1)} aria-label="Next month" className="text-[#2B2B2B] hover:text-[#A87444] cursor-pointer">
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-xs font-bold text-[#A87444]">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i}>{d}</span>)}
                  {days.map((d, i) => {
                    const isPast = d ? d < today : false;
                    const isSelected = d && selectedDate && d.toDateString() === selectedDate.toDateString();
                    return (
                      <button
                        key={i}
                        disabled={!d || isPast}
                        onClick={() => d && setSelectedDate(d)}
                        className={`aspect-square rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                          !d ? 'invisible' : isPast ? 'text-[#DDD4C6] cursor-not-allowed' : isSelected ? 'bg-[#A87444] text-white shadow-subtle' : 'text-[#2B2B2B] hover:bg-[#EFE8DE]'
                        }`}
                      >
                        {d?.getDate()}
                      </button>
                    );
                  })}
                </div>

                {selectedDate && (
                  <div className="mt-8">
                    <p className="mb-3 text-sm font-bold text-[#2B2B2B]">Available times</p>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`rounded-lg border py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                            selectedTime === t ? 'border-[#A87444] bg-[#A87444] text-white shadow-subtle' : 'border-[#DDD4C6] bg-[#F8F6F2] text-[#2B2B2B] hover:border-[#A87444]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <form
                onSubmit={handleSubmit((data) => {
                  setDetails(data);
                  setStep(3);
                })}
                className="space-y-5"
                noValidate
              >
                <h2 className="font-display text-2xl font-bold text-[#2B2B2B]">Your details</h2>
                <div>
                  <label htmlFor="b-name" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">Full name</label>
                  <input id="b-name" {...register('name')} className="w-full rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-semibold outline-none focus:border-[#A87444]" />
                  {errors.name && <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="b-phone" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">Phone number</label>
                  <input id="b-phone" {...register('phone')} className="w-full rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-semibold outline-none focus:border-[#A87444]" />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-600 font-semibold">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="b-notes" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">Notes (optional)</label>
                  <textarea id="b-notes" rows={3} {...register('notes')} className="w-full resize-none rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-medium outline-none focus:border-[#A87444]" />
                </div>
                {(service?.toLowerCase().includes("colour") || 
                  service?.toLowerCase().includes("highlights") || 
                  service?.toLowerCase().includes("touch up")) && (
                  <div>
                    <label htmlFor="b-colour" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">Hair Colour Number / Shade (optional)</label>
                    <input id="b-colour" {...register('colourNumber')} placeholder="e.g. Igora 5-0, Yutika 4.0" className="w-full rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-semibold outline-none focus:border-[#A87444]" />
                  </div>
                )}
                <button type="submit" className="btn-royal-gold w-full py-3.5 text-sm font-bold cursor-pointer">
                  Review Booking
                </button>
              </form>
            )}

            {step === 3 && details && (
              <div>
                <h2 className="font-display text-2xl font-bold text-[#2B2B2B]">Review &amp; confirm</h2>
                <div className="mt-6 space-y-2.5 rounded-xl border border-[#DDD4C6] bg-[#F8F6F2] p-6 text-sm text-[#2B2B2B]">
                  <p><span className="font-bold text-[#A87444]">Service:</span> {gender} - {serviceCategory} - {service}</p>
                  <p><span className="font-bold text-[#A87444]">Branch:</span> {branches.find((b) => b.id === branchId)?.name}</p>
                  <p><span className="font-bold text-[#A87444]">Date:</span> {selectedDate?.toDateString()}</p>
                  <p><span className="font-bold text-[#A87444]">Time:</span> {selectedTime}</p>
                  <p><span className="font-bold text-[#A87444]">Name:</span> {details.name}</p>
                  <p><span className="font-bold text-[#A87444]">Phone:</span> {details.phone}</p>
                  {details.notes && <p><span className="font-bold text-[#A87444]">Notes:</span> {details.notes}</p>}
                  {details.colourNumber && <p><span className="font-bold text-[#A87444]">Colour Number:</span> {details.colourNumber}</p>}
                </div>
                <button
                  onClick={handleConfirm}
                  disabled={submitting}
                  className="btn-royal-gold mt-6 w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {submitting ? 'Submitting...' : 'Confirm Appointment'}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {step < 3 && (
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={`text-sm font-bold text-[#A87444] hover:underline cursor-pointer ${step === 0 ? 'invisible' : ''}`}
          >
            Back
          </button>
          {step !== 2 && (
            <button
              onClick={() => canProceed && setStep((s) => s + 1)}
              disabled={!canProceed}
              className="btn-royal-gold px-7 py-2.5 text-xs font-bold disabled:opacity-40 cursor-pointer"
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}
