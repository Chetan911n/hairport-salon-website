'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { branches, serviceCategories } from '@/data/site';

const detailsSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(10, 'Enter a valid phone number.').max(15),
  notes: z.string().max(300).optional(),
});
type Details = z.infer<typeof detailsSchema>;

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

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

const steps = ['Service', 'Branch', 'Date & Time', 'Your Details', 'Confirm'];

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [branchId, setBranchId] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [details, setDetails] = useState<Details | null>(null);

  const { days, label } = useMemo(() => buildCalendarDays(monthOffset), [monthOffset]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Details>({ resolver: zodResolver(detailsSchema) });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const canProceed =
    (step === 0 && service) ||
    (step === 1 && branchId) ||
    (step === 2 && selectedDate && selectedTime) ||
    step === 3 ||
    step === 4;

  if (confirmed) {
    const branch = branches.find((b) => b.id === branchId);
    const svc = serviceCategories.find((s) => s.slug === service);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-lg rounded-2xl border border-gold/30 bg-card p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-gold" size={48} />
        <h2 className="mt-6 font-display text-3xl text-white">Appointment requested</h2>
        <p className="mt-3 text-muted">
          We&apos;ve noted your preferred slot below. This is a request, not yet
          a confirmed booking — connect this flow to a real scheduling
          backend before launch to guarantee slots automatically.
        </p>
        <div className="mt-8 space-y-2 rounded-xl border border-border bg-bg/40 p-6 text-left text-sm text-muted">
          <p><span className="text-white">Service:</span> {svc?.title}</p>
          <p><span className="text-white">Branch:</span> {branch?.name}</p>
          <p><span className="text-white">Date:</span> {selectedDate?.toDateString()}</p>
          <p><span className="text-white">Time:</span> {selectedTime}</p>
          <p><span className="text-white">Name:</span> {details?.name}</p>
          <p><span className="text-white">Phone:</span> {details?.phone}</p>
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
            <p className={`mt-2 hidden text-center text-[11px] sm:block ${i === step ? 'text-white' : 'text-muted'}`}>
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
                <h2 className="font-display text-2xl text-white">Choose a service</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {serviceCategories.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => setService(s.slug)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        service === s.slug ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/40'
                      }`}
                    >
                      <p className="text-white">{s.title}</p>
                      <p className="mt-1 text-xs text-muted">{s.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl text-white">Choose a branch</h2>
                <div className="mt-6 space-y-3">
                  {branches.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBranchId(b.id)}
                      className={`w-full rounded-xl border p-4 text-left transition-all ${
                        branchId === b.id ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/40'
                      }`}
                    >
                      <p className="text-white">
                        {b.name} {b.status === 'placeholder' && <span className="text-xs text-gold">(placeholder)</span>}
                      </p>
                      <p className="mt-1 text-xs text-muted">{b.address}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl text-white">Pick date &amp; time</h2>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={() => setMonthOffset((m) => Math.max(0, m - 1))} aria-label="Previous month" className="text-muted hover:text-gold">
                    <ChevronLeft />
                  </button>
                  <p className="text-white">{label}</p>
                  <button onClick={() => setMonthOffset((m) => m + 1)} aria-label="Next month" className="text-muted hover:text-gold">
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
                        className={`aspect-square rounded-lg text-sm transition-colors ${
                          !d ? 'invisible' : isPast ? 'text-muted/30' : isSelected ? 'bg-gold text-bg' : 'text-white hover:bg-white/10'
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
                          className={`rounded-lg border py-2 text-xs transition-colors ${
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

            {step === 3 && (
              <form
                onSubmit={handleSubmit((data) => {
                  setDetails(data);
                  setStep(4);
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
                <button type="submit" className="w-full rounded-full bg-gold py-3.5 text-sm font-medium text-bg transition-all hover:shadow-gold hover:brightness-110">
                  Review Booking
                </button>
              </form>
            )}

            {step === 4 && details && (
              <div>
                <h2 className="font-display text-2xl text-white">Review &amp; confirm</h2>
                <div className="mt-6 space-y-2 rounded-xl border border-border bg-bg/40 p-6 text-sm text-muted">
                  <p><span className="text-white">Service:</span> {serviceCategories.find((s) => s.slug === service)?.title}</p>
                  <p><span className="text-white">Branch:</span> {branches.find((b) => b.id === branchId)?.name}</p>
                  <p><span className="text-white">Date:</span> {selectedDate?.toDateString()}</p>
                  <p><span className="text-white">Time:</span> {selectedTime}</p>
                  <p><span className="text-white">Name:</span> {details.name}</p>
                  <p><span className="text-white">Phone:</span> {details.phone}</p>
                </div>
                <button
                  onClick={() => setConfirmed(true)}
                  className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-medium text-bg transition-all hover:shadow-gold hover:brightness-110"
                >
                  Confirm Appointment
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {step < 4 && (
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={`text-sm text-muted hover:text-white ${step === 0 ? 'invisible' : ''}`}
          >
            Back
          </button>
          {step !== 3 && (
            <button
              onClick={() => canProceed && setStep((s) => s + 1)}
              disabled={!canProceed}
              className="rounded-full border border-gold px-6 py-2.5 text-sm text-gold transition-all hover:bg-gold hover:text-bg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gold"
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}
