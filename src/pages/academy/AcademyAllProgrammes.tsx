import { Link } from "react-router-dom";

const GOLD = "#c99014";
const NAVY = "#0c1f43";
const CREAM = "#fcf4dc";
const CARD_LIGHT = "#fdf8ed";

const schools = [
  {
    number: "01",
    name: "School of Data Protection & Privacy",
    subtitle: "Africa's most complete data protection qualification pathway",
    to: "/academy/school/data-protection",
    programmes: [
      { badge: "ADVANCED MASTERY — PRIVALEX FLAGSHIP", title: "Advanced Data Protection Practitioner (ADPP)" },
      { badge: "REGULATORY — NIGERIA", title: "NDPC / IIM Certified Data Protection Officer (CDPO)" },
      { badge: "GLOBAL CERTIFICATION — PECB", title: "PECB Certified Data Protection Officer (CDPO)" },
      { badge: "AUDITOR", title: "GDPR Lead Auditor" },
    ],
  },
  {
    number: "02",
    name: "School of Information Security",
    subtitle: "From ISO 27001 implementation to board-level CISO leadership",
    to: "/academy/school/information-security",
    programmes: [
      { badge: "IMPLEMENTER", title: "ISO/IEC 27001 Lead Implementer" },
      { badge: "AUDITOR", title: "ISO/IEC 27001 Lead Auditor" },
      { badge: "RISK MANAGER", title: "ISO/IEC 27005 Lead Risk Manager" },
      { badge: "INCIDENT MANAGER", title: "ISO/IEC 27035 Lead Incident Manager" },
      { badge: "SENIOR LEADERSHIP", title: "PECB Certified CISO" },
    ],
  },
  {
    number: "03",
    name: "School of Cybersecurity",
    subtitle: "Cybersecurity management, cloud security, and crisis management",
    to: "/academy/school/cybersecurity",
    programmes: [
      { badge: "CYBER MANAGER", title: "ISO/IEC 27032 Lead Cybersecurity Manager" },
      { badge: "CYBER AUDITOR", title: "ISO/IEC 27032 Lead Cybersecurity Auditor" },
      { badge: "CLOUD SECURITY MANAGER", title: "Lead Cloud Security Manager" },
      { badge: "CLOUD SECURITY AUDITOR", title: "Lead Cloud Security Auditor" },
      { badge: "CRISIS LEADER", title: "ISO 22361 Lead Crisis Manager" },
    ],
  },
  {
    number: "04",
    name: "School of AI, GRC & Digital Transformation",
    subtitle: "AI governance, risk, compliance, and IT governance — two tracks",
    to: "/academy/school/ai-grc",
    programmes: [
      { badge: "AI GOVERNANCE TRACK", title: "ISO/IEC 42001 Lead Implementer — AI Management System" },
      { badge: "AI GOVERNANCE TRACK", title: "ISO/IEC 42001 Lead Auditor — AI Management System" },
      { badge: "AI GOVERNANCE TRACK", title: "Certified AI Professional (CAIP)" },
      { badge: "AI GOVERNANCE TRACK", title: "Lead AI Risk Manager" },
      { badge: "AI GOVERNANCE TRACK", title: "Certified AI Manager (CAIM)" },
      { badge: "GRC TRACK", title: "ISO 31000 Lead Risk Manager" },
      { badge: "GRC TRACK", title: "ISO 37301 Lead Compliance Manager" },
      { badge: "GRC TRACK", title: "ISO/IEC 38500 Lead IT Governance Manager" },
      { badge: "GRC TRACK", title: "Management Systems Internal Auditor" },
    ],
  },
];

const AcademyAllProgrammes = () => {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: NAVY,
          color: "#fff",
          padding: "5rem 0 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
          <span
            style={{
              display: "inline-block",
              background: `${GOLD}22`,
              color: GOLD,
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "5px 14px",
              borderRadius: "20px",
              marginBottom: "1.25rem",
            }}
          >
            24 PROGRAMMES ACROSS 4 SCHOOLS
          </span>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1.15,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}
          >
            All Programmes
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              opacity: 0.78,
              maxWidth: 680,
            }}
          >
            PrivaLex Academy offers 24 professionally certified programmes across four schools.
            Every programme is at implementer, auditor, or leadership level. Click a school to
            read the full programme descriptions and registration information.
          </p>
        </div>
      </section>

      {/* Schools */}
      <section style={{ background: "#f9f9f9", padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "960px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {schools.map((school) => (
              <div
                key={school.number}
                style={{
                  background: "#fff",
                  border: "1px solid #e8e0cc",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "4px", background: GOLD }} />
                <div style={{ padding: "2rem 2.25rem" }}>
                  {/* School header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: GOLD,
                          marginBottom: "0.375rem",
                        }}
                      >
                        SCHOOL {school.number}
                      </span>
                      <h2
                        style={{
                          fontWeight: 800,
                          fontSize: "1.25rem",
                          color: NAVY,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.3,
                          marginBottom: "0.375rem",
                        }}
                      >
                        {school.name}
                      </h2>
                      <p style={{ fontSize: "0.85rem", color: "#6b7280", fontStyle: "italic" }}>
                        {school.subtitle}
                      </p>
                    </div>
                    <Link
                      to={school.to}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: GOLD,
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      VIEW SCHOOL
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6h7M6.5 3l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Programme list */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {school.programmes.map((prog, i) => (
                      <div
                        key={prog.title}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.75rem 1rem",
                          background: i % 2 === 0 ? CARD_LIGHT : "#fff",
                          borderRadius: "6px",
                          border: "1px solid #e8e0cc",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "#fff",
                            background: GOLD,
                            padding: "2px 8px",
                            borderRadius: "12px",
                            whiteSpace: "nowrap",
                            letterSpacing: "0.04em",
                            flexShrink: 0,
                          }}
                        >
                          {prog.badge}
                        </span>
                        <span style={{ fontSize: "0.88rem", fontWeight: 600, color: NAVY }}>
                          {prog.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: CREAM, padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.75rem", color: NAVY, marginBottom: "1rem" }}>
            Ready to register or enquire?
          </h2>
          <p style={{ color: "#4a5568", maxWidth: 480, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Contact our training team to discuss the right programme for you or your organisation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href="mailto:training@privalexadvisory.com"
              style={{
                background: GOLD,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                padding: "12px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              REGISTER NOW
            </a>
            <Link
              to="/academy/corporate-training"
              style={{
                border: `2px solid ${NAVY}`,
                color: NAVY,
                fontWeight: 700,
                fontSize: "0.82rem",
                padding: "12px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              CORPORATE TRAINING
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyAllProgrammes;
