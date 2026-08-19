'use client';

/**
 * Hairport — Appointment Booking Form
 * -----------------------------------
 * Drop-in Next.js (App Router) client component, styled with Tailwind
 * using arbitrary-value colors so it doesn't depend on a custom theme
 * being registered in tailwind.config.js.
 *
 * Fonts load via next/font/google — no extra setup needed beyond having
 * `next` installed. If you'd rather use fonts already loaded in your
 * root layout, delete the three font consts below and the `${...}.variable`
 * classes on the outer <div>.
 */

import { useMemo, useState } from 'react';
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from 'next/font/google';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-display',
});
const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

const ENDPOINT = 'https://hairportsalon.com';

/* ---------------------------------- data --------------------------------- */

const SERVICE_CATEGORIES = [
  { id: 'hair', label: 'Hair', hint: 'Cuts & styling', example: 'e.g. Precision Cut' },
  { id: 'colour', label: 'Hair Colour', hint: 'Colour & gloss', example: 'e.g. Balayage' },
  { id: 'spa', label: 'Hair Spa', hint: 'Deep treatments', example: 'e.g. Restorative Ritual' },
  { id: 'skin', label: 'Skin', hint: 'Facials & care', example: 'e.g. Signature Facial' },
  { id: 'bridal', label: 'Bridal', hint: 'Full bridal party', example: 'e.g. Bridal Trial Run' },
];

const CATEGORY_ICON = {
  hair: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M20 5 8 15M8 9l12 10" />
    </svg>
  ),
  colour: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 3c3.5 4 5.5 7.4 5.5 10a5.5 5.5 0 1 1-11 0C6.5 10.4 8.5 7 12 3Z" />
    </svg>
  ),
  spa: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 21c4-2 6-5.5 6-9 0-2.5-1-4.5-2.5-6C14.5 7.5 13 9.5 13 12c0-3-1.5-6-4-8C7.5 6 6 9 6 12c0 3.5 2 7 6 9Z" />
    </svg>
  ),
  skin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" strokeLinecap="round" />
    </svg>
  ),
  bridal: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <path d="M12 3l2 4-2 2-2-2 2-4Z" />
      <path d="M6 21c0-5 2.5-8 6-8s6 3 6 8" />
    </svg>
  ),
};

