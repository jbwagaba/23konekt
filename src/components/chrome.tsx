import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";
import { WHATSAPP_LINK, PHONE_1_LINK } from "../data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="grid place-items-center w-11 h-11 rounded-full bg-navy-950 text-gold-300 border border-gold-500/40 shadow-xl hover:bg-navy-800 transition">
          <ArrowUp size={18} />
        </button>
      )}
      <a href={`tel:${PHONE_1_LINK}`} aria-label="Call 23Konekt" className="grid place-items-center w-12 h-12 rounded-full bg-royal-600 text-white shadow-xl hover:bg-royal-500 transition sm:hidden">
        <Phone size={20} />
      </a>
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="relative flex items-center gap-2.5 bg-[#1faa55] hover:bg-[#178a44] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_14px_36px_-8px_rgba(31,170,85,0.7)] transition-all hover:-translate-y-0.5">
        <span className="absolute inset-0 rounded-full bg-[#1faa55] animate-pulse-ring" aria-hidden />
        <MessageCircle size={22} className="relative" />
        <span className="relative text-sm font-bold hidden sm:block">Chat with us</span>
      </a>
    </div>
  );
}

export function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("k23-cookie")) {
        const t = setTimeout(() => setShow(true), 1800);
        return () => clearTimeout(t);
      }
    } catch { setShow(true); }
  }, []);
  if (!show) return null;
  const accept = () => { try { localStorage.setItem("k23-cookie", "1"); } catch {} setShow(false); };
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 rounded-2xl bg-navy-950 border border-gold-500/30 shadow-2xl p-5 text-white" style={{ backgroundColor: "rgba(5,11,26,0.97)" }} role="dialog" aria-label="Cookie notice">
      <p className="text-sm font-bold text-gold-300 tracking-wide">We value your privacy</p>
      <p className="text-[13px] text-white/70 mt-1.5 leading-relaxed">We use cookies to improve your browsing experience and respond to inquiries faster. See our <a href="/privacy" className="underline text-gold-300">Privacy Policy</a>.</p>
      <div className="flex gap-2.5 mt-4">
        <button onClick={accept} className="flex-1 bg-gold-400 text-navy-950 text-[12px] font-extrabold tracking-[0.12em] rounded-full py-2.5 hover:bg-gold-300 transition">ACCEPT</button>
        <button onClick={accept} className="flex-1 border border-white/20 text-[12px] font-bold tracking-[0.12em] rounded-full py-2.5 hover:bg-white/10 transition">DECLINE</button>
      </div>
    </div>
  );
}
