import { Link } from "react-router-dom";
import { Target, Eye, HeartHandshake, ShieldCheck, Briefcase, EyeIcon, Users, FileCheck2, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { Reveal, Eyebrow } from "../components/ui";
import { PageHero, FinalCTA } from "../components/sections";
import { WHATSAPP_LINK } from "../data/site";

const VALUES = [
  { icon: ShieldCheck, t: "Integrity", d: "Honest advice and ethical handling of your documents and personal information, always." },
  { icon: Briefcase, t: "Professionalism", d: "Structured processes, clear communication and polished service at every touchpoint." },
  { icon: CheckCircle2, t: "Reliability", d: "We do what we promise — accurate files, confirmed bookings and dependable timelines." },
  { icon: HeartHandshake, t: "Customer Care", d: "You are never a file number. We listen, guide and support you personally." },
  { icon: EyeIcon, t: "Transparency", d: "Clear requirements, honest expectations and upfront guidance — including on visa decisions." },
  { icon: Users, t: "Convenience", d: "One partner for everything, so travel feels simple, smooth and stress-free." },
];

const PILLARS = [
  { icon: FileCheck2, t: "Documentation Support", d: "Passports, visas, itineraries and supporting documents — prepared and organised correctly." },
  { icon: Globe2, t: "Bookings & Logistics", d: "Flights, accommodation, transportation and insurance arranged around your plan." },
  { icon: HeartHandshake, t: "Customized Planning", d: "Holidays, business, study, family and special occasions designed around your purpose." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About 23Konekt"
        title="YOUR JOURNEY, OUR PRIORITY."
        sub="23Konekt Tours & Travel is a Uganda-based travel company helping customers simplify travel through documentation support, visa processing assistance, flights, accommodation, transportation, insurance and customized travel planning."
        img="/images/about.jpg"
      />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-4 leading-tight">SIMPLIFYING TRAVEL, <span className="italic text-royal-600">ONE JOURNEY AT A TIME.</span></h2>
            <p className="text-navy-900/65 leading-relaxed mt-5">
              Planning international travel involves many moving parts — passport applications, visa requirements, supporting documents, flight options, accommodation choices, ground transport and insurance. For many travellers, the process feels overwhelming.
            </p>
            <p className="text-navy-900/65 leading-relaxed mt-4">
              <strong className="text-navy-950">23Konekt Tours &amp; Travel exists to change that.</strong> We walk with you from the first idea to the final boarding call: preparing your documentation, guiding your applications, booking your flights and hotels, arranging cars and drivers, assisting with travel insurance and designing a personalised itinerary — so your journey is simple, smooth and stress-free.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {PILLARS.map((p) => (
                <div key={p.t} className="rounded-2xl bg-mist-50 border border-mist-200 p-5 hover:border-gold-500/50 hover:shadow-lg transition-all">
                  <p.icon size={22} className="text-royal-600" />
                  <p className="font-extrabold text-navy-950 text-sm mt-3">{p.t}</p>
                  <p className="text-xs text-navy-900/60 mt-1.5 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-royal-600/25 via-transparent to-gold-400/40 rounded-[2rem] blur-2xl" aria-hidden />
              <img src="/images/hotel.jpg" alt="Premium resort accommodation" loading="lazy" className="relative rounded-[2rem] w-full h-[420px] sm:h-[540px] object-cover shadow-2xl" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-navy-950/85 backdrop-blur border border-gold-500/30 p-5 text-white">
                <p className="text-[11px] font-bold tracking-[0.25em] text-gold-300 uppercase">Based in Kampala, Uganda</p>
                <p className="font-display italic text-lg mt-1">Connecting people from Uganda and beyond to the world.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-navy-950 text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-royal-600/25 blur-[130px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center">
            <Eyebrow dark>What drives us</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">MISSION &amp; <span className="gold-text">VISION</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-4xl mx-auto">
            <Reveal>
              <div className="h-full rounded-3xl bg-white/[0.05] border border-gold-500/25 p-8 hover:bg-white/[0.08] transition">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gold-400 text-navy-950"><Target size={26} /></span>
                <h3 className="font-display text-2xl font-bold mt-5 text-gold-300">Our Mission</h3>
                <p className="font-display italic text-lg leading-relaxed mt-3 text-white/90">“To simplify travel by providing reliable, professional and personalized travel solutions.”</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl bg-white/[0.05] border border-royal-500/40 p-8 hover:bg-white/[0.08] transition">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-royal-600 text-white"><Eye size={26} /></span>
                <h3 className="font-display text-2xl font-bold mt-5 text-white">Our Vision</h3>
                <p className="font-display italic text-lg leading-relaxed mt-3 text-white/90">“To become a trusted travel partner connecting people from Uganda and beyond to destinations around the world.”</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>Our values</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-4">WHAT WE <span className="italic text-royal-600">STAND FOR</span></h2>
            <p className="text-navy-900/60 mt-4">Six principles guide every file we prepare and every journey we plan.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 0.08}>
                <div className="card-lift h-full rounded-3xl bg-white border border-mist-200 hover:border-gold-500/50 hover:shadow-xl p-7">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-navy-950 text-gold-400"><v.icon size={22} /></span>
                  <h3 className="font-display text-xl font-bold text-navy-950 mt-4">{v.t}</h3>
                  <p className="text-sm text-navy-900/60 mt-2 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-shine inline-flex items-center justify-center gap-2 bg-navy-950 text-white font-extrabold text-[13px] tracking-[0.15em] px-8 py-4 rounded-full hover:bg-royal-700 transition">PLAN YOUR TRIP <ArrowRight size={15} /></Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-navy-950/15 text-navy-950 font-extrabold text-[13px] tracking-[0.15em] px-8 py-4 rounded-full hover:border-gold-500 transition">CHAT ON WHATSAPP</a>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
