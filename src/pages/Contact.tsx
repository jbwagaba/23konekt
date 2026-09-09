import { useState } from "react";
import type { FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, User, Plane } from "lucide-react";
import { Reveal, Eyebrow } from "../components/ui";
import { PageHero } from "../components/sections";
import { PHONE_1, PHONE_2, EMAIL, SERVICE_OPTIONS, WHATSAPP_NUMBER } from "../data/site";

const inputCls = "w-full rounded-2xl border border-mist-200 bg-white px-4 py-3.5 text-[14.5px] text-navy-950 placeholder:text-navy-900/35 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 transition";
const labelCls = "block text-[12px] font-extrabold tracking-[0.12em] text-navy-950/80 uppercase mb-2";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", destination: "", date: "", travelers: "1", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service || !form.message.trim()) {
      setError("Please fill in your name, phone number, service required and message.");
      return;
    }
    setError("");
    const text = `Hello 23Konekt Tours & Travel!%0A%0A*New Trip Inquiry*%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email || "-")}%0AService: ${encodeURIComponent(form.service)}%0ADestination: ${encodeURIComponent(form.destination || "-")}%0ATravel date: ${encodeURIComponent(form.date || "-")}%0ATravelers: ${encodeURIComponent(form.travelers)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="LET'S PLAN YOUR JOURNEY."
        sub="Call, WhatsApp, email or send an inquiry — a travel specialist will respond promptly. Your journey, our priority."
        img="/images/planning.jpg"
      />

      <section className="bg-mist-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Quick contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, t: "Call Us", v1: PHONE_1, h1: `tel:${PHONE_1.replace(/\s/g, "")}`, v2: PHONE_2, h2: `tel:${PHONE_2.replace(/\s/g, "")}` },
              { icon: MessageCircle, t: "WhatsApp", v1: "Chat instantly", h1: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello 23Konekt! I'd like to plan a trip.")}`, v2: "Fastest response", h2: `https://wa.me/${WHATSAPP_NUMBER}` },
              { icon: Mail, t: "Email", v1: EMAIL, h1: `mailto:${EMAIL}`, v2: "We reply promptly", h2: `mailto:${EMAIL}` },
              { icon: MapPin, t: "Visit Us", v1: "Kampala, Uganda", h1: "https://maps.google.com/?q=Kampala,Uganda", v2: "Mon–Sat · 8:30–18:00", h2: "https://maps.google.com/?q=Kampala,Uganda" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="card-lift h-full rounded-3xl bg-white border border-mist-200 hover:border-gold-500/50 p-6 text-center">
                  <span className="mx-auto grid place-items-center w-12 h-12 rounded-2xl bg-navy-950 text-gold-400"><c.icon size={22} /></span>
                  <p className="font-extrabold text-navy-950 mt-4">{c.t}</p>
                  <a href={c.h1} target={c.h1.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block text-sm text-royal-600 font-bold mt-1.5 hover:text-gold-600 break-all">{c.v1}</a>
                  <a href={c.h2} target={c.h2.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block text-xs text-navy-900/55 mt-1 hover:text-navy-950">{c.v2}</a>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 mt-8 items-start">
            {/* Info panel */}
            <Reveal>
              <div className="rounded-[2rem] bg-navy-950 text-white p-8 sm:p-10 relative overflow-hidden h-full">
                <div className="absolute inset-0 hero-grid" />
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-royal-600/30 blur-[90px]" />
                <div className="relative">
                  <p className="text-gold-300 text-[11px] font-bold tracking-[0.3em] uppercase">23Konekt Tours &amp; Travel</p>
                  <h2 className="font-display text-3xl font-bold mt-3">CONNECTING YOU TO THE WORLD</h2>
                  <div className="gold-line w-32 my-6" />
                  <ul className="space-y-4 text-[15px]">
                    <li className="flex items-center gap-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 shrink-0"><Phone size={17} className="text-gold-300" /></span><span><a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="hover:text-gold-300 font-bold">{PHONE_1}</a><br /><a href={`tel:${PHONE_2.replace(/\s/g, "")}`} className="hover:text-gold-300 font-bold">{PHONE_2}</a></span></li>
                    <li className="flex items-center gap-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 shrink-0"><Mail size={17} className="text-gold-300" /></span><a href={`mailto:${EMAIL}`} className="hover:text-gold-300 font-bold break-all">{EMAIL}</a></li>
                    <li className="flex items-center gap-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 shrink-0"><MapPin size={17} className="text-gold-300" /></span>Kampala, Uganda</li>
                    <li className="flex items-center gap-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 shrink-0"><Clock size={17} className="text-gold-300" /></span>Mon – Sat · 8:30am – 6:00pm EAT</li>
                  </ul>
                  <div className="mt-8 rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                    <p className="text-sm font-bold text-gold-200 flex items-center gap-2"><User size={15} /> What happens next?</p>
                    <ol className="text-[13px] text-white/65 mt-3 space-y-2 leading-relaxed list-decimal list-inside">
                      <li>Send your inquiry below.</li>
                      <li>We respond with requirements &amp; next steps.</li>
                      <li>We prepare your file, bookings &amp; itinerary.</li>
                    </ol>
                  </div>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 bg-[#1faa55] hover:bg-[#178a44] transition font-extrabold text-[12.5px] tracking-[0.14em] rounded-full py-4"><MessageCircle size={17} /> WHATSAPP CLICK-TO-CHAT</a>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] bg-white border border-mist-200 p-7 sm:p-10 shadow-[0_30px_70px_-30px_rgba(10,25,49,0.3)]">
                {sent ? (
                  <div className="text-center py-10">
                    <span className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-green-50 border border-green-200"><CheckCircle2 size={40} className="text-green-600" /></span>
                    <h2 className="font-display text-3xl font-bold text-navy-950 mt-6">Inquiry received!</h2>
                    <p className="text-navy-900/60 mt-3 max-w-md mx-auto leading-relaxed">Thank you, {form.name.split(" ")[0] || "traveller"}. Your inquiry has opened in WhatsApp — just press send there, and our team will respond promptly. Prefer email? Write to <a className="text-royal-600 font-bold" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
                    <div className="flex flex-wrap justify-center gap-3 mt-7">
                      <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", service: "", destination: "", date: "", travelers: "1", message: "" }); }} className="border-2 border-navy-950/15 text-navy-950 font-extrabold text-[12px] tracking-[0.14em] px-7 py-3.5 rounded-full hover:border-gold-500 transition">SEND ANOTHER INQUIRY</button>
                      <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 bg-navy-950 text-white font-extrabold text-[12px] tracking-[0.14em] px-7 py-3.5 rounded-full"><Phone size={14} /> CALL NOW</a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <Eyebrow>Send an inquiry</Eyebrow>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mt-3">TELL US ABOUT YOUR TRIP</h2>
                    <p className="text-sm text-navy-900/55 mt-2">Fields marked * are required. Submitting opens WhatsApp with your details ready to send.</p>

                    <div className="grid sm:grid-cols-2 gap-4 mt-7">
                      <div><label className={labelCls} htmlFor="f-name">Full Name *</label><input id="f-name" className={inputCls} placeholder="e.g. Jane Nakato" value={form.name} onChange={set("name")} required autoComplete="name" /></div>
                      <div><label className={labelCls} htmlFor="f-phone">Phone Number *</label><input id="f-phone" className={inputCls} placeholder="+256 ..." value={form.phone} onChange={set("phone")} required inputMode="tel" autoComplete="tel" /></div>
                      <div><label className={labelCls} htmlFor="f-email">Email</label><input id="f-email" type="email" className={inputCls} placeholder="you@example.com" value={form.email} onChange={set("email")} autoComplete="email" /></div>
                      <div><label className={labelCls} htmlFor="f-service">Service Required *</label>
                        <select id="f-service" className={inputCls} value={form.service} onChange={set("service")} required>
                          <option value="">Select a service…</option>
                          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div><label className={labelCls} htmlFor="f-dest">Destination</label><input id="f-dest" className={inputCls} placeholder="e.g. Dubai, UAE" value={form.destination} onChange={set("destination")} /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className={labelCls} htmlFor="f-date">Travel Date</label><input id="f-date" type="date" className={inputCls} value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} /></div>
                        <div><label className={labelCls} htmlFor="f-trav">Travelers</label>
                          <select id="f-trav" className={inputCls} value={form.travelers} onChange={set("travelers")}>
                            {["1", "2", "3", "4", "5", "6+", "Group (10+)"].map((n) => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-2"><label className={labelCls} htmlFor="f-msg">Message *</label><textarea id="f-msg" rows={4} className={`${inputCls} resize-none`} placeholder="Tell us about your journey — purpose, dates, questions…" value={form.message} onChange={set("message")} required /></div>
                    </div>

                    {error && <p role="alert" className="mt-4 text-sm font-bold text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>}

                    <button type="submit" className="btn-shine mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-extrabold text-[13.5px] tracking-[0.16em] px-8 py-4 rounded-full shadow-[0_16px_40px_-10px_rgba(201,162,39,0.7)] hover:-translate-y-0.5 transition-all">
                      SEND INQUIRY <Send size={16} />                    </button>
                    <p className="text-center text-xs text-navy-900/45 mt-4 flex items-center justify-center gap-1.5"><Plane size={13} /> Prefer to talk? Call <a className="font-bold text-royal-600" href={`tel:${PHONE_1.replace(/\s/g, "")}`}>{PHONE_1}</a></p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal className="mt-8">
            <div className="rounded-[2rem] overflow-hidden border border-mist-200 shadow-lg">
              <div className="bg-navy-950 text-white px-7 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="font-display text-xl font-bold">Find us — Kampala, Uganda</p>
                <a href="https://maps.google.com/?q=Kampala,Uganda" target="_blank" rel="noreferrer" className="text-[12px] font-extrabold tracking-[0.15em] text-gold-300 hover:text-gold-100">OPEN IN GOOGLE MAPS →</a>
              </div>
              <iframe
                title="23Konekt Tours & Travel — Kampala, Uganda map"
                src="https://www.google.com/maps?q=Kampala,Uganda&z=12&output=embed"
                className="w-full h-[340px] sm:h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
