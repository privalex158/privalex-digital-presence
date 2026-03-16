import { Link } from "react-router-dom";

const GOLD = "#F4A623";
const NAVY = "#2C3E6B";
const TEAL = "#006E7F";
const CREAM = "#F8F9FC";
const CARD_LIGHT = "#F8F9FC";

const schools = [
  {
    number: "01",
    name: "School of Data Protection & Privacy",
    description: "The complete pathway from Nigerian regulatory qualification to global privacy mastery. Home to one of the only ADPP programme and the IIM CDPO credential.",
    to: "/academy/school/data-protection",
  },
  {
    number: "02",
    name: "School of Information Security",
    description: "ISO 27001 implementation and auditing, risk management, incident response, and the PECB CISO leadership credential. For working security professionals ready to formalise their expertise.",
    to: "/academy/school/information-security",
  },
  {
    number: "03",
    name: "School of Cybersecurity",
    description: "Cybersecurity management and auditing, cloud security, CMMC, and crisis management. The credentials organisations need to satisfy local and international security requirements.",
    to: "/academy/school/cybersecurity",
  },
  {
    number: "04",
    name: "School of AI, GRC & Digital Transformation",
    description: "AI management system credentials (ISO 42001), AI professional and manager qualifications, plus ISO 31000 risk, ISO 37301 compliance, and ISO 38500 IT governance.",
    to: "/academy/school/ai-grc",
  },
];

const reasons = [
  {
    num: "01",
    title: "PECB Authorised",
    body: "Every PECB-certified programme is delivered by authorised trainers and leads to an internationally recognised PECB credential, accepted in 150+ countries",
  },
  {
    num: "02",
    title: "Taught by practitioners",
    body: "Our instructors are not career trainers. They are DPOs, CISOs, compliance directors, and regulatory advisors with current, active client experience",
  },
  {
    num: "03",
    title: "Local and sector-specific context",
    body: "Every programme is delivered with a deep understanding of the local and sector specific regulatory environment — not just the international framework",
  },
  {
    num: "04",
    title: "Career-linked, not just certificate-linked",
    body: "We track alumni outcomes. Our graduates move into DPO roles, CISO positions, compliance director appointments, and advisory careers",
  },
  {
    num: "05",
    title: "Accreditation breadth",
    body: "PECB, IIM and NBA-ICLE accreditations in a single training institution.",
  },
];

