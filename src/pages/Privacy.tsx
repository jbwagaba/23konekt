import { Link } from "react-router-dom";
import { Reveal } from "../components/ui";
import { PageHero, FinalCTA } from "../components/sections";
import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="PRIVACY POLICY." sub="How 23Konekt Tours & Travel collects, uses and protects your personal information." img="/images/passport.jpg" />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 prose-headings:font-display">
          <Reveal>
            <div className="rounded-3xl border border-mist-200 bg-mist-50 p-8 sm:p-10 space-y-6 text-[15px] leading-relaxed text-navy-900/75">
              <p className="flex items-center gap-2 text-navy-950 font-bold"><ShieldCheck size={18} className="text-gold-600" /> Last updated: September 2026</p>
              <div><h2 className="font-display text-xl font-bold text-navy-950">1. Information we collect</h2><p className="mt-2">When you send an inquiry or use our services, we may collect your name, phone number, email address, travel details (destination, dates, number of travelers), passport/visa-related documents you share, and messages you send us.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">2. How we use it</h2><p className="mt-2">We use your information to respond to inquiries, prepare travel documentation, process bookings, arrange transport, insurance and itineraries, and to communicate service updates. We do not sell your personal data.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">3. Sharing</h2><p className="mt-2">With your consent, we share necessary details with airlines, hotels, embassies/immigration authorities, insurers and transport providers — only as required to deliver your requested services.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">4. Data security</h2><p className="mt-2">We handle documents with care, limit access to authorised staff, and retain records only as long as needed for service delivery and legal obligations.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">5. Cookies</h2><p className="mt-2">Our website may use basic cookies/local storage to remember preferences such as cookie consent. You can clear these in your browser at any time.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">6. Your rights</h2><p className="mt-2">You may request access, correction or deletion of your personal data at any time by contacting 23Konekt@gmail.com or +256 781 387 943.</p></div>
              <Link to="/contact" className="inline-flex mt-2 bg-navy-950 text-white text-[12px] font-extrabold tracking-[0.14em] px-7 py-3.5 rounded-full hover:bg-royal-700 transition">CONTACT US</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
