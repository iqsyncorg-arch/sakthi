import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONES, CONTACT_LOCATION } from "../../data/brand";
import { Logo } from "./Logo";
import { scrollToSection } from "../../lib/scroll-to-section";

const quickLinks = [
  { kind: "scroll" as const, target: "home", label: "Home" },
  { kind: "route" as const, to: "/about", label: "About Us" },
  { kind: "route" as const, to: "/courses", label: "Courses" },
  { kind: "route" as const, to: "/privacy-policy", label: "Privacy Policy" },
  { kind: "route" as const, to: "/contact", label: "Contact Us" },
];

export function Footer() {
  const social = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer id="contact" className="relative mt-24 text-slate-300 scroll-mt-28">
      <div className="gradient-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-flex rounded-xl bg-white px-3 py-2.5 w-fit">
              <Logo variant="default" size="md" showTagline />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              A global academy committed to academic excellence, skill development and real-world success.
            </p>
            <div className="flex gap-2 pt-2">
              {social.map((item) => (
                <span
                  key={item.label}
                  aria-label={item.label}
                  className="h-9 w-9 grid place-items-center rounded-lg bg-white/10"
                >
                  <item.Icon className="h-4 w-4 text-white" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.kind === "route" ? (
                    <Link to={link.to} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.target)}
                      className="hover:text-white transition text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[#F4B400] shrink-0" /> {CONTACT_LOCATION.display}</li>
              {CONTACT_PHONES.length > 0 ? (
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-[#F4B400] shrink-0" />
                  <div className="flex flex-col gap-1">
                    {CONTACT_PHONES.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-white transition">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
              ) : null}
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[#F4B400] shrink-0" /> {CONTACT_EMAIL}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-white/80 mb-3">Get study-abroad tips and university updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm px-3 py-2.5 outline-none focus:bg-white/15"
              />
              <button className="rounded-lg bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-4">Join</button>
            </form>
          </div>
        </div>

        <div id="privacy-policy" className="border-t border-white/10 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <p>Crafted for ambitious students worldwide.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
