import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stamp, FileCheck2, FolderCheck, Plane, BedDouble, CarFront,
  ShieldCheck, Route, CheckCircle2, ArrowRight, AlertCircle, Phone,
} from "lucide-react";
import { Reveal } from "../components/ui";
import { PageHero, FinalCTA } from "../components/sections";
import { PHONE_1 } from "../data/site";

const DETAIL = [
  {
    id: "passport",
    icon: Stamp,
    title: "Passport Services",
    tag: "Ordinary & Express Assistance",
    img: "/images/passport.jpg",
    intro: "New applications, renewals and express handling — we guide you through every form, requirement and appointment.",
    points: ["Ordinary passport application assistance", "Express passport handling guidance", "Renewals, replacements & updates", "Application forms & document checklists", "Appointment booking guidance", "File review before submission"],
  },
  {
    id: "visa",
    icon: FileCheck2,
    title: "Visa Processing",
    tag: "Application Preparation & Guidance",
    img: "/images/uk.jpg",
    intro: "Complete preparation support for visit, business, study and family visas to destinations around the world.",
    points: ["Application preparation & form filling", "Appointment guidance & scheduling support", "Document checklists per destination", "Supporting documents preparation", "Travel itinerary preparation", "Pre-interview briefing & file organisation"],
    note: "Please note: visa decisions are made solely by the immigration authorities of each country. Approval is never guaranteed by any agent — but a complete, accurate, well-organised application gives you the best possible chance, and that is exactly what we prepare with you.",
  },
  {
    id: "documentation",
    icon: FolderCheck,
    title: "Travel Documentation",
    tag: "Itineraries & Supporting Files",
    img: "/images/planning.jpg",
    intro: "Professionally prepared itineraries and supporting documents, organised into a complete travel file.",
    points: ["Detailed travel itineraries", "Supporting document drafting & review", "Employment, bank & sponsorship letter guidance", "Document organisation & file sequencing", "Copies, scans & travel-ready folders"],
  },
  {
    id: "flights",
    icon: Plane,
    title: "Flight Bookings",
    tag: "One-Way · Return · Multi-City · Group",
    img: "/images/hero.jpg",
    intro: "Best-fit flight options sourced and booked around your dates, budget and route — for individuals and groups.",
    points: ["One-way & return ticket bookings", "Multi-city & open-jaw itineraries", "Group & corporate travel bookings", "Date-change & rebooking guidance", "Baggage, seat & meal preferences"],
  },
  {
    id: "hotels",
    icon: BedDouble,
    title: "Hotel Bookings",
    tag: "Business · Family · Group Stays",
    img: "/images/hotel.jpg",
    intro: "Hand-picked accommodation — from smart business hotels to family resorts and group blocks.",
    points: ["Business & transit hotel bookings", "Family & holiday accommodation", "Group & event room blocks", "Airport-proximate & city-centre options", "Booking confirmations for visa files"],
  },
  {
    id: "cars",
    icon: CarFront,
    title: "Car Rentals & Hire",
    tag: "Self-Drive · Chauffeur · Transfers",
    img: "/images/car.jpg",
    intro: "Premium, reliable ground transport — drive yourself or ride with a trusted professional driver.",
    points: ["Self-drive car rentals", "Chauffeur-driven vehicles", "Airport transfers & pickups", "Drivers for hire — daily & long-term", "Corporate & event transport"],
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    title: "Travel Insurance",
    tag: "Assistance for Eligible Journeys",
    img: "/images/business.jpg",
    intro: "We assist you in securing suitable travel insurance cover for eligible journeys — a requirement for many visas.",
    points: ["Insurance options guidance", "Cover for medical & trip risks", "Policy documents for visa files", "Family & group cover assistance"],
  },
  {
    id: "planning",
    icon: Route,
    title: "Travel Planning",
    tag: "Fully Personalised Itineraries",
    img: "/images/holiday.jpg",
    intro: "End-to-end planning for every occasion — one conversation, one plan, one team handling the details.",
    points: ["Holidays, vacations & honeymoons", "Business & conference travel", "Group, study & institutional trips", "Family travel & reunions", "Special occasions & celebrations"],
  },
];

