'use client';

import { useMemo, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { branches } from '@/data/site';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const detailsSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(10, 'Enter a valid phone number.').max(15),
  notes: z.string().max(300).optional(),
  colourNumber: z.string().max(100).optional(),
});
type Details = z.infer<typeof detailsSchema>;

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

const SERVICES_CONFIG = {
  Male: {
    Hair: [
      { name: "Haircut", description: "Precision haircut styled to your preference." },
      { name: "Global Colour", description: "Rich, seamless global hair colouring." },
      { name: "Highlights Colour", description: "Custom multi-tonal highlights & detailing." },
      { name: "Hair Spa", description: "Deep conditioning and scalp treatment." },
      { name: "Head Massage", description: "Relaxing head massage with premium oils." },
      { name: "Beard Style", description: "Beard shaping, line-up and styling." },
      { name: "Clean Shave", description: "Smooth clean shave with hot towel prep." },
      { name: "Hair Styling", description: "Professional hair styling and blow dry." }
    ],
    Skin: [
      { name: "Manicure", description: "Classic hand grooming, nail shaping & cuticle care." },
      { name: "Pedicure", description: "Relaxing foot soak, scrub and nail grooming." },
      { name: "Facial", description: "Deep skin cleansing and moisturizing treatment." },
      { name: "Cleanup", description: "Quick exfoliation and hydration cleanup." },
      { name: "Face Massage", description: "Gentle facial massage to boost blood flow." }
    ],
    Waxing: [
      { name: "Chest Wax", description: "Smooth, clean chest waxing." },
      { name: "Back Wax", description: "Clean back waxing." },
      { name: "Full Arms Wax", description: "Waxing for smooth full arms." },
      { name: "Full Legs Wax", description: "Waxing for smooth full legs." },
      { name: "Underarms Wax", description: "Quick underarms waxing." },
      { name: "Rica Wax (Arms/Legs)", description: "Premium Rica wax for sensitive skin." }
    ]
  },
  Female: {
    Hair: [
      { name: "Haircut", description: "Women's wash, cut and custom style finish." },
      { name: "Hair Spa", description: "Restorative deep conditioning treatment for hair strength." },
      { name: "Global Colour", description: "Professional global hair colouring." },
      { name: "Highlights Colour", description: "Premium multi-tonal highlight detailing." },
      { name: "Root Touch Up", description: "Quick grey coverage and root refresh." },
      { name: "Oil Massage", description: "Therapeutic hot oil head massage." },
      { name: "Hair Fall Treatment", description: "Targeted therapy to reduce hair fall and strengthen roots." }
    ],
    Skin: [
      { name: "Threading", description: "Eyebrow, upper lip or full face threading." },
      { name: "Facial", description: "Customized luxurious skin facial therapy." },
      { name: "Clean Up", description: "Refreshing facial exfoliation and pack." },
      { name: "Regular Pedicure & Spa", description: "Complete foot exfoliation, massage and spa mask." },
      { name: "Bleach & D-Tan", description: "Quick skin brightening and tan removal." }
    ],
    Waxing: [
      { name: "Regular Wax", description: "Standard waxing for smooth skin." },
      { name: "Rica Wax", description: "Premium, gentle Rica wax treatment." },
      { name: "Hard Wax", description: "Painless hard waxing for sensitive areas." },
      { name: "Roll-On Wax", description: "Mess-free, efficient cartridge waxing." },
      { name: "Full Arms Wax", description: "Full arms waxing." },
      { name: "Full Legs Wax", description: "Full legs waxing." },
      { name: "Underarms Wax", description: "Quick underarms waxing." },
      { name: "Half Arms Wax", description: "Half arms waxing." },
      { name: "Half Legs Wax", description: "Half legs waxing." },
      { name: "Full Body Wax", description: "Full body waxing for ultimate smoothness." },
      { name: "Face Waxing", description: "Gentle waxing for facial areas." }
    ]
  }
};

function buildCalendarDays(monthOffset: number) {
  const base = new Date();
  base.setMonth(base.getMonth() + monthOffset);
  const year = base.getFullYear();
  const month = base.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstDay.getDay();
  const days: (Date | null)[] = Array(startWeekday).fill(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
  return { days, label: base.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }) };
}

const steps = ['Service', 'Date & Time', 'Your Details', 'Confirm'];

