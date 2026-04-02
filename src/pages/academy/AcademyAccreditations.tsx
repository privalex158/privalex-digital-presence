import { Link } from "react-router-dom";

const GOLD = "#F4A623";
const NAVY = "#2C3E6B";
const TEAL = "#006E7F";
const CREAM = "#F8F9FC";
const CARD_LIGHT = "#F8F9FC";

const accreditations = [
  {
    acronym: "PECB",
    fullName: "PECB — Authorised Training Partner",
    description:
      "PrivaLex Academy is an authorised PECB training partner. All PECB-certified programmes are delivered by authorised trainers, lead to official PECB certifications, and are recognised in 150+ countries. PECB certifications are maintained through CPD and renewed every three years, ensuring the credential retains market value throughout a professional career.",
    highlight: "Recognised in 150+ countries",
  },
  {
    acronym: "IIM",
    fullName: "IIM — Accredited Training Organisation",
    description:
      "PrivaLex Academy is an IIM Accredited Training Organisation. The IIM CDPO credential is accredited by the Institute for Information Management Africa and operates within the NDPC's regulatory ecosystem, making it Nigeria's primary regulatory data protection qualification for DPO appointments.",
    highlight: "Nigeria's primary DPO qualification",
  },
  {
    acronym: "NDPC",
    fullName: "NDPC — Approved Training Partner",
    description:
      "PrivaLex Academy operates within the NDPC Ecosystem as an approved training partner. Our NDPA-focused programmes are aligned to NDPC guidance and examination standards.",
    highlight: "NDPC Ecosystem Partner",
  },
  {
    acronym: "NBA-ICLE",
    fullName: "NBA-ICLE — Masterclass Accreditation",
    description:
      "Our monthly Masterclass Series is accredited by the NBA-ICLE, enabling qualifying legal practitioners to earn Mandatory Continuing Legal Education (MCLE) credits through regular attendance. Each session is individually accredited and a certificate is issued after each qualifying session.",
    highlight: "MCLE credits every session",
  },
];

const AcademyAccreditations = () => {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: TEAL,
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
            RECOGNISED ACCREDITATION
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
            Our Accreditations
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              opacity: 0.78,
              maxWidth: 700,
            }}
          >
            Every credential awarded through PrivaLex Academy is backed by formal accreditation
            from recognised certification and professional bodies. These are not internal
            certificates. They are internationally and nationally recognised qualifications that
            follow graduates throughout their careers.
          </p>
        </div>
      </section>

      {/* Accreditation cards */}
      <section style={{ background: "#f9f9f9", padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {accreditations.map((acc) => (
              <div
                key={acc.acronym}
                style={{
                  background: "#fff",
                  border: "1px solid #e8e0cc",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "4px", background: GOLD }} />
                <div style={{ padding: "2rem 2.25rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "52px",
                          height: "52px",
                          borderRadius: "10px",
                          background: `${GOLD}15`,
                          border: `1px solid ${GOLD}30`,
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 800,
                            fontSize: acc.acronym.length > 4 ? "0.6rem" : "0.75rem",
                            color: GOLD,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {acc.acronym}
                        </span>
                      </div>
                      <h2
                        style={{
                          fontWeight: 800,
                          fontSize: "1.2rem",
                          color: NAVY,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.3,
                        }}
                      >
                        {acc.acronym === "PECB" ? (
                          <a
                            href="https://pecb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: NAVY, textDecoration: "underline", textDecorationColor: `${GOLD}80` }}
                          >
                            {acc.fullName}
                          </a>
                        ) : (
                          acc.fullName
                        )}
                      </h2>
                    </div>
                    <span
                      style={{
                        background: `${GOLD}14`,
                        color: GOLD,
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: `1px solid ${GOLD}30`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {acc.highlight}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#374151" }}>
                    {acc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary bar */}
      <section style={{ background: TEAL, padding: "3rem 0" }}>
        <div className="container mx-auto px-4">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {["PECB Authorised Training Partner", "IIM Accredited Training Organisation", "NDPC Ecosystem Partner", "NBA-ICLE Accredited"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  background: `${GOLD}15`,
                  padding: "6px 16px",
                  borderRadius: "24px",
                  border: `1px solid ${GOLD}30`,
                  letterSpacing: "0.04em",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: CREAM, padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.75rem", color: NAVY, marginBottom: "1rem" }}>
            Earn a credential that is recognised.
          </h2>
          <p style={{ color: "#1C2230", maxWidth: 500, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Every PrivaLex Academy programme leads to a formally accredited qualification.
            Explore our programmes or get in touch to discuss the right credential for your
            career or organisation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://www.privalexacademy.com/programmes"
              target="_blank"
              rel="noopener noreferrer"
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
              EXPLORE PROGRAMMES
            </a>
            <a
              href="mailto:training@privalexadvisory.com"
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
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyAccreditations;