export default function Services() {
  const [active, setActive] = useState(DETAIL[0].id);
  const current = DETAIL.find((d) => d.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="EVERYTHING YOUR JOURNEY NEEDS."
        sub="From passports and visas to flights, hotels, transport, insurance and full planning — one trusted partner for the whole journey."
        img="/images/hero.jpg"
      />

      {/* Quick nav pills */}
      <div className="sticky top-[68px] z-30 bg-white/92 backdrop-blur-xl border-b border-mist-200" style={{ backgroundColor: "rgba(255,255,255,0.93)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto" role="tablist" aria-label="Services">
          {DETAIL.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              onClick={() => setActive(d.id)}
              role="tab"
              aria-selected={active === d.id}
              className={`whitespace-nowrap text-[11.5px] font-extrabold tracking-[0.1em] px-4 py-2.5 rounded-full border transition ${active === d.id ? "bg-navy-950 text-gold-300 border-navy-950" : "bg-mist-50 text-navy-900/70 border-mist-200 hover:border-gold-500"}`}
            >
              {d.title.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Detail sections */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-8">
          {DETAIL.map((d, i) => (
            <Reveal key={d.id}>
              <article id={d.id} className="scroll-mt-36 rounded-[2rem] overflow-hidden border border-mist-200 bg-mist-50 hover:border-gold-500/40 hover:shadow-[0_30px_60px_-30px_rgba(10,25,49,0.4)] transition-all">
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
                  <div className={`relative h-64 sm:h-80 lg:h-auto lg:min-h-[420px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img src={d.img} alt={d.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-navy-950/70 backdrop-blur border border-gold-400/40 text-gold-300 text-[10.5px] font-bold tracking-[0.18em] px-4 py-2 uppercase">
                      <d.icon size={14} /> {d.tag}
                    </span>
                  </div>
                  <div className="p-7 sm:p-10 lg:p-12">
                    <p className="text-[11px] font-extrabold tracking-[0.25em] text-gold-600 uppercase">Service {String(i + 1).padStart(2, "0")}</p>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mt-2">{d.title}</h2>
                    <p className="text-navy-900/65 mt-3 leading-relaxed">{d.intro}</p>
                    <ul className="mt-6 space-y-2.5">
                      {d.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-navy-900/80">
                          <CheckCircle2 size={17} className="text-royal-600 shrink-0 mt-0.5" /> {p}
                        </li>
                      ))}
                    </ul>
                    {d.note && (
                      <div className="mt-6 rounded-2xl bg-gold-50 border border-gold-500/40 p-5 flex gap-3">
                        <AlertCircle size={20} className="text-gold-600 shrink-0 mt-0.5" />
                        <p className="text-[13px] text-navy-900/75 leading-relaxed">{d.note}</p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3 mt-7">
                      <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-950 text-white font-extrabold text-[12px] tracking-[0.14em] px-6 py-3.5 rounded-full hover:bg-royal-700 transition">REQUEST THIS SERVICE <ArrowRight size={14} /></Link>
                      <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 border-2 border-navy-950/12 text-navy-950 font-extrabold text-[12px] tracking-[0.14em] px-6 py-3.5 rounded-full hover:border-gold-500 transition"><Phone size={14} /> ASK A QUESTION</a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-gradient-to-r from-royal-700 via-royal-600 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 text-center">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">WORKING TOGETHER TO MAKE YOUR JOURNEY EASIER.</h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">Tell us your destination and purpose — we will design the simplest path to get you there.</p>
            <Link to="/contact" className="btn-shine mt-7 inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-extrabold text-[13px] tracking-[0.15em] px-9 py-4 rounded-full">START PLANNING <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
