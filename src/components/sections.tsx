import { Link } from "react-router-dom";
import { Reveal } from "./ui";

export function PageHero({ eyebrow, title, sub, img }: { eyebrow: string; title: string; sub: string; img: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <img src={img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
      <div className="absolute inset-0 hero-grid" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-20 text-center">
        <Reveal>
          <p className="text-gold-300 text-[11px] font-bold tracking-[0.3em] uppercase">{eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05]">{title}</h1>
          <div className="gold-line w-40 mx-auto mt-6" />
          <p className="text-white/70 max-w-2xl mx-auto mt-6 leading-relaxed">{sub}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/contact" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-extrabold text-[12.5px] tracking-[0.14em] px-7 py-3.5 rounded-full">PLAN YOUR TRIP</Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-white/25 text-white font-bold text-[12.5px] tracking-[0.14em] px-7 py-3.5 rounded-full hover:bg-white/10 transition">OUR SERVICES</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <img src="/images/planning.jpg" alt="Airplane wing above the clouds" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-royal-700/60" />
      <div className="absolute inset-0 hero-grid" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-24 text-center">
        <Reveal>
          <p className="text-gold-300 text-[11px] font-bold tracking-[0.3em] uppercase">Your journey starts here</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4 leading-tight">READY TO START <span className="gold-text">YOUR JOURNEY?</span></h2>
          <p className="text-white/70 mt-5 max-w-xl mx-auto leading-relaxed">Let 23Konekt Tours &amp; Travel take care of the details while you focus on the experience.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/contact" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-extrabold text-[13px] tracking-[0.16em] px-9 py-4 rounded-full shadow-[0_16px_40px_-10px_rgba(201,162,39,0.8)] hover:-translate-y-0.5 transition-all">START PLANNING</Link>
            <a href="https://wa.me/256781387943?text=Hello%2023Konekt!%20I%27d%20like%20to%20start%20planning%20my%20journey." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/25 text-white font-bold text-[13px] tracking-[0.14em] px-8 py-4 rounded-full hover:bg-white/10 transition">WHATSAPP US</a>
          </div>
          <p className="mt-8 text-[11px] font-bold tracking-[0.28em] text-white/40">ANY DESTINATION. ANY PURPOSE. ONE TRUSTED PARTNER — 23KONEKT.</p>
        </Reveal>
      </div>
    </section>
  );
}