/** Next 21 selectable days, starting today. */
function buildDateOptions() {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 21; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

/** 30-minute slots from 10:00 to 22:00 (last bookable start 21:30). */
function buildTimeSlots() {
  const slots = [];
  for (let mins = 10 * 60; mins < 22 * 60; mins += 30) {
    const h24 = Math.floor(mins / 60);
    const m = mins % 60;
    const suffix = h24 >= 12 ? 'PM' : 'AM';
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    slots.push({
      value: `${String(h24).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
      label: `${h12}:${String(m).padStart(2, '0')} ${suffix}`,
    });
  }
  return slots;
}

const WEEKDAY_FMT = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
const MONTH_FMT = new Intl.DateTimeFormat('en-US', { month: 'short' });

/* -------------------------------- component ------------------------------- */

export default function BookingForm() {
  const dateOptions = useMemo(buildDateOptions, []);
  const timeSlots = useMemo(buildTimeSlots, []);

  const [category, setCategory] = useState(null);
  const [subService, setSubService] = useState('');
  const [dateISO, setDateISO] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  function toISODate(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate()
    ).padStart(2, '0')}`;
  }

  function validate() {
    const next = {};
    if (!category) next.category = 'Choose a service category.';
    if (!subService.trim()) next.subService = 'Tell us which service you\u2019d like.';
    if (!dateISO) next.date = 'Pick a date.';
    if (!time) next.time = 'Pick a time.';
    if (!name.trim() || name.trim().length < 2) next.name = 'Enter your full name.';
    if (!/^[0-9+()\-\s]{7,15}$/.test(phone.trim())) next.phone = 'Enter a valid phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const payload = {
      category,
      subService: subService.trim(),
      date: dateISO,
      time,
      name: name.trim(),
      phone: phone.trim(),
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setStatus('success');
    } catch (err) {
      console.error('Booking submission failed:', err);
      setStatus('error');
    }
  }

  const selectedCategoryMeta = SERVICE_CATEGORIES.find((c) => c.id === category);

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} font-[family-name:var(--font-body)] bg-[#0D0D0C] text-[#EDE7DD]`}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto w-full max-w-2xl px-6 py-14 sm:px-10"
      >
        {/* Header */}
        <div className="mb-10 border-b border-[#2C2924] pb-8">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[#B08D57]">
            Hairport
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[#F4EFE7] sm:text-5xl">
            Reserve your appointment
          </h1>
          <p className="mt-3 text-sm text-[#9C9488]">
            Select a service, choose a time, and we\u2019ll confirm by phone.
          </p>
        </div>

        {/* Service category */}
        <fieldset className="mb-10">
          <legend className="mb-4 font-[family-name:var(--font-display)] text-xl text-[#F4EFE7]">
            01 &middot; Service category
          </legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_CATEGORIES.map((c) => {
              const Icon = CATEGORY_ICON[c.id];
              const active = category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  aria-pressed={active}
                  className={[
                    'group flex flex-col items-start gap-3 rounded-sm border px-4 py-4 text-left transition-colors duration-200',
                    active
                      ? 'border-[#B08D57] bg-[#171613]'
                      : 'border-[#2C2924] bg-[#111110] hover:border-[#4A443B]',
                  ].join(' ')}
                >
                  <Icon
                    className={active ? 'h-5 w-5 text-[#B08D57]' : 'h-5 w-5 text-[#9C9488]'}
                  />
                  <span>
                    <span className="block text-sm font-semibold text-[#F4EFE7]">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#9C9488]">{c.hint}</span>
                  </span>
                </button>
              );
            })}
          </div>
          {errors.category && (
            <p className="mt-2 text-xs text-[#C97B63]">{errors.category}</p>
          )}
        </fieldset>

        {/* Sub-service */}
        <div className="mb-10">
          <label
            htmlFor="subService"
            className="mb-3 block font-[family-name:var(--font-display)] text-xl text-[#F4EFE7]"
          >
            02 &middot; Which service
          </label>
          <input
            id="subService"
            type="text"
            value={subService}
            onChange={(e) => setSubService(e.target.value)}
            placeholder={selectedCategoryMeta?.example ?? 'e.g. Precision Cut, Balayage, Restorative Ritual'}
            className="w-full rounded-sm border border-[#2C2924] bg-[#111110] px-4 py-3 text-sm text-[#F4EFE7] placeholder:text-[#5C574C] outline-none transition-colors focus:border-[#B08D57]"
          />
          {errors.subService && (
            <p className="mt-2 text-xs text-[#C97B63]">{errors.subService}</p>
          )}
        </div>

        {/* Date */}
        <div className="mb-10">
          <p className="mb-3 font-[family-name:var(--font-display)] text-xl text-[#F4EFE7]">
            03 &middot; Date
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {dateOptions.map((d) => {
              const iso = toISODate(d);
              const active = dateISO === iso;
              return (
                <button
                  key={iso}
                  type="button"
                  onClick={() => setDateISO(iso)}
                  aria-pressed={active}
                  className={[
                    'flex min-w-[64px] flex-shrink-0 flex-col items-center gap-1.5 rounded-sm border px-3 py-3 transition-colors duration-200',
                    active
                      ? 'border-[#B08D57] bg-[#171613]'
                      : 'border-[#2C2924] bg-[#111110] hover:border-[#4A443B]',
                  ].join(' ')}
                >
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[#9C9488]">
                    {WEEKDAY_FMT.format(d)}
                  </span>
                  <span
                    className={[
                      'flex h-7 w-7 items-center justify-center rounded-full font-[family-name:var(--font-mono)] text-sm',
                      active ? 'bg-[#B08D57] text-[#0D0D0C]' : 'text-[#F4EFE7]',
                    ].join(' ')}
                  >
                    {d.getDate()}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#5C574C]">
                    {MONTH_FMT.format(d)}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.date && <p className="mt-2 text-xs text-[#C97B63]">{errors.date}</p>}
        </div>

        {/* Time slots */}
        <div className="mb-10">
          <p className="mb-3 font-[family-name:var(--font-display)] text-xl text-[#F4EFE7]">
            04 &middot; Time
          </p>
          <div className="rounded-sm border border-[#2C2924] bg-[#111110] p-3">
            <div className="grid grid-cols-3 gap-px bg-[#2C2924] sm:grid-cols-4">
              {timeSlots.map((slot) => {
                const active = time === slot.value;
                return (
                  <button
                    key={slot.value}
                    type="button"
                    onClick={() => setTime(slot.value)}
                    aria-pressed={active}
                    className={[
                      'relative bg-[#111110] px-2 py-2.5 font-[family-name:var(--font-mono)] text-xs transition-colors duration-150',
                      active ? 'bg-[#171613] text-[#F4EFE7]' : 'text-[#9C9488] hover:bg-[#15140F]',
                    ].join(' ')}
                  >
                    {active && (
                      <span className="absolute left-1.5 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#B08D57]" />
                    )}
                    <span className={active ? 'pl-2.5' : ''}>{slot.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          {errors.time && <p className="mt-2 text-xs text-[#C97B63]">{errors.time}</p>}
        </div>

        {/* Contact */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-3 block font-[family-name:var(--font-display)] text-xl text-[#F4EFE7]"
            >
              05 &middot; Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-sm border border-[#2C2924] bg-[#111110] px-4 py-3 text-sm text-[#F4EFE7] placeholder:text-[#5C574C] outline-none transition-colors focus:border-[#B08D57]"
            />
            {errors.name && <p className="mt-2 text-xs text-[#C97B63]">{errors.name}</p>}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-3 block font-[family-name:var(--font-display)] text-xl text-[#F4EFE7]"
            >
              &nbsp;&middot; Phone
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-sm border border-[#2C2924] bg-[#111110] px-4 py-3 text-sm text-[#F4EFE7] placeholder:text-[#5C574C] outline-none transition-colors focus:border-[#B08D57]"
            />
            {errors.phone && <p className="mt-2 text-xs text-[#C97B63]">{errors.phone}</p>}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-sm bg-[#B08D57] py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#0D0D0C] transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Reserving\u2026' : 'Confirm appointment'}
        </button>

        {status === 'success' && (
          <p className="mt-4 text-center text-sm text-[#8FAE8B]">
            Your appointment request has been sent. We\u2019ll confirm shortly by phone.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-sm text-[#C97B63]">
            Something went wrong sending your request. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
