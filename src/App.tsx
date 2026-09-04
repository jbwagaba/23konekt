import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, ArrowUpRight,
  Plane, Building2, Car, ShieldCheck, FileText, BookOpenCheck,
  Globe2, Clock3, Award, Users, Headphones, Sparkles, Check,
  ChevronRight, Send, Facebook, Instagram, MessageCircle,
  Star, Quote, Play, Calendar, Luggage, BadgeCheck, Navigation,
  Briefcase, GraduationCap, Heart, Search, ArrowUp
} from 'lucide-react'

// --- Data ---
const servicesPreview = [
  { id: 'passport', icon: BookOpenCheck, title: 'Passport Services', desc: 'Ordinary & Express applications, renewals and guidance — handled with precision.', color: 'from-[#1e3a8a] to-[#1e40af]' },
  { id: 'visa', icon: FileText, title: 'Visa Processing', desc: 'End-to-end assistance with forms, checklists, appointments & supporting documents.', color: 'from-[#0f2a5a] to-[#1e3a8a]' },
  { id: 'docs', icon: BadgeCheck, title: 'Travel Documentation', desc: 'Itineraries, invitation letters, bank statements & organized document packs.', color: 'from-[#1e3a8a] to-[#2563eb]' },
  { id: 'flights', icon: Plane, title: 'Flight & Hotel Booking', desc: 'One-way, return, multi-city & group bookings plus curated accommodation.', color: 'from-[#0b1e3b] to-[#1e3a8a]' },
  { id: 'cars', icon: Car, title: 'Car Rentals & Drivers', desc: 'Self-drive, chauffeur-driven, airport transfers & long-term hire fleets.', color: 'from-[#1e40af] to-[#3b82f6]' },
  { id: 'insurance', icon: ShieldCheck, title: 'Travel Insurance & Planning', desc: 'Comprehensive cover and personalized itineraries for every journey purpose.', color: 'from-[#0f2a5a] to-[#1e40af]' },
]

const purposes = [
  { title: 'Holidays & Vacations', img: '/images/purpose-holiday.jpg', desc: 'Beach escapes, safaris & city breaks — crafted around your dream.', icon: Heart },
  { title: 'Business Trips', img: '/images/purpose-business.jpg', desc: 'Seamless corporate travel: flights, hotels & transfers on schedule.', icon: Briefcase },
  { title: 'Group & Study Trips', img: '/images/purpose-group.jpg', desc: 'Study abroad, conferences & group adventures with coordinated logistics.', icon: GraduationCap },
]

const whyChoose = [
  { icon: BadgeCheck, title: 'Trusted Travel Support', desc: 'Thousands of travelers assisted with integrity and transparency.' },
  { icon: Navigation, title: 'End-to-End Planning', desc: 'From first document to final boarding — we handle every detail.' },
  { icon: Users, title: 'Personalized Service', desc: 'Your purpose, budget and timeline shape a bespoke travel plan.' },
  { icon: Clock3, title: 'Convenience', desc: 'One partner for passports, visas, flights, stays, cars & insurance.' },
  { icon: Globe2, title: 'Global Connections', desc: 'Support for destinations across 6 continents with reliable partners.' },
]

const destinations = [
  { name: 'Europe', img: '/images/destination-europe.jpg', spots: 'Paris • Rome • Barcelona', flag: '🇪🇺' },
  { name: 'United Kingdom', img: '/images/destination-uk.jpg', spots: 'London • Manchester • Edinburgh', flag: '🇬🇧' },
  { name: 'Middle East', img: '/images/destination-middleeast.jpg', spots: 'Dubai • Doha • Istanbul', flag: '🇦🇪' },
  { name: 'Asia', img: '/images/destination-asia.jpg', spots: 'Tokyo • Singapore • Bangkok', flag: '🇯🇵' },
  { name: 'Africa', img: '/images/destination-africa.jpg', spots: 'Cape Town • Zanzibar • Cairo', flag: '🌍' },
  { name: 'North America', img: '/images/destination-northamerica.jpg', spots: 'New York • Toronto • Miami', flag: '🇺🇸' },
]

