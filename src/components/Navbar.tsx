import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ArrowRight, Clock } from "lucide-react";
import { PHONE_1, EMAIL } from "../data/site";

const LINKS = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICES" },
  { to: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`hidden md:block bg-navy-950 text-white/80 text-[12.5px] border-b border-white/10 transition-all duration-300 ${scrolled ? "max-h-0 overflow-hidden opacity-0 border-transparent" : "max-h-12 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-gold-300 transition"><Phone size={13} className="text-gold-400" /> {PHONE_1}</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 hover:text-gold-300 transition"><Mail size={13} className="text-gold-400" /> {EMAIL}</a>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Clock size={13} className="text-gold-400" /> Mon – Sat · 8:30am – 6:00pm EAT · Kampala, Uganda
          </div>
        </div>
      </div>

      <div className="transition-all duration-300 bg-gradient-to-b from-navy-950/90 via-navy-950/55 to-transparent" style={scrolled ? { backgroundColor: "rgba(5,11,26,0.94)", backgroundImage: "none" } : undefined}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3" aria-label="23Konekt home">
            <span className="relative grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-royal-600 via-royal-700 to-navy-900 shadow-lg shadow-navy-900/30 ring-1 ring-gold-500/40 overflow-hidden shrink-0">
              <span className="absolute inset-0 hero-grid opacity-60" />
              <span className="relative text-white text-lg leading-none" style={{ fontWeight: 800 }}>
                23<span className="text-gold-400">K</span>
              </span>
              <span className="absolute bottom-1 w-6 h-[2px] rounded bg-gold-500" />
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold tracking-tight text-[17px] text-white">
                23KONEKT <span className="font-display italic font-semibold text-gold-300">Tours &amp; Travel</span>
              </span>
              <span className="block text-[9.5px] font-bold tracking-[0.28em] text-white/60 uppercase">Connecting you to the world</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `relative px-5 py-2.5 text-[12.5px] font-bold tracking-[0.18em] transition rounded-full ${isActive ? "text-navy-950 bg-gold-400" : "text-white/85 hover:text-white hover:bg-white/10"}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-extrabold text-[12.5px] tracking-[0.14em] px-6 py-3 rounded-full shadow-[0_10px_30px_-8px_rgba(201,162,39,0.7)] hover:-translate-y-0.5 transition-all">
              PLAN YOUR TRIP <ArrowRight size={15} strokeWidth={2.6} />
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden grid place-items-center w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-white backdrop-blur" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {scrolled && <div className="h-px bg-gold-500/20" />}
      </div>

      <div className={`lg:hidden fixed inset-0 top-0 transition ${open ? "pointer-events-auto z-[-1]" : "pointer-events-none z-[-1]"}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-navy-950 border-l border-gold-500/25 shadow-2xl flex flex-col transition-transform ${open ? "translate-x-0" : "translate-x-full"}`} style={{ transitionDuration: "380ms" }}>
          <div className="p-5 pt-24 flex-1 overflow-y-auto">
            <p className="text-[11px] font-bold tracking-[0.3em] text-gold-400 uppercase mb-4">Menu</p>
            <nav className="space-y-2" aria-label="Mobile">
              {LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className={({ isActive }) => `flex items-center justify-between px-5 py-4 rounded-2xl font-extrabold tracking-[0.12em] text-sm transition ${isActive ? "bg-gold-400 text-navy-950" : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/10"}`}>
                  {l.label} <ArrowRight size={16} />
                </NavLink>
              ))}
            </nav>
            <Link to="/contact" className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-extrabold tracking-[0.12em] text-sm px-5 py-4 rounded-2xl">
              PLAN YOUR TRIP <ArrowRight size={16} />
            </Link>
            <div className="mt-6 rounded-2xl bg-white/[0.05] border border-white/10 p-5 text-sm text-white/75 space-y-2.5">
              <p className="text-gold-300 text-[11px] font-bold tracking-[0.25em] uppercase">Talk to us</p>
              <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white"><Phone size={15} className="text-gold-400" /> {PHONE_1}</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white break-all"><Mail size={15} className="text-gold-400" /> {EMAIL}</a>
              <p className="text-white/50 text-xs pt-1">YOUR JOURNEY, OUR PRIORITY</p>
            </div>
          </div>
          <div className="p-5 border-t border-white/10 text-center text-[11px] tracking-[0.2em] text-white/40 font-bold">23KONEKT · CONNECTING YOU TO THE WORLD</div>
        </div>
      </div>
    </header>
  );
}
