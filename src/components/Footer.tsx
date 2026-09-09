import { Link } from "react-router-dom";
import { Facebook, Instagram, Music2, MessageCircle, Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { PHONE_1, PHONE_2, EMAIL, WHATSAPP_LINK } from "../data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-70" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-royal-600/25 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-royal-700 via-royal-600 to-navy-800 border border-gold-500/30 p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-6 shadow-2xl">
          <div className="flex-1">
            <p className="text-gold-300 text-[11px] font-bold tracking-[0.3em] uppercase">Travel tips &amp; fare alerts</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">Get journey-ready insights in your inbox.</h3>
            <p className="text-white/70 text-sm mt-2">Visa checklist updates, seasonal fares and planning guides. No spam — unsubscribe anytime.</p>
          </div>
          {done ? (
            <div className="flex items-center gap-3 bg-white/10 border border-gold-400/40 rounded-2xl px-6 py-4">
              <ShieldCheck className="text-gold-300" size={22} />
              <p className="text-sm font-semibold">You&apos;re on the list. Welcome aboard!</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setDone(true); }} className="flex w-full lg:w-auto flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="w-full sm:w-72 rounded-full px-5 py-3.5 text-sm text-navy-950 bg-white placeholder:text-navy-900/40 outline-none focus:ring-2 focus:ring-gold-400" />
              <button className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-extrabold text-[12px] tracking-[0.15em] px-7 py-3.5 rounded-full transition">
                SUBSCRIBE <Send size={14} />
              </button>
            </form>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-royal-600 to-navy-800 ring-1 ring-gold-500/40 font-display text-xl" style={{ fontWeight: 800 }}>23<span className="text-gold-400">K</span></span>
              <div>
                <p className="font-extrabold tracking-tight">23KONEKT <span className="font-display italic text-gold-300 font-semibold">Tours &amp; Travel</span></p>
                <p className="text-[10px] tracking-[0.28em] text-gold-400 font-bold uppercase">Connecting you to the world</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-5">Passport help, visa processing support, flights, hotels, transport, insurance and fully personalised travel planning — from Uganda to the world.</p>
            <div className="flex items-center gap-2.5 mt-5">
              {[
                { icon: Facebook, href: "https://facebook.com/23konekt", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/23konekt", label: "Instagram" },
                { icon: Music2, href: "https://tiktok.com/@23konekt", label: "TikTok" },
                { icon: MessageCircle, href: WHATSAPP_LINK, label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid place-items-center w-10 h-10 rounded-full bg-white/[0.07] border border-white/10 text-white/80 hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all hover:-translate-y-1">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-bold tracking-[0.28em] text-gold-300 uppercase mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />Terms &amp; Conditions</Link></li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-gold-300 uppercase mb-5">Services</p>
            <ul className="space-y-3 text-sm text-white/70">
              {["Passport Services", "Visa Processing", "Travel Documentation", "Flight & Hotel Booking", "Car Rentals & Drivers", "Travel Insurance & Planning"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-gold-300 transition inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold-500" />{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-gold-300 uppercase mb-5">Contact</p>
            <ul className="space-y-3.5 text-sm text-white/75">
              <li><a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="flex gap-2.5 hover:text-gold-300 transition"><Phone size={16} className="text-gold-400 shrink-0 mt-0.5" /> {PHONE_1}</a></li>
              <li><a href={`tel:${PHONE_2.replace(/\s/g, "")}`} className="flex gap-2.5 hover:text-gold-300 transition"><Phone size={16} className="text-gold-400 shrink-0 mt-0.5" /> {PHONE_2}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex gap-2.5 hover:text-gold-300 transition break-all"><Mail size={16} className="text-gold-400 shrink-0 mt-0.5" /> {EMAIL}</a></li>
              <li className="flex gap-2.5"><MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" /> Kampala, Uganda · Serving clients across Uganda &amp; beyond</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gold-500/25 bg-gold-400/[0.06] px-6 py-5 text-center">
          <p className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.22em] text-gold-300">ANY DESTINATION. ANY PURPOSE. ONE TRUSTED PARTNER — 23KONEKT.</p>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} 23Konekt Tours &amp; Travel. All rights reserved.</p>
          <p className="tracking-[0.18em] font-bold">YOUR JOURNEY, OUR PRIORITY</p>
          <div className="flex gap-4"><Link to="/privacy" className="hover:text-gold-300">Privacy</Link><Link to="/terms" className="hover:text-gold-300">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