const detailedServices = [
  { id: 'passport-d', title: 'Passport Services', subtitle: 'Ordinary and Express', icon: BookOpenCheck, points: ['New ordinary passport applications', 'Express processing guidance', 'Renewals, replacements & corrections', 'Document verification & photo specifications', 'Appointment booking & follow-up support'], note: 'We assist with preparation and submission — final issuance by the Directorate of Citizenship & Immigration.' },
  { id: 'visa-d', title: 'Visa Processing', subtitle: 'Global assistance', icon: FileText, points: ['Eligibility assessment & checklist', 'Form filling & document review', 'Appointment scheduling guidance', 'Cover letters, itineraries & sponsorship docs', 'Interview preparation where required'], note: 'Visa decisions are made solely by embassies & immigration authorities. Approval is never guaranteed.' },
  { id: 'docs-d', title: 'Travel Documentation', subtitle: 'Organized & compliant', icon: BadgeCheck, points: ['Flight itineraries & hotel reservations for visa purposes', 'Bank statement organization & cover letters', 'Invitation & sponsorship letters', 'Complete document pack review before submission'], note: null },
  { id: 'flights-d', title: 'Flight Bookings', subtitle: 'Best routes, best fares', icon: Plane, points: ['One-way, return & multi-city itineraries', 'Group & corporate bookings', 'Flexible rebooking support', 'Real-time fare comparison from trusted airlines'], note: null },
  { id: 'hotels-d', title: 'Hotel Bookings', subtitle: 'Stay where you belong', icon: Building2, points: ['Business, family & group accommodation', 'Luxury, boutique & budget options', 'Verified properties with guest reviews', 'Special occasion & honeymoon curation'], note: null },
  { id: 'cars-d', title: 'Car Rentals & Hire', subtitle: 'Move with ease', icon: Car, points: ['Self-drive & chauffeur-driven vehicles', 'Airport transfers & city-to-city rides', 'Premium SUVs, vans & buses for groups', 'Long-term hire for extended stays'], note: null },
  { id: 'insurance-d', title: 'Travel Insurance', subtitle: 'Protected journeys', icon: ShieldCheck, points: ['Medical, baggage & trip cancellation cover', 'Schengen & destination-compliant policies', 'Family & group plans', 'Claims guidance if you need assistance'], note: null },
  { id: 'planning-d', title: 'Travel Planning', subtitle: 'Tailored to purpose', icon: Sparkles, points: ['Holidays, honeymoons & special occasions', 'Business, study & group travel', 'Family reunions & pilgrimages', 'Day-by-day itinerary with 24/7 support'], note: null },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [toast, setToast] = useState<string | null>(null)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [cookieDismissed, setCookieDismissed] = useState(false)
  const [newsletter, setNewsletter] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', destination: '', date: '', travelers: '1', message: '' })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowScrollTop(window.scrollY > 600)
      const sections = ['home', 'about', 'services', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top <= 150 && r.bottom >= 150) setActive(id)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (toast) { const t = setTimeout(() => setToast(null), 3500); return () => clearTimeout(t) }
  }, [toast])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletter.includes('@')) { setToast('Please enter a valid email address'); return }
    setToast('✓ Subscribed! Welcome to 23Konekt updates.')
    setNewsletter('')
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (!form.service) e.service = 'Select a service'
    if (!form.message.trim()) e.message = 'Add a brief message'
    setFormErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) { setToast('Please complete the highlighted fields'); return }
    setToast('✓ Inquiry sent! Our team will contact you within 2 hours.')
    setForm({ name: '', phone: '', email: '', service: '', destination: '', date: '', travelers: '1', message: '' })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Top Bar - desktop only */}
      <div className="hidden lg:block bg-[#0a1931] text-white text-[12.5px] tracking-wide">
        <div className="max-w-[1280px] mx-auto px-6 h-[36px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+256781387943" className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"><Phone size={13} /> +256 781 387 943</a>
            <span className="opacity-20">|</span>
            <a href="tel:+256752250336" className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"><Phone size={13} /> +256 752 250 336</a>
            <span className="opacity-20">|</span>
            <a href="mailto:23Konekt@gmail.com" className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"><Mail size={13} /> 23Konekt@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-70">Follow us</span>
            <div className="flex gap-2">
              {[
                { Icon: Facebook, href: '#' }, { Icon: Instagram, href: '#' }, { Icon: MessageCircle, href: 'https://wa.me/256781387943' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#c9a227] flex items-center justify-center transition-colors"><Icon size={13} /></a>
              ))}
            </div>
            <span className="ml-2 bg-[#c9a227] text-[#0a1931] px-3 py-1 rounded-full text-[11px] font-bold tracking-widest">EN • UGX</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]' : 'bg-white'}`}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-[72px] lg:h-[78px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-left">
            <div className="w-[46px] h-[46px] rounded-xl bg-[#0a1931] flex items-center justify-center relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#0a1931]" />
              <span className="relative text-white font-black text-[18px] tracking-tighter leading-none">23<span className="text-[#c9a227]">K</span></span>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c9a227]" />
            </div>
            <div className="leading-none">
              <div className="font-black text-[#0a1931] text-[16.5px] tracking-tight flex items-baseline gap-1">23KONEKT <span className="text-[11px] font-semibold tracking-[0.14em] text-[#1e3a8a]">TOURS & TRAVEL</span></div>
              <div className="text-[9.5px] tracking-[0.22em] font-semibold text-[#9aa3b8] mt-[2px]">CONNECTING YOU TO THE WORLD</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'about', label: 'ABOUT US' },
              { id: 'services', label: 'SERVICES' },
              { id: 'contact', label: 'CONTACT US' },
            ].map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`text-[13px] font-semibold tracking-widest relative py-2 transition-colors ${active === item.id ? 'text-[#0a1931]' : 'text-[#64748b] hover:text-[#0a1931]'}`}>
                {item.label}
                {active === item.id && <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#c9a227] rounded-full" />}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => scrollTo('contact')} className="bg-[#c9a227] hover:bg-[#b8941f] text-white px-6 py-[11px] rounded-full text-[13px] font-bold tracking-wide flex items-center gap-2 shadow-[0_8px_20px_rgba(201,162,39,0.35)] transition-all">
              PLAN YOUR TRIP <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0a1931]">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-white border-t border-slate-100 overflow-hidden">
              <div className="px-4 py-6 space-y-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'services', label: 'Services' },
                  { id: 'contact', label: 'Contact Us' },
                ].map(item => (
                  <button key={item.id} onClick={() => scrollTo(item.id)} className={`w-full text-left px-4 py-3 rounded-xl text-[15px] font-semibold flex items-center justify-between ${active === item.id ? 'bg-[#0a1931] text-white' : 'text-slate-700 hover:bg-slate-50'}`}>
                    {item.label} <ChevronRight size={16} className={active === item.id ? 'text-[#c9a227]' : 'opacity-30'} />
                  </button>
                ))}
                <button onClick={() => scrollTo('contact')} className="w-full mt-4 bg-[#c9a227] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2">
                  PLAN YOUR TRIP <ArrowRight size={18} />
                </button>
                <div className="flex items-center justify-center gap-3 pt-4 text-sm text-slate-600">
                  <a href="tel:+256781387943" className="flex items-center gap-1.5"><Phone size={14} /> 0781 387 943</a>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <a href="mailto:23Konekt@gmail.com" className="flex items-center gap-1.5"><Mail size={14} /> Email</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-6 lg:gap-8 items-center py-6 lg:py-10">
            {/* Left */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest text-slate-700">YOUR JOURNEY, OUR PRIORITY</span>
                <span className="hidden sm:inline text-[11px] text-slate-400">• Trusted by 100+ travelers</span>
              </div>

              <h1 className="mt-5 font-black text-[#0a1931] leading-[0.9] tracking-[-0.03em]">
                <span className="block text-[42px] sm:text-[52px] lg:text-[64px]">CONNECTING</span>
                <span className="block text-[42px] sm:text-[52px] lg:text-[64px] flex items-center gap-3">
                  YOU <span className="text-[#1e3a8a]">TO THE</span>
                </span>
                <span className="block text-[42px] sm:text-[52px] lg:text-[64px] text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#c9a227]">WORLD</span>
              </h1>

              <p className="mt-4 text-[15.5px] leading-7 text-slate-600 max-w-[520px]">
                From passports and visas to flights, accommodation and complete travel planning, <span className="font-semibold text-[#0a1931]">23Konekt Tours & Travel</span> makes your journey simple, smooth and stress-free.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('contact')} className="bg-[#0a1931] hover:bg-[#132a52] text-white px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl shadow-[#0a1931]/20 transition-colors">
                  PLAN YOUR TRIP <ArrowRight size={16} />
                </button>
                <button onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })} className="bg-white border border-slate-200 hover:border-slate-300 text-[#0a1931] px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2">
                  OUR SERVICES <Search size={16} />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/100?img=32" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                    <img src="https://i.pravatar.cc/100?img=33" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                    <img src="https://i.pravatar.cc/100?img=47" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                  </div>
                  <div className="leading-tight">
                    <div className="flex items-center gap-1 font-bold text-[#0a1931]"><Star size={12} className="text-[#c9a227] fill-[#c9a227]" /> 4.9/5 from 312 reviews</div>
                    <div className="text-slate-500">Trusted travel support</div>
                  </div>
                </div>
                <span className="hidden sm:block w-px h-8 bg-slate-200" />
                <div className="flex items-center gap-2 text-slate-600">
                  <BadgeCheck size={18} className="text-emerald-500" /> <span className="font-semibold text-[#0a1931]">IATA</span> accredited partners
                </div>
              </div>

              {/* Stats strip */}
              <div className="mt-7 grid grid-cols-3 gap-3 max-w-[520px]">
                {[
                  { k: '100+', l: 'Travelers assisted' },
                  { k: '98%', l: 'Documentation accuracy' },
                  { k: '24/7', l: 'Support & updates' },
                ].map(s => (
                  <div key={s.k} className="bg-white rounded-2xl border border-slate-100 p-3 text-center shadow-sm">
                    <div className="font-black text-[#0a1931] text-[18px] leading-none">{s.k}</div>
                    <div className="text-[11px] tracking-wide font-semibold text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative lg:h-[560px]">
              <div className="relative rounded-[28px] overflow-hidden bg-[#0a1931] shadow-2xl h-[420px] lg:h-full">
                <img src="/images/hero.jpg" alt="Premium travel" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931]/70 via-[#0a1931]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 to-transparent" />

                {/* floating departure card */}
                <div className="absolute top-4 left-4 right-4 lg:left-4 lg:right-auto bg-white rounded-2xl p-3 flex items-center gap-3 shadow-xl max-w-[340px]">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#1e3a8a]"><Plane size={18} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] tracking-widest font-bold text-slate-400">NEXT DEPARTURE</div>
                    <div className="font-bold text-[#0a1931] text-sm leading-none mt-0.5">Entebbe → Dubai • 06:40</div>
                    <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Confirmed & ticketed</div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-[10px] tracking-widest font-bold text-slate-400">GATE</div>
                    <div className="font-black text-[#0a1931]">A12</div>
                  </div>
                </div>

                {/* bottom info */}
                <div className="absolute bottom-0 inset-x-0 p-4 lg:p-5">
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between shadow-xl">
                    <div>
                      <div className="text-[11px] tracking-widest font-bold text-slate-400">ANY DESTINATION. ANY PURPOSE.</div>
                      <div className="font-black text-[#0a1931] text-[15px]">ONE TRUSTED PARTNER — 23KONEKT</div>
                    </div>
                    <button onClick={() => scrollTo('contact')} className="hidden sm:flex w-11 h-11 rounded-full bg-[#c9a227] text-white items-center justify-center hover:bg-[#b8941f] transition-colors">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="bg-[#0a1931] text-white text-[11px] font-bold tracking-widest px-3 py-2 rounded-full flex items-center gap-2"><Luggage size={14} /> Premium Service</span>
                    <span className="bg-white/90 backdrop-blur text-[#0a1931] text-[11px] font-bold tracking-widest px-3 py-2 rounded-full">UGANDA • GLOBAL</span>
                  </div>
                </div>

                {/* gold accent line */}
                <div className="absolute top-0 right-6 w-[3px] h-20 bg-[#c9a227] rounded-full hidden lg:block" />
              </div>

              {/* side passport card - desktop */}
              <div className="hidden lg:flex absolute -left-6 bottom-10 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 items-center gap-3 w-[260px]">
                <img src="/images/passport-doc.jpg" alt="passport" className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#c9a227]">PASSPORT READY</div>
                  <div className="font-bold text-[#0a1931] text-sm leading-tight">Express assistance in 3–4 days*</div>
                  <div className="text-[11px] text-slate-500">*Guidance & submission support</div>
                </div>
              </div>
            </div>
          </div>

          {/* trust logobar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-[11px] tracking-[0.18em] font-bold text-slate-400">
            <span className="hidden sm:inline">TRUSTED BY TRAVELERS FLYING TO</span>
            <div className="flex flex-wrap gap-3 sm:gap-6 text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> DUBAI</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> LONDON</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> ISTANBUL</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> NEW YORK</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> CAPE TOWN</span>
            </div>
            <span className="text-[#1e3a8a] flex items-center gap-1">IATA • ICAO • UTB <Award size={14} /></span>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section ref={servicesRef} id="services" className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#c9a227] font-bold tracking-[0.18em] text-[11px]"><span className="w-8 h-[2px] bg-[#c9a227]" /> OUR SERVICES</div>
              <h2 className="mt-2 font-black text-[#0a1931] text-[32px] lg:text-[42px] leading-none tracking-tight">Everything for a <span className="text-[#1e3a8a]">smooth journey</span></h2>
              <p className="mt-3 text-slate-600 max-w-[560px] text-[14.5px] leading-6">Professional support across documentation, bookings and planning — with transparent processes and personalized care.</p>
            </div>
            <button onClick={() => {
              document.getElementById('services-detail')?.scrollIntoView({ behavior: 'smooth' })
            }} className="hidden lg:flex items-center gap-2 text-[#0a1931] font-bold text-sm border border-slate-200 px-5 py-3 rounded-full hover:bg-slate-50">
              View all services <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {servicesPreview.map((s) => (
              <motion.div key={s.id} whileHover={{ y: -4 }} className="group relative bg-white rounded-[22px] border border-slate-100 p-6 shadow-[0_8px_30px_rgba(10,25,49,0.06)] hover:shadow-[0_16px_40px_rgba(10,25,49,0.12)] transition-all overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.04] transition-opacity`} />
                <div className="w-12 h-12 rounded-2xl bg-[#f1f5f9] group-hover:bg-[#0a1931] flex items-center justify-center text-[#0a1931] group-hover:text-white transition-colors">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-[#0a1931] text-[16px]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                <button onClick={() => document.getElementById('services-detail')?.scrollIntoView({ behavior: 'smooth' })} className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-[#1e3a8a] group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fffbeb] border border-[#fde68a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-[#c9a227]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="py-12 lg:py-14 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#0a1931]">
              <Sparkles size={14} className="text-[#c9a227]" /> WE PLAN TRIPS FOR EVERY PURPOSE
            </div>
            <h2 className="mt-4 font-black text-[#0a1931] text-[30px] lg:text-[40px] leading-none tracking-tight">Travel shaped <span className="text-[#c9a227]">around you</span></h2>
            <p className="mt-3 text-slate-600 text-[14.5px]">Whether it is a honeymoon, board meeting or study exchange — we design the details.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 lg:gap-6">
            {purposes.map((p) => (
              <div key={p.title} className="group relative rounded-[24px] overflow-hidden bg-white shadow-sm border border-slate-100">
                <div className="h-[220px] lg:h-[260px] relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-bold text-[#0a1931]">
                    <p.icon size={14} className="text-[#1e3a8a]" /> {p.title.split(' ')[0]}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0a1931]">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-6">{p.desc}</p>
                  <button onClick={() => scrollTo('contact')} className="mt-4 w-full bg-[#0a1931] text-white py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-[#132a52] transition-colors">
                    Tell us where you want to go <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#0a1931] rounded-[20px] p-4 lg:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center"><Navigation size={18} className="text-white" /></div>
              <div>
                <div className="font-bold">Not sure where to start?</div>
                <div className="text-sm text-white/70">Share your destination, dates and budget — we will craft options within hours.</div>
              </div>
            </div>
            <button onClick={() => scrollTo('contact')} className="bg-white text-[#0a1931] px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap flex items-center gap-2">
              TELL US WHERE YOU WANT TO GO <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
            <div>
              <div className="text-[#c9a227] font-bold tracking-[0.18em] text-[11px] flex items-center gap-2"><span className="w-8 h-[2px] bg-[#c9a227]" /> WHY CHOOSE 23KONEKT?</div>
              <h2 className="mt-3 font-black text-[#0a1931] text-[32px] lg:text-[42px] leading-[0.95] tracking-tight">A partner you can <span className="text-[#1e3a8a]">trust</span> with every mile</h2>
              <p className="mt-3 text-slate-600 leading-7 max-w-[560px]">We combine professionalism, transparency and genuine care — so you travel with confidence, not complexity.</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {whyChoose.map((w) => (
                  <div key={w.title} className="flex gap-3 bg-[#f8fafc] rounded-2xl p-4 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#1e3a8a] shrink-0">
                      <w.icon size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0a1931] text-sm">{w.title}</div>
                      <div className="text-xs text-slate-600 leading-5 mt-1">{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2.5 rounded-full text-sm font-semibold">
                  <Check size={16} /> Transparent fees, no hidden costs
                </div>
                <div className="flex items-center gap-2 bg-[#eff6ff] border border-blue-100 text-[#1e3a8a] px-4 py-2.5 rounded-full text-sm font-semibold">
                  <Headphones size={16} /> Dedicated travel consultant
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] overflow-hidden bg-slate-100 h-[420px] lg:h-[520px] relative">
                <img src="/images/hotel-luxury.jpg" alt="premium travel" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-[#0a1931]"><Quote size={16} className="text-[#c9a227]" /> Client Stories</div>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#0a1931]" />
                      <span className="w-2 h-2 rounded-full bg-slate-200" />
                      <span className="w-2 h-2 rounded-full bg-slate-200" />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-1 text-[#c9a227]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="#c9a227" />)}<span className="ml-2 text-xs font-bold text-slate-500">4.9 • 312 reviews</span></div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">“From passport renewal to hotel check-in, 23Konekt handled everything. I just enjoyed the journey.” — <span className="font-semibold">Amina, London</span></p>
                </div>
              </div>
              {/* floating stat */}
              <div className="absolute -top-3 -right-3 lg:right-6 bg-[#c9a227] text-white rounded-2xl px-5 py-3 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Award size={20} /></div>
                <div>
                  <div className="font-black leading-none text-lg">98%</div>
                  <div className="text-[11px] tracking-widest font-bold opacity-90">CLIENT SATISFACTION</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-100 rounded-2xl p-3 shadow-xl hidden lg:flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=15" className="w-10 h-10 rounded-full object-cover" alt="" />
                <div>
                  <div className="font-bold text-[#0a1931] text-sm">Live support</div>
                  <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Online now</div>
                </div>
                <button onClick={() => window.open('https://wa.me/256781387943', '_blank')} className="ml-2 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center"><MessageCircle size={14} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-12 lg:py-16 bg-[#0a1931] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a5a]/40 to-transparent" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1e3a8a]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#c9a227]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[#c9a227] font-bold tracking-[0.18em] text-[11px] flex items-center gap-2"><span className="w-8 h-[2px] bg-[#c9a227]" /> DESTINATIONS</div>
              <h2 className="mt-3 font-black text-white text-[32px] lg:text-[44px] leading-none tracking-tight">WHERE WILL YOUR <span className="text-[#c9a227]">JOURNEY</span> TAKE YOU?</h2>
              <p className="mt-3 text-white/70 max-w-[620px] text-[14.5px]">Travel assistance and documentation support for destinations around the world. We guide preparation — visa decisions remain with immigration authorities.</p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest border border-white/10 rounded-full px-4 py-2">
              <Globe2 size={14} /> 6 CONTINENTS • 40+ DESTINATIONS
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {destinations.map((d) => (
              <div key={d.name} className="group relative rounded-[22px] overflow-hidden bg-white/5 backdrop-blur border border-white/10 h-[220px] lg:h-[240px]">
                <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931] via-[#0a1931]/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-white text-[#0a1931] text-[11px] font-black tracking-widest px-3 py-1.5 rounded-full">{d.flag} {d.name.toUpperCase()}</div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="font-bold text-white">{d.spots}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={() => scrollTo('contact')} className="bg-white/95 hover:bg-white text-[#0a1931] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors">
                      Explore support <ArrowRight size={12} />
                    </button>
                    <span className="text-white/70 text-[11px] font-semibold hidden sm:inline">• Documentation & itinerary help</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-4 flex flex-col lg:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-[#c9a227]"><ShieldCheck size={16} /></span>
              <span className="text-white/90"><span className="font-bold">Important:</span> We never imply guaranteed visa approval. We prepare you thoroughly.</span>
            </div>
            <button onClick={() => scrollTo('contact')} className="bg-[#c9a227] hover:bg-[#b8941f] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2">
              Check requirements <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="text-[#c9a227] font-bold tracking-[0.18em] text-[11px] flex items-center gap-2"><span className="w-8 h-[2px] bg-[#c9a227]" /> ABOUT 23KONEKT</div>
              <h2 className="mt-3 font-black text-[#0a1931] text-[32px] lg:text-[42px] leading-none tracking-tight">Simplifying travel <span className="text-[#1e3a8a]">from Uganda to the world</span></h2>
              <p className="mt-4 text-slate-600 leading-7">
                23Konekt Tours & Travel is a Uganda-based travel company dedicated to making your journey simple, smooth and stress-free. We help customers simplify travel through documentation support, visa processing assistance, flights, accommodation, transportation, insurance and customized travel planning — all under one trusted roof.
              </p>
              <p className="mt-4 text-slate-600 leading-7">
                Whether you are traveling for holiday, business, study, family or a special occasion, our team provides personalized, end-to-end support with professionalism, transparency and convenience. Tell us where you want to go — we handle the details.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0a1931] text-white flex items-center justify-center"><Award size={18} /></div>
                  <div className="mt-3 font-black text-[#0a1931] tracking-wide text-sm">OUR MISSION</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">To simplify travel by providing reliable, professional and personalized travel solutions.</p>
                </div>
                <div className="bg-[#0a1931] rounded-2xl p-5 text-white relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227] flex items-center justify-center"><Globe2 size={18} /></div>
                  <div className="mt-3 font-black tracking-wide text-sm">OUR VISION</div>
                  <p className="mt-2 text-sm leading-6 text-white/80">To become a trusted travel partner connecting people from Uganda and beyond to destinations around the world.</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="font-bold text-[#0a1931] text-sm tracking-wide">OUR VALUES</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Integrity', 'Professionalism', 'Reliability', 'Customer Care', 'Transparency', 'Convenience'].map(v => (
                    <span key={v} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-[#0a1931] flex items-center gap-2">
                      <Check size={14} className="text-emerald-500" /> {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] overflow-hidden bg-slate-100 p-2 shadow-xl">
                <div className="rounded-[20px] overflow-hidden relative h-[360px] bg-[#0a1931]">
                  <img src="/images/destination-uk.jpg" alt="about" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-black text-[#0a1931]">Kampala • Entebbe</div>
                      <div className="text-xs text-slate-500">Head office support & airport coordination</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#1e3a8a]"><MapPin size={18} /></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: '500+', l: 'Visas assisted' },
                  { k: '1.2k+', l: 'Flights booked' },
                  { k: '4.9★', l: 'Average rating' },
                ].map(s => (
                  <div key={s.k} className="bg-white border border-slate-100 rounded-2xl p-3 text-center shadow-sm">
                    <div className="font-black text-[#0a1931]">{s.k}</div>
                    <div className="text-[11px] font-bold tracking-widest text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#fffbeb] border border-amber-100 rounded-2xl p-4 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white shrink-0"><Sparkles size={16} /></div>
                <p className="text-sm leading-6 text-amber-900"><span className="font-bold">Promise:</span> No jargon, no hidden steps — just clear guidance, timely updates and respectful service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section id="services-detail" className="py-12 lg:py-16 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#0a1931]">WORKING TOGETHER TO MAKE YOUR JOURNEY EASIER</div>
            <h2 className="mt-4 font-black text-[#0a1931] text-[30px] lg:text-[44px] leading-none tracking-tight">Detailed <span className="text-[#1e3a8a]">services</span> — clear, compliant, caring</h2>
            <p className="mt-3 text-slate-600">Explore what we do and how we help. Every service is delivered with checklists, reviews and updates — so you always know what is next.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4 lg:gap-5">
            {detailedServices.map((d) => (
              <div key={d.id} className="bg-white rounded-[22px] border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a1931] text-white flex items-center justify-center shrink-0">
                    <d.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-[#0a1931] leading-none">{d.title}</div>
                    <div className="text-xs font-bold tracking-widest text-[#c9a227] mt-1">{d.subtitle.toUpperCase()}</div>
                    <ul className="mt-4 space-y-2">
                      {d.points.map(p => (
                        <li key={p} className="flex gap-2 text-sm text-slate-700 leading-6">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                    {d.note && (
                      <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-xs leading-5 text-amber-900 flex gap-2">
                        <ShieldCheck size={14} className="text-amber-600 shrink-0 mt-0.5" /> {d.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#0a1931] rounded-[20px] p-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Phone size={18} /></div>
              <div>
                <div className="font-bold">Need a service not listed?</div>
                <div className="text-sm text-white/70">Pilgrimages, honeymoons, MICE — tell us your purpose, we will customize.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://wa.me/256781387943" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2"><MessageCircle size={16} /> WhatsApp</a>
              <button onClick={() => scrollTo('contact')} className="bg-white text-[#0a1931] px-6 py-3 rounded-full font-bold text-sm">Get a quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-8 lg:py-10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="relative rounded-[28px] overflow-hidden bg-[#0a1931] p-6 lg:p-10">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#102a5a] via-[#0a1931] to-[#0a1931]" />
              <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-[#1e3a8a]/30 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] bg-[#c9a227]/15 rounded-full blur-3xl" />
            </div>
            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest"><Sparkles size={12} className="text-[#c9a227]" /> READY TO START YOUR JOURNEY?</div>
                <h3 className="mt-4 font-black text-[30px] lg:text-[40px] leading-none tracking-tight">Let us take care of the details <span className="text-[#c9a227]">while you enjoy the experience.</span></h3>
                <p className="mt-3 text-white/70 max-w-xl">From document checks to boarding passes — one team, one plan, one trusted partner. Tell us your dates and destination today.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => scrollTo('contact')} className="bg-[#c9a227] hover:bg-[#b8941f] text-white px-7 py-3.5 rounded-full font-bold flex items-center gap-2">START PLANNING <ArrowRight size={16} /></button>
                  <a href="https://wa.me/256781387943?text=Hello%2023Konekt%20-%20I%20want%20to%20plan%20a%20trip" target="_blank" className="bg-white text-[#0a1931] px-7 py-3.5 rounded-full font-bold flex items-center gap-2"><MessageCircle size={16} /> Chat on WhatsApp</a>
                </div>
              </div>
              <div className="bg-white rounded-[20px] p-4 lg:p-5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="font-black text-[#0a1931]">Quick inquiry</div>
                  <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full font-bold">Reply in ~2 hrs</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {[
                    { icon: Plane, label: 'Flights' },
                    { icon: FileText, label: 'Visas' },
                    { icon: Building2, label: 'Hotels' },
                  ].map(x => (
                    <div key={x.label} className="bg-[#f8fafc] border border-slate-100 rounded-xl p-3">
                      <x.icon size={18} className="mx-auto text-[#1e3a8a]" />
                      <div className="text-xs font-bold text-[#0a1931] mt-1">{x.label}</div>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollTo('contact')} className="mt-4 w-full bg-[#0a1931] text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2">Plan my trip <ArrowRight size={14} /></button>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500"><Phone size={12} /> +256 781 387 943 • <Mail size={12} /> 23Konekt@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 lg:py-16 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 items-start">
            {/* left info */}
            <div>
              <div className="text-[#c9a227] font-bold tracking-[0.18em] text-[11px] flex items-center gap-2"><span className="w-8 h-[2px] bg-[#c9a227]" /> CONTACT US</div>
              <h2 className="mt-3 font-black text-[#0a1931] text-[32px] lg:text-[40px] leading-none tracking-tight">We are here to <span className="text-[#1e3a8a]">make it easy</span></h2>
              <p className="mt-3 text-slate-600 leading-7 max-w-[520px]">Reach our travel consultants for documentation, bookings or full trip planning. We respond quickly and guide you step-by-step.</p>

              <div className="mt-6 bg-white rounded-[22px] border border-slate-100 p-5 shadow-sm">
                <div className="font-black text-[#0a1931]">23Konekt Tours & Travel</div>
                <div className="text-sm font-bold tracking-widest text-[#c9a227] mt-1">CONNECTING YOU TO THE WORLD</div>
                <div className="mt-4 space-y-3">
                  <a href="tel:+256781387943" className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 rounded-xl p-3 hover:bg-white transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-[#0a1931] text-white flex items-center justify-center"><Phone size={16} /></span>
                    <div><div className="text-xs font-bold tracking-widest text-slate-400">CALL / WHATSAPP</div><div className="font-bold text-[#0a1931]">+256 781 387 943</div></div>
                    <ArrowUpRight size={16} className="ml-auto text-slate-400" />
                  </a>
                  <a href="tel:+256752250336" className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 rounded-xl p-3 hover:bg-white transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0a1931] flex items-center justify-center"><Phone size={16} /></span>
                    <div><div className="text-xs font-bold tracking-widest text-slate-400">ALTERNATE LINE</div><div className="font-bold text-[#0a1931]">+256 752 250 336</div></div>
                  </a>
                  <a href="mailto:23Konekt@gmail.com" className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 rounded-xl p-3 hover:bg-white transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#1e3a8a] flex items-center justify-center"><Mail size={16} /></span>
                    <div><div className="text-xs font-bold tracking-widest text-slate-400">EMAIL</div><div className="font-bold text-[#0a1931]">23Konekt@gmail.com</div></div>
                  </a>
                  <div className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 rounded-xl p-3">
                    <span className="w-10 h-10 rounded-xl bg-[#fffbeb] border border-amber-100 text-[#c9a227] flex items-center justify-center"><MapPin size={16} /></span>
                    <div><div className="text-xs font-bold tracking-widest text-slate-400">BASE</div><div className="font-bold text-[#0a1931]">Kampala, Uganda — Global Support</div></div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a href="https://wa.me/256781387943" target="_blank" className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2"><MessageCircle size={16} /> WhatsApp chat</a>
                  <a href="tel:+256781387943" className="flex-1 bg-[#0a1931] hover:bg-[#132a52] text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2"><Phone size={16} /> Click to call</a>
                </div>
                <a href="mailto:23Konekt@gmail.com" className="mt-2 w-full bg-white border border-slate-200 text-[#0a1931] py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50"><Mail size={16} /> Send email</a>
              </div>

              <div className="mt-4 rounded-[22px] overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="h-[220px] relative">
                  <iframe
                    title="map"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.743!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f51509de1%3A0xea123456789!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000"
                  />
                </div>
                <div className="p-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#0a1931] flex items-center gap-1.5"><MapPin size={14} className="text-[#c9a227]" /> Kampala, Uganda</span>
                  <a href="https://maps.google.com/?q=Kampala,Uganda" target="_blank" className="text-[#1e3a8a] font-bold flex items-center gap-1">Open in Maps <ArrowUpRight size={12} /></a>
                </div>
              </div>

              <div className="mt-4 flex gap-2 text-xs font-bold">
                <a href="#" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center"><Facebook size={16} /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white flex items-center justify-center"><Instagram size={16} /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-black">Tik</a>
                <a href="https://wa.me/256781387943" target="_blank" className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center"><MessageCircle size={16} /></a>
                <span className="ml-2 flex items-center text-slate-500">Follow for travel tips & updates</span>
              </div>
            </div>

            {/* form */}
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-xl p-5 lg:p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-[#0a1931] text-[18px]">Send an inquiry</h3>
                <span className="text-[11px] font-bold tracking-widest bg-[#f1f5f9] border border-slate-200 px-3 py-1.5 rounded-full text-slate-600">Response within 2 hours</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">Tell us about your trip and we will prepare options and checklists.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold tracking-wide text-slate-700">Full Name *</label>
                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. John Doe" className={`mt-1.5 w-full rounded-xl border ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-[#f8fafc] focus:bg-white'} px-4 py-3 text-sm outline-none focus:border-[#1e3a8a] focus:ring-4 focus:ring-[#1e3a8a]/10`} />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-slate-700">Phone Number *</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+256 7xx xxx xxx" className={`mt-1.5 w-full rounded-xl border ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-[#f8fafc] focus:bg-white'} px-4 py-3 text-sm outline-none focus:border-[#1e3a8a] focus:ring-4 focus:ring-[#1e3a8a]/10`} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-wide text-slate-700">Email *</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className={`mt-1.5 w-full rounded-xl border ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-[#f8fafc] focus:bg-white'} px-4 py-3 text-sm outline-none focus:border-[#1e3a8a] focus:ring-4 focus:ring-[#1e3a8a]/10`} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold tracking-wide text-slate-700">Service Required *</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={`mt-1.5 w-full rounded-xl border ${formErrors.service ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-[#f8fafc] focus:bg-white'} px-4 py-3 text-sm outline-none focus:border-[#1e3a8a]`}>
                      <option value="">Select service</option>
                      <option>Passport Services — Ordinary & Express</option>
                      <option>Visa Processing</option>
                      <option>Travel Documentation</option>
                      <option>Flight & Hotel Booking</option>
                      <option>Car Rentals & Drivers</option>
                      <option>Travel Insurance</option>
                      <option>Full Travel Planning</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-slate-700">Destination</label>
                    <input value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })} placeholder="e.g. Dubai, London, New York" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f8fafc] focus:bg-white px-4 py-3 text-sm outline-none focus:border-[#1e3a8a] focus:ring-4 focus:ring-[#1e3a8a]/10" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold tracking-wide text-slate-700 flex items-center gap-1"><Calendar size={12} /> Travel Date</label>
                    <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f8fafc] focus:bg-white px-4 py-3 text-sm outline-none focus:border-[#1e3a8a]" />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-slate-700">Number of Travelers</label>
                    <select value={form.travelers} onChange={e => setForm({ ...form, travelers: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f8fafc] focus:bg-white px-4 py-3 text-sm outline-none focus:border-[#1e3a8a]">
                      {['1', '2', '3', '4', '5', '6+ Group'].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-wide text-slate-700">Message *</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell us about your travel purpose, budget and preferred dates..." className={`mt-1.5 w-full rounded-xl border ${formErrors.message ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-[#f8fafc] focus:bg-white'} px-4 py-3 text-sm outline-none focus:border-[#1e3a8a] focus:ring-4 focus:ring-[#1e3a8a]/10 resize-none`} />
                </div>

                <button type="submit" className="w-full bg-[#c9a227] hover:bg-[#b8941f] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-200 transition-colors">
                  SEND INQUIRY <Send size={16} />
                </button>
                <p className="text-center text-[11px] leading-4 text-slate-500">By submitting, you agree to our Privacy Policy and Terms. Visa approvals are decided by embassies and are not guaranteed.</p>

                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold"><ShieldCheck size={12} /> Secure & confidential</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#eff6ff] border border-blue-100 text-[#1e3a8a] px-3 py-1.5 rounded-full text-xs font-bold"><Clock3 size={12} /> Avg. reply 90 min</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-6 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0a1931] text-white flex items-center justify-center"><Mail size={16} /></div>
            <div>
              <div className="font-bold text-[#0a1931]">Get travel updates & visa tips</div>
              <div className="text-sm text-slate-500">No spam — only useful guidance and offers.</div>
            </div>
          </div>
          <form onSubmit={handleNewsletter} className="flex gap-2 w-full lg:w-auto">
            <input value={newsletter} onChange={e => setNewsletter(e.target.value)} placeholder="Enter your email" className="flex-1 lg:w-[320px] rounded-full border border-slate-200 bg-[#f8fafc] px-5 py-3 text-sm outline-none focus:border-[#1e3a8a] focus:bg-white" />
            <button type="submit" className="bg-[#0a1931] hover:bg-[#132a52] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shrink-0">
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070f24] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1931] to-[#070f24]" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#1e3a8a]/15 rounded-full blur-3xl" />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-6 pt-10 pb-6">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                  <span className="font-black text-[#0a1931] text-[16px]">23<span className="text-[#c9a227]">K</span></span>
                </div>
                <div>
                  <div className="font-black tracking-tight leading-none">23KONEKT TOURS & TRAVEL</div>
                  <div className="text-[10px] tracking-[0.2em] text-[#c9a227] font-bold">CONNECTING YOU TO THE WORLD</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/65 max-w-[380px]">Your trusted partner for passports, visas, flights, stays, transport, insurance and personalized travel planning — from Uganda to the world.</p>
              <div className="mt-5 flex gap-2">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#0a1931] flex items-center justify-center transition-colors"><Facebook size={16} /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#0a1931] flex items-center justify-center transition-colors"><Instagram size={16} /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#0a1931] flex items-center justify-center transition-colors"><Play size={14} /></a>
                <a href="https://wa.me/256781387943" target="_blank" className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center"><MessageCircle size={16} /></a>
              </div>
            </div>

            <div>
              <div className="font-bold tracking-widest text-[12px] text-white/90">EXPLORE</div>
              <div className="mt-4 space-y-2.5 text-sm text-white/65">
                <button onClick={() => scrollTo('home')} className="block hover:text-white">Home</button>
                <button onClick={() => scrollTo('about')} className="block hover:text-white">About Us</button>
                <button onClick={() => scrollTo('services')} className="block hover:text-white">Services</button>
                <button onClick={() => scrollTo('contact')} className="block hover:text-white">Contact Us</button>
                <button onClick={() => setShowPrivacy(true)} className="block hover:text-white">Privacy Policy</button>
                <button onClick={() => setShowTerms(true)} className="block hover:text-white">Terms & Conditions</button>
              </div>
            </div>

            <div>
              <div className="font-bold tracking-widest text-[12px] text-white/90">SERVICES</div>
              <div className="mt-4 space-y-2 text-sm text-white/60">
                <div>Passport Assistance</div>
                <div>Visa Processing</div>
                <div>Flight & Hotel Booking</div>
                <div>Car Rentals & Drivers</div>
                <div>Travel Insurance</div>
                <div>Travel Planning</div>
              </div>
            </div>

            <div>
              <div className="font-bold tracking-widest text-[12px] text-white/90">CONTACT</div>
              <div className="mt-4 space-y-3 text-sm">
                <a href="tel:+256781387943" className="flex items-center gap-2 text-white hover:text-[#c9a227]"><Phone size={14} className="text-[#c9a227]" /> +256 781 387 943</a>
                <a href="tel:+256752250336" className="flex items-center gap-2 text-white/80 hover:text-white"><Phone size={14} className="text-white/40" /> +256 752 250 336</a>
                <a href="mailto:23Konekt@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white"><Mail size={14} className="text-white/40" /> 23Konekt@gmail.com</a>
                <div className="flex items-center gap-2 text-white/60"><MapPin size={14} className="text-white/40" /> Kampala, Uganda</div>
              </div>
              <div className="mt-4 bg-white/10 backdrop-blur border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center"><MessageCircle size={14} className="text-white" /></div>
                <div className="text-xs">
                  <div className="font-bold text-white">Need fast help?</div>
                  <div className="text-white/60">Chat on WhatsApp — instant reply</div>
                </div>
                <a href="https://wa.me/256781387943" target="_blank" className="ml-auto bg-white text-[#0a1931] px-3 py-1.5 rounded-full text-xs font-bold">Chat</a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-white/50">© {new Date().getFullYear()} 23Konekt Tours & Travel. All rights reserved. • Designed for global travelers.</div>
            <div className="font-black tracking-[0.14em] text-[#c9a227] text-center">ANY DESTINATION. ANY PURPOSE. ONE TRUSTED PARTNER — 23KONEKT.</div>
          </div>
          <div className="mt-3 text-center text-[11px] leading-4 text-white/35 max-w-3xl mx-auto">
            Visa and entry decisions are made solely by embassies and immigration authorities. 23Konekt provides professional assistance with preparation and submission — approval is never guaranteed. Always verify requirements with the relevant embassy.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/256781387943?text=Hello%2023Konekt%20Tours%20%26%20Travel%20-%20I%27d%20like%20to%20plan%20a%20trip" target="_blank"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white shadow-[0_12px_30px_rgba(16,185,129,0.45)] flex items-center justify-center hover:bg-emerald-600 transition-colors">
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 left-5 z-40 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center text-[#0a1931] hover:bg-slate-50 hidden lg:flex">
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0a1931] text-white px-5 py-3 rounded-full shadow-2xl text-sm font-medium flex items-center gap-2 max-w-[90vw]">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie */}
      <AnimatePresence>
        {!cookieDismissed && (
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-3">
              <div className="flex gap-3 text-sm">
                <span className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0a1931] shrink-0"><ShieldCheck size={16} /></span>
                <p className="text-slate-600 leading-5 max-w-2xl">We use cookies to improve your experience, analyze traffic and personalize support. By browsing, you agree to our <button onClick={() => setShowPrivacy(true)} className="underline font-semibold text-[#0a1931]">Privacy Policy</button> and <button onClick={() => setShowTerms(true)} className="underline font-semibold text-[#0a1931]">Terms</button>.</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => setCookieDismissed(true)} className="bg-[#0a1931] text-white px-6 py-2.5 rounded-full font-bold text-sm">Accept</button>
                <button onClick={() => setCookieDismissed(true)} className="bg-white border border-slate-200 text-[#0a1931] px-6 py-2.5 rounded-full font-bold text-sm">Decline</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} onClick={e => e.stopPropagation()} className="bg-white rounded-[20px] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-black text-[#0a1931] text-lg">Privacy Policy</h3>
                <button onClick={() => setShowPrivacy(false)} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><X size={16} /></button>
              </div>
              <div className="p-6 overflow-y-auto space-y-4 text-sm leading-6 text-slate-600">
                <p>At 23Konekt Tours & Travel, we respect your privacy. Information collected via inquiry forms, WhatsApp, email and phone is used solely to provide travel assistance, process bookings and communicate updates.</p>
                <p><strong className="text-[#0a1931]">Data we collect:</strong> Name, contact details, travel preferences, passport/visa-related documents you voluntarily share, and communication history.</p>
                <p><strong className="text-[#0a1931]">How we use it:</strong> To prepare applications, book flights/hotels/cars, arrange insurance, and provide personalized travel planning. We do not sell your data.</p>
                <p><strong className="text-[#0a1931]">Sharing:</strong> Only with airlines, hotels, insurers, embassies or service providers necessary to fulfill your request, and always with care.</p>
                <p><strong className="text-[#0a1931]">Retention & rights:</strong> You may request access, correction or deletion of your data at 23Konekt@gmail.com.</p>
              </div>
              <div className="p-4 border-t border-slate-100 flex justify-end"><button onClick={() => setShowPrivacy(false)} className="bg-[#0a1931] text-white px-6 py-2.5 rounded-full font-bold text-sm">Close</button></div>
            </motion.div>
          </motion.div>
        )}
        {showTerms && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowTerms(false)}>
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} onClick={e => e.stopPropagation()} className="bg-white rounded-[20px] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-black text-[#0a1931] text-lg">Terms & Conditions</h3>
                <button onClick={() => setShowTerms(false)} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><X size={16} /></button>
              </div>
              <div className="p-6 overflow-y-auto space-y-4 text-sm leading-6 text-slate-600">
                <p>By using 23Konekt Tours & Travel services and website, you agree to these terms. We provide assistance with travel documentation, bookings and planning. Final decisions on passports, visas and entry remain with government and immigration authorities — approval is never guaranteed.</p>
                <p><strong className="text-[#0a1931]">Fees & payments:</strong> Service fees are communicated transparently before commitment. Third-party costs (embassy fees, airline fares, hotel rates) are subject to provider terms.</p>
                <p><strong className="text-[#0a1931]">Responsibilities:</strong> Clients must provide accurate information and valid documents. Itineraries and bookings are confirmed only upon payment and provider confirmation.</p>
                <p><strong className="text-[#0a1931]">Liability:</strong> While we exercise professional care, 23Konekt is not liable for delays, denials or changes by airlines, embassies or other third parties.</p>
              </div>
              <div className="p-4 border-t border-slate-100 flex justify-end"><button onClick={() => setShowTerms(false)} className="bg-[#0a1931] text-white px-6 py-2.5 rounded-full font-bold text-sm">Close</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
