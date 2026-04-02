import { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";

const GOLD = "#F4A623";
const NAVY = "#2C3E6B";
const TEAL = "#006E7F";

const ACADEMY = "https://www.privalexacademy.com";

const programmesLinks = [
  { label: "School of Data Protection & Privacy", href: `${ACADEMY}/school/data-protection` },
  { label: "School of Information Security", href: `${ACADEMY}/school/information-security` },
  { label: "School of Cybersecurity", href: `${ACADEMY}/school/cybersecurity` },
  { label: "School of AI, GRC & Digital Transformation", href: `${ACADEMY}/school/ai-grc` },
  { label: "All Programmes", href: `${ACADEMY}/programmes` },
];

const navLinks = [
  { label: "HOME", href: ACADEMY },
  { label: "MASTERCLASSES", href: `${ACADEMY}/masterclasses` },
  { label: "CORPORATE TRAINING", href: `${ACADEMY}/corporate-training` },
  { label: "ACCREDITATIONS", href: `${ACADEMY}/accreditations` },
];

const AcademyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgrammesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "#fff" : "#fff",
        borderBottom: `1px solid #e8e0cc`,
        boxShadow: scrolled ? "0 2px 16px rgba(12,31,67,0.08)" : "none",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "box-shadow 0.2s",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href={ACADEMY} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 shrink-0">
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.15rem",
                color: NAVY,
                letterSpacing: "-0.01em",
              }}
            >
              PrivaLex{" "}
              <span style={{ color: GOLD }}>Academy</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href={ACADEMY}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold tracking-widest transition-colors hover:text-[#F4A623]"
              style={{ color: NAVY }}
            >
              HOME
            </a>

            {/* Programmes dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProgrammesOpen((o) => !o)}
                className="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-widest transition-colors hover:text-[#F4A623]"
                style={{
                  color: NAVY,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                PROGRAMMES
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{ transform: programmesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {programmesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    left: 0,
                    background: "#fff",
                    border: "1px solid #e8e0cc",
                    borderRadius: "8px",
                    boxShadow: "0 8px 32px rgba(12,31,67,0.12)",
                    minWidth: "320px",
                    zIndex: 100,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ borderBottom: `3px solid ${GOLD}` }} />
                  {programmesLinks.map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        padding: "10px 18px",
                        fontSize: "0.82rem",
                        fontWeight: i === programmesLinks.length - 1 ? 700 : 500,
                        color: i === programmesLinks.length - 1 ? GOLD : NAVY,
                        borderTop: i === programmesLinks.length - 1 ? "1px solid #e8e0cc" : "none",
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#F8F9FC")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold tracking-widest transition-colors hover:text-[#F4A623]"
                style={{ color: NAVY }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: NAVY,
                opacity: 0.65,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
              className="hover:opacity-100 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              PrivaLex Advisory
            </Link>
            <a
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Sm8Hm1zvUU22BEzeGU8Gv4G5gXNLzeBIrBgUsxWYmJlUQ0ZZNzFBVVhFVDBOVjlERVNRWUFCSVpUUS4u"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: GOLD,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.78rem",
                padding: "8px 18px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-90"
            >
              Register Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2"
            style={{ color: NAVY }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid #e8e0cc",
              paddingBottom: "1rem",
            }}
          >
            <a
              href={ACADEMY}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-2 text-sm font-semibold"
              style={{ color: NAVY, textDecoration: "none" }}
            >
              HOME
            </a>
            <div>
              <button
                onClick={() => setProgrammesOpen((o) => !o)}
                className="w-full text-left py-3 px-2 text-sm font-semibold"
                style={{ color: NAVY, background: "none", border: "none", cursor: "pointer" }}
              >
                PROGRAMMES {programmesOpen ? "▲" : "▼"}
              </button>
              {programmesOpen && (
                <div style={{ paddingLeft: "1rem" }}>
                  {programmesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-sm"
                      style={{ color: NAVY, opacity: 0.8, textDecoration: "none" }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-2 text-sm font-semibold"
                style={{ color: NAVY, textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0 0.5rem" }}>
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Sm8Hm1zvUU22BEzeGU8Gv4G5gXNLzeBIrBgUsxWYmJlUQ0ZZNzFBVVhFVDBOVjlERVNRWUFCSVpUUS4u"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: GOLD,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Register Now
              </a>
              <Link
                to="/"
                style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: NAVY,
                  opacity: 0.65,
                  textDecoration: "none",
                }}
              >
                ← PrivaLex Advisory
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const AcademyFooter = () => (
  <footer style={{ background: NAVY, color: "#fff", paddingTop: "3rem", paddingBottom: "2rem" }}>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        {/* Brand */}
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            PrivaLex <span style={{ color: GOLD }}>Academy</span>
          </div>
          <p style={{ fontSize: "0.85rem", opacity: 0.65, lineHeight: 1.7, marginBottom: "1rem" }}>
            Nigeria's most complete professional certification and training school for data protection,
            information security, cybersecurity, and AI governance.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.78rem", opacity: 0.5 }}>PECB Authorised Training Partner</span>
            <span style={{ fontSize: "0.78rem", opacity: 0.5 }}>IIM Accredited</span>
            <span style={{ fontSize: "0.78rem", opacity: 0.5 }}>NBA-ICLE Accredited</span>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <a
              href="https://www.linkedin.com/company/privalex-academy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: "32px", height: "32px", borderRadius: "6px",
                background: "rgba(255,255,255,0.1)", display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.6)", textDecoration: "none",
              }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://twitter.com/PrivaLexAcademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              style={{
                width: "32px", height: "32px", borderRadius: "6px",
                background: "rgba(255,255,255,0.1)", display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.6)", textDecoration: "none",
              }}
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", color: GOLD, marginBottom: "1rem" }}>
            QUICK LINKS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "Home", href: ACADEMY },
              { label: "Programmes", href: `${ACADEMY}/programmes` },
              { label: "Masterclasses", href: `${ACADEMY}/masterclasses` },
              { label: "Corporate Training", href: `${ACADEMY}/corporate-training` },
              { label: "Accreditations", href: `${ACADEMY}/accreditations` },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", textDecoration: "none" }}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", color: GOLD, marginBottom: "1rem" }}>
            CONTACT
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <a
              href="mailto:training@privalexadvisory.com"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", textDecoration: "none" }}
              className="hover:text-white transition-colors"
            >
              training@privalexadvisory.com
            </a>
            <a
              href={ACADEMY}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", textDecoration: "none" }}
              className="hover:text-white transition-colors"
            >
              www.privalexacademy.com
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1.5rem",
          gap: "0.75rem",
        }}
      >
        <p style={{ fontSize: "0.78rem", opacity: 0.45 }}>
          © 2025 PrivaLex Academy. A Division of PrivaLex Advisory.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {["PECB Authorised Training Partner", "IIM Accredited", "NBA-ICLE Accredited"].map((a) => (
            <span
              key={a}
              style={{
                fontSize: "0.7rem",
                background: "rgba(201,144,20,0.15)",
                color: GOLD,
                padding: "3px 10px",
                borderRadius: "20px",
                fontWeight: 600,
              }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const AcademyLayout = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
    <AcademyNavbar />
    <main style={{ flex: 1 }}>
      <Outlet />
    </main>
    <AcademyFooter />
  </div>
);

export default AcademyLayout;
