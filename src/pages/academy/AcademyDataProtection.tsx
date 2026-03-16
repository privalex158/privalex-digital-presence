import { Link } from "react-router-dom";

const GOLD = "#F4A623";
const NAVY = "#2C3E6B";
const TEAL = "#006E7F";
const CREAM = "#F8F9FC";
const CARD_LIGHT = "#F8F9FC";

interface Programme {
  badge: string;
  badgeVariant?: "flagship" | "default";
  title: string;
  meta: { duration: string; credential: string; idealFor: string };
  about: string;
  howToRegister: string;
}

const programmes: Programme[] = [
  {
    badge: "ADVANCED MASTERY — PRIVALEX FLAGSHIP",
    badgeVariant: "flagship",
    title: "Advanced Data Protection Practitioner (ADPP)",
    meta: {
      duration: "2 Months | 3 Cohorts Per Year",
      credential: "PrivaLex Academy ADPP Certificate",
      idealFor:
        "Practising DPOs, Privacy Consultants, Legal Professionals, Compliance Leads — Nigeria & International",
    },
    about:
      "The Advanced Data Protection Practitioner (ADPP) is the only programme of its kind. While certification courses teach the rules, the ADPP builds the judgement needed to apply them. Over two months, participants study all major privacy frameworks side by side — the Nigeria Data Protection Act 2023, the EU General Data Protection Regulation, the UK GDPR, the UK Data Protection Act, the California Consumer Privacy Act (CCPA/CPRA), sector specific guidelines and regulations and ISO/IEC 27701, and develop the practical skills needed to manage data protection programmes, advise organisations, and operate as genuine privacy professionals at international standard. Topics include: conducting DPIAs across jurisdictions, breach management and regulatory notification, drafting privacy policies and consent frameworks, cross-border transfer mechanism design, building DPO programmes inside organisations, privacy-by-design for products and services, and privacy consulting frameworks. This programme is capped at a small cohort size per intake to ensure quality of instruction and individual attention. Graduates of the ADPP are equipped to practice as DPOs, privacy consultants, and advisory professionals at the highest level.",
    howToRegister:
      "ADPP is delivered three times per year. To join the next cohort, register your interest at privalexacademy.com/adpp. You will receive the detailed programme guide, cohort dates, investment information, and an application form. Early registration is recommended — cohort sizes are strictly limited. Corporate nominations of two or more participants are welcome. Contact training@privalexadvisory.com for group enquiries.",
  },
  {
    badge: "REGULATORY — NIGERIA",
    title: "NDPC / IIM Certified Data Protection Officer (CDPO)",
    meta: {
      duration: "5 Days + Examination",
      credential: "IIM CDPO (NDPC-Licensed Credential)",
      idealFor:
        "DPOs, Compliance Officers, Legal Teams, Banks, Universities, Government, Hospitals, All Regulated Sectors",
    },
    about:
      "The IIM-NDPC Certified Data Protection Officer (CDPO) is Nigeria's primary regulatory data protection certification, accredited by the Institute for Information Management Africa (IIM) and recognised within the NDPC's ecosystem. It is the essential credential for any professional appointed as a Data Protection Officer under the Nigeria Data Protection Act 2023. The programme covers the Nigeria Data Protection Act 2023 in depth, including data subject rights, lawful bases for processing, security obligations, DPIA requirements, breach notification, and NDPC registration and audit obligations. Participants also receive grounding in global privacy principles to contextualise Nigerian law within international best practice. On completion, candidates sit an examination. Successful candidates receive the IIM CDPO credential, which is recognised by the NDPC as evidence of professional competence for DPO appointments.",
    howToRegister:
      "To register, click the 'Register Now' button at the top of this page. Complete the registration form with your full name, organisation, email address, and billing details. You will receive a booking confirmation within one business day. Payment can be made by bank transfer (NGN), card, or institutional purchase order. Corporate registrations for three or more participants qualify for group pricing — contact us at training@privalexadvisory.com to discuss.",
  },
  {
    badge: "GLOBAL CERTIFICATION — PECB",
    title: "PECB Certified Data Protection Officer (CDPO)",
    meta: {
      duration: "3-5 Days + Examination",
      credential: "PECB Certified Data Protection Officer",
      idealFor:
        "Corporate Staff, IT and Security Professionals, International Job Seekers, Multinationals, Compliance Professionals",
    },
    about:
      "The PECB Certified Data Protection Officer (CDPO) is an internationally recognised credential aligned to ISO/IEC 27701 — the global Privacy Information Management System standard. It is the credential of choice for professionals who need global recognition for their data protection expertise, including those working with or for multinational organisations, those seeking international employment, and those advising organisations with EU, UK, or international operations. The programme covers privacy governance frameworks, data subject rights management, privacy risk assessment, international data transfer mechanisms, privacy by design, and the DPO role and responsibilities under both the GDPR and global frameworks. PECB certification is recognised in 150+ countries and is maintained through ongoing CPD — ensuring the credential retains its value throughout your career.",
    howToRegister:
      "To register, click the 'Register Now' button at the top of this page. Complete the registration form with your full name, organisation, email address, and billing details. You will receive a booking confirmation within one business day. Payment can be made by bank transfer (USD), card, or institutional purchase order. Corporate registrations for three or more participants qualify for group pricing — contact us at training@privalexadvisory.com to discuss.",
  },
  {
    badge: "AUDITOR",
    title: "GDPR Lead Auditor",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB GDPR Lead Auditor",
      idealFor:
        "Auditors, DPOs, Compliance Managers, Consultants Assessing GDPR Compliance at EU-Facing Organisations",
    },
    about:
      "The GDPR Lead Auditor programme qualifies professionals to plan, conduct, report on, and follow up on GDPR compliance audits. This is the credential for professionals whose role includes formally assessing whether an organisation's processing activities, privacy governance, and security controls meet GDPR requirements, either as an internal auditor, external consultant, or regulatory assessor. The programme covers GDPR audit planning and methodology, audit evidence gathering, reporting findings and recommendations, auditing data subject rights processes, assessing international transfer mechanisms, and engaging with data protection authorities. For Nigerian organisations with EU operations, EU customers, or EU-based employees, this credential ensures that DPOs and compliance teams can conduct the formal assessments their operational context demands.",
    howToRegister:
      "To register, click the 'Register Now' button at the top of this page. Complete the registration form with your full name, organisation, email address, and billing details. You will receive a booking confirmation within one business day. Payment can be made by bank transfer (USD), card, or institutional purchase order. Corporate registrations for three or more participants qualify for group pricing — contact us at training@privalexadvisory.com to discuss.",
  },
];

