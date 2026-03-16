import { Link } from "react-router-dom";

const GOLD = "#F4A623";
const NAVY = "#2C3E6B";
const TEAL = "#006E7F";
const CREAM = "#F8F9FC";
const CARD_LIGHT = "#F8F9FC";

const topics = [
  "Nigeria Data Protection Act (NDPA) 2023 — enforcement developments, NDPC guidance updates, and case law",
  "GDPR enforcement trends — European Data Protection Board decisions and their implications for Nigerian organisations",
  "AI governance and regulation — EU AI Act, Nigeria AI Policy, and responsible AI deployment",
  "Cybersecurity compliance — CBN, NITDA, NCC, and NDPC regulatory expectations",
  "Data breach management — incident response, breach notification obligations, and regulatory engagement",
  "Cross-border data transfers — adequacy decisions, standard contractual clauses, and Nigeria-to-EU transfers",
  "Technology contracts — data processing agreements, SaaS contracts, and vendor due diligence",
  "AI liability and ethics — regulatory frameworks and practical risk management",
  "Digital health, fintech, and edtech — sector-specific data protection obligations",
];

const formatItems = [
  "Live virtual delivery via Teams — every month on a set day and time",
  "3 hours per session — expert-led, practitioner-focused",
  "NBA-ICLE accredited — each session earns qualifying MCLE credit hours",
  "Recordings available to registered participants.",
];

const AcademyMasterclasses = () => {
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
            NBA-ICLE ACCREDITED
          </span>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1.15,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              maxWidth: 700,
            }}
          >
            NBA-ICLE Accredited Masterclass Series
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              opacity: 0.78,
              maxWidth: 720,
            }}
          >
            Earn NBA Mandatory Continuing Legal Education (MCLE) credits while staying current on
            the most pressing legal, regulatory, and technology developments in data protection,
            cybersecurity, AI governance, and digital compliance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#f9f9f9", padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "860px" }}>

          {/* What are the masterclasses */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0cc",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div style={{ height: "4px", background: GOLD }} />
            <div style={{ padding: "2rem 2.25rem" }}>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: NAVY,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                What Are the Masterclasses?
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#374151" }}>
                Each month, PrivaLex Academy hosts a live 3-hour masterclass on a topical issue at
                the intersection of law, technology, and regulatory compliance. Sessions are led by
                senior practitioners, regulators, and subject matter experts with real-world
                experience — not theory alone. Every session is accredited by the Nigerian Bar
                Association Institute for Continuing Legal Education (NBA-ICLE), enabling qualifying
                legal practitioners to earn MCLE credits.
              </p>
            </div>
          </div>

          {/* Topics */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0cc",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div style={{ height: "4px", background: GOLD }} />
            <div style={{ padding: "2rem 2.25rem" }}>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: NAVY,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Topics Covered Include
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {topics.map((topic) => (
                  <div
                    key={topic}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.875rem",
                      padding: "0.75rem 1rem",
                      background: CARD_LIGHT,
                      borderRadius: "8px",
                      border: "1px solid #e8e0cc",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: GOLD,
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#374151", margin: 0 }}>
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who should attend */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0cc",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div style={{ height: "4px", background: GOLD }} />
            <div style={{ padding: "2rem 2.25rem" }}>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: NAVY,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Who Should Attend
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#374151" }}>
                Legal practitioners, compliance professionals, DPOs, in-house counsel, academics,
                and regulatory professionals who need to stay ahead of fast-moving developments and
                earn NBA MCLE credit while doing so.
              </p>
            </div>
          </div>

          {/* Format & Accreditation */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e0cc",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div style={{ height: "4px", background: GOLD }} />
            <div style={{ padding: "2rem 2.25rem" }}>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: NAVY,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Format & Accreditation
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {formatItems.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.875rem",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: `${GOLD}20`,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2px",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke={GOLD}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#374151", margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to Register */}
          <div
            style={{
              background: CREAM,
              border: "1px solid #e8e0cc",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div style={{ height: "4px", background: GOLD }} />
            <div style={{ padding: "2rem 2.25rem" }}>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: NAVY,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                How to Register
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#374151", marginBottom: "1.5rem" }}>
                Register for the next session at privalexacademy.com/masterclasses. Individual
                session fee are published on the registration page. NBA members receive a verified
                MCLE certificate after each qualifying session.
              </p>
              <a
                href="mailto:training@privalexadvisory.com"
                style={{
                  display: "inline-block",
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
                REGISTER FOR NEXT SESSION
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyMasterclasses;
