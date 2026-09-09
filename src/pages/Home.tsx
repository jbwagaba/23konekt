import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Stamp, FileCheck2, FolderCheck, Plane, CarFront, ShieldCheck,
  ArrowRight, ArrowUpRight, Palmtree, Briefcase, GraduationCap,
  BadgeCheck, Route, HeartHandshake, Sparkles, Globe2, Star, Quote,
  CheckCircle2, Phone, ChevronRight,
} from "lucide-react";
import { Reveal, Eyebrow } from "../components/ui";
import { SERVICES, DESTINATIONS, PHONE_1, EMAIL, WHATSAPP_LINK } from "../data/site";
import { FinalCTA } from "../components/sections";

const ICONS = [Stamp, FileCheck2, FolderCheck, Plane, CarFront, ShieldCheck];

const STATS = [
  { n: "6+", l: "Regions covered worldwide" },
  { n: "8", l: "Core travel services" },
  { n: "1:1", l: "Personal travel support" },
  { n: "24h", l: "Response commitment" },
];

const PURPOSES = [
  { icon: Palmtree, title: "Holidays & Vacations", desc: "Beach escapes, honeymoons, family holidays and once-in-a-lifetime adventures — fully planned around you.", img: "/images/holiday.jpg" },
  { icon: Briefcase, title: "Business Trips", desc: "Flights, hotels, transfers and tight itineraries that keep your work travel sharp, punctual and stress-free.", img: "/images/business.jpg" },
  { icon: GraduationCap, title: "Group & Study Trips", desc: "Student travel, group tours, conferences and institutional trips with organised documentation for everyone.", img: "/images/study.jpg" },
];

const WHY = [
  { icon: BadgeCheck, title: "Trusted Travel Support", desc: "A dedicated team that guides you at every step — from first inquiry to wheels-up and safe return." },
  { icon: Route, title: "End-to-End Travel Planning", desc: "Passports, visas, flights, hotels, transport and insurance — one partner handling the whole journey." },
  { icon: HeartHandshake, title: "Personalized Service", desc: "Every itinerary is tailored to your purpose, budget and timeline. No generic packages, ever." },
  { icon: Sparkles, title: "Convenience", desc: "Forms filled, checklists prepared, bookings confirmed — you focus on the experience, we handle the paperwork." },
  { icon: Globe2, title: "Global Travel Connections", desc: "Travel assistance and documentation support for destinations across Europe, UK, Middle East, Asia, Africa and North America." },
];

const STEPS = [
  { n: "01", t: "Tell us where you want to go", d: "Call, WhatsApp or send an inquiry with your destination, dates and purpose of travel." },
  { n: "02", t: "We prepare your file", d: "Checklists, forms, supporting documents, itineraries, flights, hotels and insurance — organised for you." },
  { n: "03", t: "You travel with confidence", d: "Board with everything in order and a team on standby while you focus on the experience." },
];