export default function BookingFlow() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('preselectedService');
  const preselectedShade = searchParams.get('shade');

  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [serviceCategory, setServiceCategory] = useState<"Hair" | "Skin" | "Waxing">("Hair");
  const [service, setService] = useState<string | null>(null);
  const [branchId, setBranchId] = useState<string | null>('nashik-road');
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [details, setDetails] = useState<Details | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { days, label } = useMemo(() => buildCalendarDays(monthOffset), [monthOffset]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Details>({ resolver: zodResolver(detailsSchema) });

  // Handle pre-selected service & shade from Colour Guide
  useEffect(() => {
    if (preselectedService === 'Hair Colour') {
      setGender('Female'); // Default to female or male, let's keep gender selector open
      setServiceCategory('Hair');
      setService('Global Colour');
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedShade) {
      setValue('notes', `Requested Shade: ${preselectedShade}`);
    }
  }, [preselectedShade, setValue]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const canProceed =
    (step === 0 && service) ||
    (step === 1 && selectedDate && selectedTime) ||
    step === 2 ||
    step === 3;

  const handleConfirm = async () => {
    if (!service || !branchId || !selectedDate || !selectedTime || !details) return;
    setSubmitting(true);
    try {
      const formattedDate = selectedDate.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      const appointmentTime = `${formattedDate} at ${selectedTime}`;
      const webBookingId = `#W${Math.floor(100 + Math.random() * 900)}`;

      let parsedColour = details.colourNumber || "";
      if (!parsedColour && details.notes && details.notes.includes("Requested Shade:")) {
        parsedColour = details.notes.split("Requested Shade:")[1]?.trim() || "";
      }

      await addDoc(collection(db, "tickets"), {
        id: webBookingId,
        customerName: details.name,
        phone: details.phone,
        serviceType: service,
        colourNumber: parsedColour,
        gender: gender,
        serviceCategory: serviceCategory,
        status: "Waiting",
        appointmentTime: appointmentTime,
        notes: details.notes || "",
        timestamp: serverTimestamp()
      });
      setConfirmed(true);
    } catch (err) {
      console.error("Failed to book appointment:", err);
      alert("Failed to submit booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmed) {
    const branch = branches.find((b) => b.id === branchId);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-lg rounded-2xl border border-gold/30 bg-card p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-gold" size={48} />
        <h2 className="mt-6 font-display text-3xl text-white">Appointment requested</h2>
        <p className="mt-3 text-muted">
          Your booking request has been sent! The staff has received your details in the active salon queue.
        </p>
        <div className="mt-8 space-y-2 rounded-xl border border-border bg-bg/40 p-6 text-left text-sm text-muted">
          <p><span className="text-white">Service:</span> {gender} - {serviceCategory} - {service}</p>
          <p><span className="text-white">Branch:</span> {branch?.name}</p>
          <p><span className="text-white">Date:</span> {selectedDate?.toDateString()}</p>
          <p><span className="text-white">Time:</span> {selectedTime}</p>
          <p><span className="text-white">Name:</span> {details?.name}</p>
          <p><span className="text-white">Phone:</span> {details?.phone}</p>
          {details?.notes && <p><span className="text-white">Notes:</span> {details.notes}</p>}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Step indicator */}
      <div className="mb-10 flex items-center justify-between gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-colors ${
                i <= step ? 'border-gold bg-gold text-bg' : 'border-border text-muted'
              }`}
            >
              {i + 1}
            </div>
            <p className={`mt-2 hidden text-center text-[11px] sm:block ${i === step ? 'text-gold' : 'text-muted'}`}>
              {s}
            </p>
          </div>
        ))}
      </div>

      <div className="min-h-[360px] rounded-2xl border border-border bg-card p-6 md:p-10">
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
                <h2 className="font-display text-2xl text-white mb-6">Choose gender &amp; service section</h2>
                
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
                      className={`flex-1 rounded-xl border py-3 text-center transition-all cursor-pointer font-medium ${
                        gender === g ? 'border-gold bg-gold/10 text-white' : 'border-border text-muted hover:border-gold/40'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                {/* Service Category selector */}
                <div className="mt-4 flex gap-3">
                  {(["Hair", "Skin", "Waxing"] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setServiceCategory(cat);
                        setService(null);
                      }}
                      className={`flex-1 rounded-xl border py-3 text-center transition-all cursor-pointer font-medium ${
                        serviceCategory === cat ? 'border-gold bg-gold/10 text-white' : 'border-border text-muted hover:border-gold/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <h3 className="mt-8 font-display text-lg text-white border-b border-border pb-2">Select a treatment</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SERVICES_CONFIG[gender][serviceCategory].map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setService(s.name)}
                      className={`rounded-xl border p-4 text-left transition-all cursor-pointer ${
                        service === s.name ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/40'
                      }`}
                    >
                      <p className="text-white font-medium">{s.name}</p>
                      <p className="mt-1 text-xs text-muted leading-relaxed">{s.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl text-white">Pick date &amp; time</h2>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={() => setMonthOffset((m) => Math.max(0, m - 1))} aria-label="Previous month" className="text-muted hover:text-gold cursor-pointer">
                    <ChevronLeft />
                  </button>
                  <p className="text-white">{label}</p>
                  <button onClick={() => setMonthOffset((m) => m + 1)} aria-label="Next month" className="text-muted hover:text-gold cursor-pointer">
                    <ChevronRight />
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-xs text-muted">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i}>{d}</span>)}
                  {days.map((d, i) => {
                    const isPast = d ? d < today : false;
                    const isSelected = d && selectedDate && d.toDateString() === selectedDate.toDateString();
                    return (
                      <button
                        key={i}
                        disabled={!d || isPast}
                        onClick={() => d && setSelectedDate(d)}
                        className={`aspect-square rounded-lg text-sm transition-colors cursor-pointer ${
                          !d ? 'invisible' : isPast ? 'text-muted/30 cursor-not-allowed' : isSelected ? 'bg-gold text-bg' : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {d?.getDate()}
                      </button>
                    );
                  })}
                </div>

                {selectedDate && (
                  <div className="mt-8">
                    <p className="mb-3 text-sm text-muted">Available times</p>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`rounded-lg border py-2 text-xs transition-colors cursor-pointer ${
                            selectedTime === t ? 'border-gold bg-gold text-bg' : 'border-border text-muted hover:border-gold/40'
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
                <h2 className="font-display text-2xl text-white">Your details</h2>
                <div>
                  <label htmlFor="b-name" className="mb-2 block text-sm text-muted">Full name</label>
                  <input id="b-name" {...register('name')} className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-white outline-none focus:border-gold" />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="b-phone" className="mb-2 block text-sm text-muted">Phone number</label>
                  <input id="b-phone" {...register('phone')} className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-white outline-none focus:border-gold" />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="b-notes" className="mb-2 block text-sm text-muted">Notes (optional)</label>
                  <textarea id="b-notes" rows={3} {...register('notes')} className="w-full resize-none rounded-lg border border-border bg-transparent px-4 py-3 text-white outline-none focus:border-gold" />
                </div>
                {(service?.toLowerCase().includes("colour") || 
                  service?.toLowerCase().includes("highlights") || 
                  service?.toLowerCase().includes("touch up")) && (
                  <div>
                    <label htmlFor="b-colour" className="mb-2 block text-sm text-muted">Hair Colour Number / Shade (optional)</label>
                    <input id="b-colour" {...register('colourNumber')} placeholder="e.g. Igora 5-0, Yutika 4.0" className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-white outline-none focus:border-gold" />
                  </div>
                )}
                <button type="submit" className="w-full rounded-full bg-gold py-3.5 text-sm font-medium text-bg transition-all hover:shadow-gold hover:brightness-110 cursor-pointer">
                  Review Booking
                </button>
              </form>
            )}

            {step === 3 && details && (
              <div>
                <h2 className="font-display text-2xl text-white">Review &amp; confirm</h2>
                <div className="mt-6 space-y-2 rounded-xl border border-border bg-bg/40 p-6 text-sm text-muted">
                  <p><span className="text-white font-medium">Service:</span> {gender} - {serviceCategory} - {service}</p>
                  <p><span className="text-white font-medium">Branch:</span> {branches.find((b) => b.id === branchId)?.name}</p>
                  <p><span className="text-white font-medium">Date:</span> {selectedDate?.toDateString()}</p>
                  <p><span className="text-white font-medium">Time:</span> {selectedTime}</p>
                  <p><span className="text-white font-medium">Name:</span> {details.name}</p>
                  <p><span className="text-white font-medium">Phone:</span> {details.phone}</p>
                  {details.notes && <p><span className="text-white font-medium">Notes:</span> {details.notes}</p>}
                  {details.colourNumber && <p><span className="text-white font-medium">Colour Number:</span> {details.colourNumber}</p>}
                </div>
                <button
                  onClick={handleConfirm}
                  disabled={submitting}
                  className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-medium text-bg transition-all hover:shadow-gold hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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
            className={`text-sm text-muted hover:text-white cursor-pointer ${step === 0 ? 'invisible' : ''}`}
          >
            Back
          </button>
          {step !== 2 && (
            <button
              onClick={() => canProceed && setStep((s) => s + 1)}
              disabled={!canProceed}
              className="rounded-full border border-gold px-6 py-2.5 text-sm text-gold transition-all hover:bg-gold hover:text-bg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gold cursor-pointer"
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}
