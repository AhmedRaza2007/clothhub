

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Crown,
  Send,
  Sparkles,
} from "lucide-react";


const footerLinks = {
  Collections: [
    { label: "Women's Collection", href: "#women" },
    { label: "Men's Collection", href: "#men" },
    { label: "Pakhtoon Heritage", href: "#pakhtoon" },
    { label: "Timeless 40+", href: "#mature" },
  ],
  Explore: [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#our-story" },
    { label: "Featured Pieces", href: "#featured" },
    { label: "All Collections", href: "#collections" },
  ],
  Support: [
    { label: "Contact Us", href: "mailto:clothhub@gmail.com" },
    { label: "Shipping Information", href: "#shipping" },
    { label: "Returns & Exchange", href: "#returns" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#160f0e] text-[#f5ecdf]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#722c3b]/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#b38a4e]/10 blur-[120px]" />
      </div>

      {/* Gold top border */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#d8b477] to-transparent" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-10 lg:px-16">
        {/* Newsletter */}
        <div className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.4em] text-[#d8b477]">
              <Sparkles size={15} />
              THE CLOTHHUB JOURNAL
            </div>

            <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl">
              A little elegance,
              <span className="block italic text-[#d8b477]">
                delivered to you.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Discover new collections, timeless inspiration and
              exclusive updates from CLOTHHUB.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubscribe}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <label
              htmlFor="newsletter-email"
              className="mb-4 block text-[10px] tracking-[0.25em] text-[#d8b477]"
            >
              JOIN OUR WORLD
            </label>

            <div className="flex flex-col gap-3 border-b border-[#d8b477]/50 pb-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email address"
                required
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                className="group flex items-center justify-center gap-3 bg-[#d8b477] px-7 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#211715] transition hover:bg-[#f0d49c]"
              >
                SUBSCRIBE
                <Send
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {subscribed && (
              <p className="mt-4 text-xs text-[#d8b477]">
                Thank you! Your subscription request has been received.
              </p>
            )}

            <p className="mt-4 text-[10px] text-white/30">
              By subscribing, you agree to receive CLOTHHUB updates.
            </p>
          </motion.form>
        </div>

        {/* Main footer */}
        <div className="grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <a href="#home" className="group inline-flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                className="flex h-16 w-16 items-center justify-center border border-[#d8b477]/60 text-[#d8b477]"
              >
                <Crown size={30} strokeWidth={1} />
              </motion.div>

              <div>
                <h2 className="font-serif text-4xl tracking-[0.12em]">
                  CLOTHHUB
                </h2>
                <p className="mt-1 text-[8px] tracking-[0.35em] text-[#d8b477]">
                  PAKISTANI FASHION HOUSE
                </p>
              </div>
            </a>

            <p className="mt-8 max-w-sm text-sm leading-8 text-white/45">
              Rooted in heritage. Designed for today. Bringing
              Pakistani elegance to every wardrobe.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/clothhub.digital/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#d8b477] transition hover:border-[#d8b477] hover:bg-[#d8b477] hover:text-[#211715]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="0.8" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#d8b477] transition hover:border-[#d8b477] hover:bg-[#d8b477] hover:text-[#211715]"
              >
                <span className="text-sm font-semibold">f</span>
              </a>

              <a
                href="mailto:clothhub@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#d8b477] transition hover:border-[#d8b477] hover:bg-[#d8b477] hover:text-[#211715]"
              >
                <Mail size={17} />
              </a>
            </div>

            <div className="mt-9">
              <p className="mb-3 text-[9px] font-semibold tracking-[0.25em] text-[#d8b477]">
                DOWNLOAD THE CLOTHHUB APP
              </p>
              <div className="grid max-w-[390px] grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="https://apps.apple.com/us/app/clothhub/id6823178759"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[58px] items-center justify-between border border-white/20 px-4 py-2 transition hover:border-[#d8b477] hover:bg-white/5"
                >
                  <span>
                    <span className="block text-[9px] text-white/50">
                      Download on the
                    </span>
                    <span className="text-sm font-semibold text-white">
                      App Store
                    </span>
                  </span>
                  <ArrowUpRight size={17} className="text-[#d8b477]" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.clothhubapp"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[58px] items-center justify-between border border-white/20 px-4 py-2 transition hover:border-[#d8b477] hover:bg-white/5"
                >
                  <span>
                    <span className="block text-[9px] text-white/50">
                      Get it on
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Google Play
                    </span>
                  </span>
                  <ArrowUpRight size={17} className="text-[#d8b477]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links], index) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <h3 className="mb-7 text-[10px] font-semibold tracking-[0.25em] text-[#d8b477]">
                {heading.toUpperCase()}
              </h3>

              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-[#e6c58e]"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid gap-6 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            <MapPin className="shrink-0 text-[#d8b477]" size={19} />
            <div>
              <p className="text-[9px] tracking-[0.2em] text-white/35">
                OUR ROOTS
              </p>
              <p className="mt-1 text-xs text-white/75">
                Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="shrink-0 text-[#d8b477]" size={19} />
            <div>
              <p className="text-[9px] tracking-[0.2em] text-white/35">
                EMAIL
              </p>
              <p className="mt-1 text-xs text-white/75">
                clothhub@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="shrink-0 text-[#d8b477]" size={19} />
            <div>
              <p className="text-[9px] tracking-[0.2em] text-white/35">
                CUSTOMER CARE
              </p>
              <p className="mt-1 text-xs text-white/75">
                Contact details coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-[9px] tracking-[0.15em] text-white/35">
            © {new Date().getFullYear()} CLOTHHUB. ALL RIGHTS RESERVED.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#d8b477]"
          >
            BACK TO TOP
            <ArrowUpRight size={14} />
          </motion.a>

          <p className="text-[9px] tracking-[0.15em] text-white/35">
            MADE WITH <span className="text-[#d8b477]">✦</span> IN PAKISTAN
          </p>
        </div>
      </div>
    </footer>
  );
}
