'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number.')
    .max(15, 'Enter a valid phone number.'),
  email: z.string().email('Enter a valid email address.').optional().or(z.literal('')),
  message: z.string().min(5, 'Tell us a little about what you need.').max(600),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const SUPABASE_URL = 'https://eggtejmtahbcbhokgyll.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZ3Rlam10YWhiY2Job2tneWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzODg0NzMsImV4cCI6MjA5OTk2NDQ3M30.7EEwWnfKqQ8wvr3Fe4kKh-4dFFg-wqT3xdHKSnS6TVI';

    const fullMessage = `[WEBSITE INQUIRY] ${data.message}${data.email ? ` | Email: ${data.email}` : ''}`;
    const displayName = `${data.name} (${data.phone})`;

    try {
      // Direct Supabase insert into queue table (triggers real-time arrival in concierge webapp)
      await fetch(`${SUPABASE_URL}/rest/v1/queue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify([
          {
            customer_name: displayName,
            service_type: fullMessage,
            status: 'waiting'
          }
        ])
      });
    } catch (err) {
      console.warn('Inquiry Supabase insert notice:', err);
    }

    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          serviceCategory: 'Website Inquiry',
          service: data.message,
          notes: data.email ? `Email: ${data.email}` : undefined
        }),
      });
    } catch (err) {
      console.warn('Inquiry API route notice:', err);
    }

    setSubmitted(true);
    reset();
  };

  return (
    <div className="relative rounded-2xl border border-[#FACC15]/40 bg-[#0F172A] p-8 md:p-10 shadow-2xl">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 className="text-[#FACC15]" size={44} />
            <h3 className="mt-5 font-display text-2xl font-bold text-[#FACC15]">Message received</h3>
            <p className="mt-2 max-w-sm text-sm text-[#F8FAFC]/80 leading-relaxed">
              Thank you — our reception desk will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-[#FACC15] font-bold underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <h3 className="font-display text-2xl font-bold text-[#FACC15] border-b border-[#FACC15]/30 pb-3">
              Send a Message
            </h3>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#FACC15]">
                Full name
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full rounded-xl border border-[#FACC15]/40 bg-[#1E293B] px-4 py-3 text-[#F8FAFC] font-semibold outline-none transition-all focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15]"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400 font-bold">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#FACC15]">
                  Phone number
                </label>
                <input
                  id="phone"
                  {...register('phone')}
                  className="w-full rounded-xl border border-[#FACC15]/40 bg-[#1E293B] px-4 py-3 text-[#F8FAFC] font-semibold outline-none transition-all focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15]"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-400 font-bold">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#FACC15]">
                  Email (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full rounded-xl border border-[#FACC15]/40 bg-[#1E293B] px-4 py-3 text-[#F8FAFC] font-semibold outline-none transition-all focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15]"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400 font-bold">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-bold text-[#FACC15]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="w-full resize-none rounded-xl border border-[#FACC15]/40 bg-[#1E293B] px-4 py-3 text-[#F8FAFC] font-semibold outline-none transition-all focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15]"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400 font-bold">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-royal-gold w-full py-3.5 text-sm font-bold tracking-wide shadow-xl cursor-pointer"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
