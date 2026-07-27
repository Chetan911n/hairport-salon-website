import Reveal from './Reveal';

export default function PageHeader({
  eyebrow,
  title,
  goldWord,
  description,
}: {
  eyebrow: string;
  title: string;
  goldWord?: string;
  description?: string;
}) {
  return (
    <section className="border-b border-[#DDD4C6] bg-[#F8F6F2] pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="container-luxury">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-[#2B2B2B] md:text-6xl">
            {title} {goldWord && <span className="text-[#A87444] italic font-serif">{goldWord}</span>}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#2B2B2B] font-medium md:text-lg">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