const TESTIMONIALS = [
  { q: "They organised my documents and bookings so well that I travelled without a single worry. Truly professional.", who: "Sarah N.", trip: "Holiday · Dubai" },
  { q: "From passport guidance to flights and hotel, everything was handled. My business trip was completely smooth.", who: "David O.", trip: "Business · London" },
  { q: "Our study group had many files to prepare. 23Konekt kept everyone organised and informed throughout.", who: "Grace A.", trip: "Study trip · Canada" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden bg-navy-950 text-white">
        <img src="/images/hero.jpg" alt="Airplane wing above golden sunset clouds" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/45 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/20 to-transparent" />
        <div className="absolute inset-0 hero-grid" />

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-14 sm:py-44">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-950/60 backdrop-blur px-4 py-2 text-[11px] font-bold tracking-[0.24em] text-gold-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" /> Uganda · To the world
            </span>
            <h1 className="font-display font-bold text-[42px] leading-[1.02] sm:text-6xl lg:text-7xl mt-5">
              CONNECTING YOU<br />TO THE <span className="gold-text">WORLD</span>
            </h1>
            <p className="font-display italic text-xl sm:text-2xl text-gold-100 mt-4">Your Journey, Our Priority.</p>
            <p className="text-white/75 text-[15px] sm:text-lg leading-relaxed mt-4 max-w-xl">
              From passports and visas to flights, accommodation and complete travel planning, 23Konekt Tours &amp; Travel makes your journey simple, smooth and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link to="/contact" className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-extrabold text-[13px] tracking-[0.15em] px-8 py-4 rounded-full shadow-[0_16px_40px_-10px_rgba(201,162,39,0.8)] hover:-translate-y-0.5 transition-all">
                PLAN YOUR TRIP <ArrowRight size={16} strokeWidth={2.6} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.06] backdrop-blur text-white font-bold text-[13px] tracking-[0.15em] px-8 py-4 rounded-full hover:bg-white/15 transition">
                OUR SERVICES
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[13px] text-white/70">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-gold-400" /> Documentation experts</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-gold-400" /> Flights &amp; hotels</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-gold-400" /> Personal planning</span>
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.3em] font-bold">SCROLL</span>
          <span className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      {/* ============ STATS / TRUST BAR ============ */}
      <section className="bg-navy-950 text-white border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="text-center lg:text-left lg:border-l lg:border-gold-500/25 lg:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold gold-text">{s.n}</p>
                <p className="text-white/60 text-[13px] mt-1">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="bg-gold-400 text-navy-950 overflow-hidden py-3" aria-hidden>
        <div className="flex w-max animate-marquee gap-0 font-extrabold text-[12px] tracking-[0.22em]">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0">
              {["PASSPORTS", "VISAS", "FLIGHTS", "HOTELS", "CAR RENTALS", "TRAVEL INSURANCE", "TRAVEL PLANNING", "CONNECTING YOU TO THE WORLD"].map((t) => (
                <span key={t + k} className="mx-6 inline-flex items-center gap-6">{t} <Star size={12} fill="currentColor" /></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-navy-950 mt-4">OUR <span className="italic text-royal-600">SERVICES</span></h2>
            <p className="text-navy-900/60 mt-4 leading-relaxed">Everything your journey needs — handled by one trusted team, from paperwork to touchdown.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={s.id} delay={(i % 3) * 0.08}>
                  <Link to={`/services#${s.id}`} className="card-lift group relative flex flex-col h-full rounded-3xl bg-mist-50 border border-mist-200 hover:border-gold-500/50 hover:shadow-[0_24px_50px_-20px_rgba(10,25,49,0.35)] p-7 overflow-hidden">
                    <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-600 via-gold-500 to-royal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <span className="grid place-items-center w-14 h-14 rounded-2xl bg-navy-950 text-gold-400 ring-1 ring-gold-500/30 shadow-lg group-hover:bg-royal-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <p className="mt-5 text-[10.5px] font-extrabold tracking-[0.22em] text-gold-600 uppercase">{s.tag}</p>
                    <h3 className="font-display text-xl font-bold text-navy-950 mt-1.5">{s.title}</h3>
                    <p className="text-sm text-navy-900/60 leading-relaxed mt-2.5 flex-1">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-[12px] font-extrabold tracking-[0.16em] text-royal-600 group-hover:text-gold-600 transition">
                      LEARN MORE <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PURPOSES ============ */}
      <section className="bg-navy-950 text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-royal-600/20 blur-[130px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow dark>Trips for every purpose</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4">WE PLAN TRIPS FOR <span className="gold-text">EVERY PURPOSE</span></h2>
            <p className="text-white/60 mt-4">Holidays, business, study or family — tell us the occasion, we design the journey.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {PURPOSES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card-lift group relative rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 hover:shadow-[0_30px_60px_-20px_rgba(201,162,39,0.35)] h-[420px] flex flex-col justify-end">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent" />
                  <div className="relative p-7">
                    <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gold-400 text-navy-950 shadow-lg mb-4"><p.icon size={22} /></span>
                    <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">{p.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 mt-4 text-[12px] font-extrabold tracking-[0.18em] text-gold-300 hover:text-gold-100 transition">TELL US WHERE YOU WANT TO GO <ArrowRight size={14} /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="bg-mist-50 py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/40 via-transparent to-royal-600/30 rounded-[2rem] blur-2xl" aria-hidden />
              <img src="/images/passport.jpg" alt="Traveller with passport and luggage at the airport" loading="lazy" className="relative rounded-[2rem] w-full h-[420px] sm:h-[520px] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -right-2 sm:right-6 left-4 sm:left-auto rounded-2xl bg-navy-950 text-white px-6 py-5 shadow-2xl border border-gold-500/30 animate-floaty">
                <p className="font-display text-2xl font-bold gold-text">Stress-free</p>
                <p className="text-[12px] text-white/70 tracking-wide">travel, from paperwork to touchdown</p>
              </div>
              <div className="absolute top-5 -left-1 sm:left-5 rounded-2xl bg-white/95 backdrop-blur px-5 py-3.5 shadow-xl border border-gold-500/30 flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-gold-100 text-gold-600"><ShieldCheck size={20} /></span>
                <div><p className="text-sm font-extrabold text-navy-950">Reliable &amp; Professional</p><p className="text-xs text-navy-900/55">Personalised travel solutions</p></div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Why choose 23Konekt?</Eyebrow>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-navy-950 mt-4 leading-tight">YOUR JOURNEY,<br /><span className="italic text-royal-600">OUR PRIORITY.</span></h2>
              <p className="text-navy-900/60 mt-4 leading-relaxed">We simplify travel through documentation support, visa processing assistance, flights, accommodation, transportation, insurance and customized travel planning.</p>
            </Reveal>
            <div className="mt-8 space-y-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.07}>
                  <div className="flex gap-4 rounded-2xl bg-white border border-mist-200 hover:border-gold-500/50 p-5 shadow-sm hover:shadow-lg transition-all">
                    <span className="grid place-items-center w-12 h-12 rounded-xl bg-navy-950 text-gold-400 shrink-0"><w.icon size={22} strokeWidth={1.9} /></span>
                    <div>
                      <h3 className="font-extrabold text-navy-950">{w.title}</h3>
                      <p className="text-sm text-navy-900/60 mt-1 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DESTINATIONS ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>Destinations</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-navy-950 mt-4">WHERE WILL YOUR JOURNEY <span className="italic text-royal-600">TAKE YOU?</span></h2>
            <p className="text-navy-900/60 mt-4">Travel assistance and documentation support for destinations around the world.</p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12">
            {DESTINATIONS.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 0.08} className={i === 0 ? "col-span-2 lg:col-span-1" : ""}>
                <Link to="/contact" className="card-lift group relative block rounded-3xl overflow-hidden h-64 sm:h-80 border border-navy-950/10">
                  <img src={d.img} alt={`${d.name} destination`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/25 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-navy-950/60 backdrop-blur border border-gold-400/40 text-gold-300 text-[10.5px] font-bold tracking-[0.18em] px-3.5 py-1.5 uppercase">{d.note}</span>
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{d.name}</h3>
                      <p className="text-white/60 text-xs sm:text-[13px] mt-1">{d.places}</p>
                    </div>
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-gold-400 text-navy-950 shrink-0 group-hover:rotate-45 transition-transform duration-300"><ArrowUpRight size={19} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-8">
            <p className="text-xs text-navy-900/45 max-w-xl mx-auto">Visa decisions are made solely by immigration authorities of each destination. We prepare strong, complete applications — approval is never guaranteed by any agent.</p>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-gradient-to-b from-royal-50 to-white py-20 sm:py-24 border-y border-mist-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center">
            <Eyebrow>Simple process</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-4">WORKING TOGETHER TO MAKE YOUR JOURNEY EASIER.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative rounded-3xl bg-navy-950 text-white p-8 overflow-hidden h-full">
                  <div className="absolute inset-0 hero-grid" />
                  <p className="font-display text-5xl font-bold gold-text relative">{s.n}</p>
                  <h3 className="font-bold text-lg mt-3 relative">{s.t}</h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed relative">{s.d}</p>
                  {i < 2 && <ChevronRight className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 text-gold-500/50" size={22} />}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-shine inline-flex items-center justify-center gap-2 bg-navy-950 text-white font-extrabold text-[13px] tracking-[0.15em] px-8 py-4 rounded-full hover:bg-royal-700 transition">TELL US WHERE YOU WANT TO GO <ArrowRight size={15} /></Link>
              <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 border-2 border-navy-950/15 text-navy-950 font-extrabold text-[13px] tracking-[0.15em] px-8 py-4 rounded-full hover:border-gold-500 hover:text-gold-600 transition"><Phone size={15} /> {PHONE_1}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center">
            <Eyebrow>Travellers say</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-4">TRUSTED BY TRAVELLERS</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.1}>
                <figure className="h-full rounded-3xl bg-mist-50 border border-mist-200 p-7 flex flex-col hover:border-gold-500/40 hover:shadow-xl transition-all">
                  <Quote size={28} className="text-gold-500" fill="currentColor" />
                  <blockquote className="text-navy-900/75 text-[15px] leading-relaxed mt-4 flex-1">“{t.q}”</blockquote>
                  <div className="flex gap-1 mt-5" aria-label="5 star rating">
                    {[...Array(5)].map((_, k) => <Star key={k} size={14} className="text-gold-500" fill="currentColor" />)}
                  </div>
                  <figcaption className="mt-3 pt-4 border-t border-mist-200">
                    <p className="font-extrabold text-navy-950 text-sm">{t.who}</p>
                    <p className="text-xs text-navy-900/55">{t.trip}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT STRIP ============ */}
      <section className="bg-mist-50 border-t border-mist-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-royal-600 uppercase">Prefer to talk first?</p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mt-2">Speak to a travel specialist today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#1faa55] text-white font-extrabold text-[12.5px] tracking-[0.12em] px-6 py-3.5 rounded-full hover:bg-[#178a44] transition">WHATSAPP US</a>
            <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 bg-navy-950 text-white font-extrabold text-[12.5px] tracking-[0.12em] px-6 py-3.5 rounded-full hover:bg-royal-700 transition"><Phone size={15} /> CALL NOW</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 border-2 border-navy-950/15 text-navy-950 font-extrabold text-[12.5px] tracking-[0.12em] px-6 py-3.5 rounded-full hover:border-gold-500 transition">EMAIL US</a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
