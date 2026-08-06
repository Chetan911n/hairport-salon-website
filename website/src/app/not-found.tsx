import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-6 font-display text-5xl text-white md:text-7xl">
        This chair is <span className="gold-text italic">empty.</span>
      </h1>
      <p className="mt-6 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
        you back to somewhere familiar.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-bg transition-all hover:shadow-gold hover:brightness-110"
      >
        Return Home
      </Link>
    </section>
  );
}
