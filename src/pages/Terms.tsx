import { Link } from "react-router-dom";
import { Reveal } from "../components/ui";
import { PageHero, FinalCTA } from "../components/sections";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="TERMS & CONDITIONS." sub="The terms under which 23Konekt Tours & Travel provides travel assistance and planning services." img="/images/business.jpg" />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-mist-200 bg-mist-50 p-8 sm:p-10 space-y-6 text-[15px] leading-relaxed text-navy-900/75">
              <p className="flex items-center gap-2 text-navy-950 font-bold"><FileText size={18} className="text-gold-600" /> Last updated: September 2026</p>
              <div><h2 className="font-display text-xl font-bold text-navy-950">1. Our role</h2><p className="mt-2">23Konekt Tours &amp; Travel provides travel assistance: passport guidance, visa application preparation support, travel documentation, flight and hotel bookings, car rental coordination, travel insurance assistance and personalised travel planning.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">2. Visa decisions</h2><p className="mt-2 font-semibold text-navy-950">Visa decisions are made solely by the immigration authorities of each destination country. Approval is never guaranteed by any agent or consultant, including 23Konekt.</p><p className="mt-2">Service fees cover professional preparation, guidance and bookings — they are not payments for guaranteed outcomes and are generally non-refundable once work has commenced, except as agreed in writing.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">3. Client responsibilities</h2><p className="mt-2">You agree to provide true, accurate and complete information and genuine supporting documents. You are responsible for meeting deadlines, attending appointments and complying with the laws of destination countries.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">4. Third-party providers</h2><p className="mt-2">Flights, hotels, transport and insurance are delivered by third-party providers subject to their own terms, fare rules and cancellation policies, which we will explain before you confirm.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">5. Liability</h2><p className="mt-2">While we exercise professional care, 23Konekt is not liable for decisions of embassies, airlines or other authorities, including visa refusals, flight disruptions or policy changes beyond our control.</p></div>
              <div><h2 className="font-display text-xl font-bold text-navy-950">6. Contact</h2><p className="mt-2">Questions about these terms? Reach us on +256 781 387 943, +256 752 250 336 or 23Konekt@gmail.com.</p></div>
              <Link to="/contact" className="inline-flex mt-2 bg-navy-950 text-white text-[12px] font-extrabold tracking-[0.14em] px-7 py-3.5 rounded-full hover:bg-royal-700 transition">CONTACT US</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