const ProgrammeCard = ({ prog }: { prog: Programme }) => (
  <div
    style={{
      background: prog.badgeVariant === "flagship" ? NAVY : "#fff",
      border: `1px solid ${prog.badgeVariant === "flagship" ? "transparent" : "#e8e0cc"}`,
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "2rem",
      position: "relative",
    }}
  >
    {/* Gold top border */}
    <div style={{ height: "4px", background: GOLD }} />

    <div style={{ padding: "2rem 2.25rem" }}>
      {/* Badge */}
      <span
        style={{
          display: "inline-block",
          background: prog.badgeVariant === "flagship" ? GOLD : `${GOLD}18`,
          color: prog.badgeVariant === "flagship" ? "#fff" : GOLD,
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          padding: "4px 12px",
          borderRadius: "20px",
          marginBottom: "1rem",
        }}
      >
        {prog.badge}
      </span>

      {/* Title */}
      <h3
        style={{
          fontWeight: 800,
          fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
          color: prog.badgeVariant === "flagship" ? "#fff" : NAVY,
          marginBottom: "1.25rem",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        {prog.title}
      </h3>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.75rem",
          background: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.07)" : CARD_LIGHT,
          borderRadius: "8px",
          padding: "1rem 1.25rem",
          border: `1px solid ${prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.12)" : "#e8e0cc"}`,
        }}
      >
        <div style={{ minWidth: "160px" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            Duration
          </span>
          <span
            style={{
              fontSize: "0.82rem",
              color: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.85)" : "#1C2230",
            }}
          >
            {prog.meta.duration}
          </span>
        </div>
        <div style={{ minWidth: "200px" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            Credential
          </span>
          <span
            style={{
              fontSize: "0.82rem",
              color: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.85)" : "#1C2230",
            }}
          >
            {prog.meta.credential}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            Ideal For
          </span>
          <span
            style={{
              fontSize: "0.82rem",
              color: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.85)" : "#1C2230",
            }}
          >
            {prog.meta.idealFor}
          </span>
        </div>
      </div>

      {/* About */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h4
          style={{
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "0.75rem",
          }}
        >
          About This Programme
        </h4>
        <p
          style={{
            fontSize: "0.92rem",
            lineHeight: 1.8,
            color: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.8)" : "#374151",
          }}
        >
          {prog.about}
        </p>
      </div>

      {/* How to Register */}
      <div
        style={{
          background: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.07)" : CREAM,
          borderRadius: "8px",
          padding: "1.25rem",
          border: `1px solid ${prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.12)" : "#e8e0cc"}`,
        }}
      >
        <h4
          style={{
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "0.75rem",
          }}
        >
          How to Register
        </h4>
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.75,
            color: prog.badgeVariant === "flagship" ? "rgba(255,255,255,0.75)" : "#1C2230",
          }}
        >
          {prog.howToRegister}
        </p>
      </div>
    </div>
  </div>
);

const AcademyDataProtection = () => {
  return (
    <div>
      {/* Page Header */}
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
            SCHOOL 1 OF 4
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
            School of Data Protection & Privacy
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: GOLD,
              marginBottom: "1rem",
              maxWidth: 700,
            }}
          >
            Africa's most complete data protection qualification pathway — regulatory, global, and
            advanced mastery.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              opacity: 0.75,
              maxWidth: 740,
            }}
          >
            The School of Data Protection and Privacy is the flagship school of PrivaLex Academy. It
            is the only institution in Nigeria and among the very few in West Africa that combines
            the NDPC regulatory credential, a PECB ISO-aligned global certification, and a
            proprietary advanced practitioner programme within a single coherent pathway. You can
            take one programme or progress through all four. The pathway is designed so each
            qualification builds on the last.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ background: "#f9f9f9", padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Programmes in this School
          </p>
          {programmes.map((prog) => (
            <ProgrammeCard key={prog.title} prog={prog} />
          ))}
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

      {/* CTA */}
      <section style={{ background: CREAM, padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.75rem",
              color: NAVY,
              marginBottom: "1rem",
            }}
          >
            Ready to enrol or enquire?
          </h2>
          <p style={{ color: "#1C2230", marginBottom: "2rem", maxWidth: 480, margin: "0 auto 2rem" }}>
            Contact our training team or register directly for the next available cohort.
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
              to="/academy/programmes"
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
              VIEW ALL PROGRAMMES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyDataProtection;
