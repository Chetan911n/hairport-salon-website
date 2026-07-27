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
    await new Promise((r) => setTimeout(r, 900));
    console.log('Contact form submission', data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="relative rounded-2xl border border-[#DDD4C6] bg-white p-8 md:p-10 shadow-card">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 className="text-[#A87444]" size={40} />
            <h3 className="mt-5 font-display text-2xl text-[#2B2B2B]">Message received</h3>
            <p className="mt-2 max-w-sm text-sm text-[#6E6A63]">
              Thank you — our team will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-[#A87444] font-semibold underline underline-offset-4"
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
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">
                Full name
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-medium outline-none transition-colors focus:border-[#A87444]"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-600 font-semibold">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">
                  Phone number
                </label>
                <input
                  id="phone"
                  {...register('phone')}
                  className="w-full rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-medium outline-none transition-colors focus:border-[#A87444]"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-semibold">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">
                  Email (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-medium outline-none transition-colors focus:border-[#A87444]"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-600 font-semibold">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#2B2B2B]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="w-full resize-none rounded-lg border border-[#DDD4C6] bg-[#F8F6F2] px-4 py-3 text-[#2B2B2B] font-medium outline-none transition-colors focus:border-[#A87444]"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-600 font-semibold">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-royal-gold w-full py-3.5 text-sm font-bold tracking-wide"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