const AcademyHome = () => {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          backgroundImage: "url('/priv-acad-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "6rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* dark overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${NAVY}e6 0%, ${NAVY}99 100%)`,
          }}
        />
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${GOLD}22 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
          {/* Trust bar */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              background: "rgba(201,144,20,0.12)",
              border: `1px solid ${GOLD}40`,
              borderRadius: "24px",
              padding: "6px 16px",
              marginBottom: "2rem",
            }}
          >
            {[
              "PECB Authorised Training Partner",
              "IIM Accredited Training Organisation",
              "NBA-ICLE Accredited",
            ].map((badge, i) => (
              <span key={badge} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {i > 0 && <span style={{ opacity: 0.4, color: GOLD }}>|</span>}
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: GOLD, letterSpacing: "0.04em" }}>
                  {badge}
                </span>
              </span>
            ))}
          </div>

          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
              lineHeight: 1.15,
              maxWidth: "820px",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            The credential that opens the door is not enough. Earn the one that{" "}
            <span style={{ color: GOLD }}>changes what you can do.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: 1.75,
              maxWidth: "740px",
              opacity: 0.75,
              marginBottom: "2.5rem",
            }}
          >
            PrivaLex Academy is Nigeria's most complete professional certification and training school
            for data protection, information security, cybersecurity, and AI governance. We offer
            certified programmes, NBA-ICLE accredited masterclasses, and Advanced Data Protection
            Practitioner (ADPP) programme.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link
              to="/academy/programmes"
              style={{
                background: GOLD,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "14px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-90"
            >
              EXPLORE PROGRAMMES
            </Link>
            <a
              href="mailto:training@privalexadvisory.com"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "14px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                border: "1px solid rgba(255,255,255,0.25)",
                transition: "background 0.2s",
              }}
              className="hover:bg-white/20"
            >
              REGISTER FOR NEXT COHORT
            </a>
          </div>
        </div>
      </section>

      {/* FOUR SCHOOLS */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container mx-auto px-4">
          <div style={{ maxWidth: 600, marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Our Schools
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Four Schools. One deliberate pathway.
            </h2>
            <p style={{ color: "#1C2230", lineHeight: 1.8, fontSize: "1rem" }}>
              Every programme in PrivaLex Academy is selected for a single reason: it directly
              advances the career of the professional who earns it, and it directly addresses the
              compliance and security challenges facing Nigerian and international organisations right
              now. We offer the credentials that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" style={{ marginBottom: "2.5rem" }}>
            {schools.map((school) => (
              <Link
                key={school.to}
                to={school.to}
                style={{
                  background: CARD_LIGHT,
                  border: "1px solid #e8e0cc",
                  borderRadius: "10px",
                  padding: "2rem",
                  textDecoration: "none",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                className="hover:shadow-lg hover:-translate-y-0.5"
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: GOLD,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  SCHOOL {school.number}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: NAVY,
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {school.name}
                </h3>
                <p style={{ color: "#1C2230", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {school.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "1.25rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  View School
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/academy/programmes"
              style={{
                display: "inline-block",
                border: `2px solid ${GOLD}`,
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.82rem",
                padding: "12px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "background 0.2s, color 0.2s",
              }}
              className="hover:bg-[#F4A623] hover:text-white"
            >
              VIEW ALL PROGRAMMES
            </Link>
          </div>
        </div>
      </section>

      {/* WHY PRIVALEX ACADEMY */}
      <section style={{ background: CREAM, padding: "5rem 0" }}>
        <div className="container mx-auto px-4">
          <div style={{ maxWidth: 600, marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Why PrivaLex Academy
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              What makes a PrivaLex Academy credential different.
            </h2>
            <p
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: NAVY,
                opacity: 0.7,
              }}
            >
              Five Reasons the Market Chooses PrivaLex Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginBottom: "3rem" }}>
            {reasons.map((reason) => (
              <div
                key={reason.num}
                style={{
                  background: "#fff",
                  border: "1px solid #e8e0cc",
                  borderRadius: "10px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: GOLD,
                  }}
                />
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: GOLD,
                    opacity: 0.2,
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {reason.num}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: NAVY,
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {reason.title}
                </h3>
                <p style={{ color: "#1C2230", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {reason.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link
              to="/academy/corporate-training"
              style={{
                background: TEAL,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-90"
            >
              CORPORATE TRAINING ENQUIRY
            </Link>
            <a
              href="mailto:training@privalexadvisory.com"
              style={{
                background: GOLD,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-90"
            >
              REGISTER FOR A PROGRAMME
            </a>
          </div>
        </div>
      </section>

      {/* WHAT OUR PARTICIPANTS SAY */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container mx-auto px-4">
          <div style={{ maxWidth: 600, marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              What Our Participants Say
            </p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                color: NAVY,
                lineHeight: 1.2,
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Outcomes that speak for themselves.
            </h2>
            <p style={{ color: "#1C2230", lineHeight: 1.8, fontSize: "1rem", opacity: 0.7 }}>
              Hear from professionals who have completed PrivaLex Academy programmes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Participant",
                jobTitle: "Data Protection Officer",
                organisation: "Financial Services Organisation",
                programme: "IIM CDPO",
                review:
                  "The IIM CDPO programme gave me exactly what I needed to step into my DPO role with confidence. The instruction was rooted in Nigerian regulatory practice — not just global theory.",
                stars: 5,
              },
              {
                name: "Participant",
                jobTitle: "Compliance Manager",
                organisation: "Technology Company",
                programme: "PECB ISO 27001 Lead Implementer",
                review:
                  "Practical, rigorous, and directly applicable to my work. The instructors brought real implementation experience that made all the difference.",
                stars: 5,
              },
              {
                name: "Participant",
                jobTitle: "Legal Counsel",
                organisation: "Multinational Corporation",
                programme: "Advanced Data Protection Practitioner (ADPP)",
                review:
                  "The ADPP is unlike any other programme I have attended. The multi-jurisdictional depth and the quality of instruction are genuinely exceptional.",
                stars: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: CARD_LIGHT,
                  border: "1px solid #e8e0cc",
                  borderRadius: "10px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: GOLD,
                  }}
                />
                <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill={GOLD}>
                      <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    color: "#1C2230",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                    flex: 1,
                  }}
                >
                  "{t.review}"
                </p>
                <div style={{ borderTop: "1px solid #e8e0cc", paddingTop: "0.75rem" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: NAVY }}>{t.name}</p>
                  <p style={{ fontSize: "0.78rem", color: "#1C2230", opacity: 0.65 }}>
                    {t.jobTitle} · {t.organisation}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: GOLD,
                      letterSpacing: "0.04em",
                      marginTop: "0.25rem",
                    }}
                  >
                    {t.programme}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyHome;
