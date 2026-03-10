import { Link } from "react-router-dom";

const GOLD = "#c99014";
const NAVY = "#0c1f43";
const CREAM = "#fcf4dc";
const CARD_LIGHT = "#fdf8ed";

interface Programme {
  badge: string;
  title: string;
  meta: { duration: string; credential: string; idealFor: string };
  about: string;
  howToRegister: string;
}

const STANDARD_REGISTER =
  "To register, visit privalexacademy.com and click 'Register Now' on this programme page. Complete the online registration form with your full name, organisation, email address, and billing details. You will receive a booking confirmation within one business day. Payment can be made by bank transfer (USD), card, or institutional purchase order. Corporate registrations for three or more participants qualify for group pricing — contact us at training@privalexadvisory.com to discuss.";

const programmes: Programme[] = [
  {
    badge: "IMPLEMENTER",
    title: "ISO/IEC 27001 Lead Implementer",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 27001 Lead Implementer",
      idealFor:
        "ISMS Managers, IT Security Managers, Security Consultants, Compliance Officers Building ISO 27001-Compliant Systems",
    },
    about:
      "ISO/IEC 27001 is the world's leading Information Security Management System standard. The Lead Implementer credential qualifies professionals to design, build, and manage an ISMS that meets ISO 27001 certification requirements. This is the programme for the professional who will lead an organisation's ISO 27001 implementation project from inception to certification. The programme covers: establishing the ISMS scope and context, risk assessment and risk treatment planning, selecting and implementing Annex A controls, developing policies, procedures, and documentation, preparing for certification audit, and managing ongoing ISMS performance.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "AUDITOR",
    title: "ISO/IEC 27001 Lead Auditor",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 27001 Lead Auditor",
      idealFor:
        "Internal and External Auditors, Consultants, Big 4 Professionals, Regulatory Assessors, Compliance Managers",
    },
    about:
      "The ISO 27001 Lead Auditor credential qualifies professionals to plan, conduct, manage, and report on information security audits against ISO/IEC 27001. This is the credential for professionals whose work involves formally assessing whether an organisation's ISMS meets ISO 27001 requirements, whether as an internal auditor, external consultant, or certification body assessor. The programme covers: audit principles and ethics, audit planning and preparation, conducting opening and closing meetings, gathering and evaluating audit evidence, writing audit findings and non-conformity reports, and audit follow-up. This credential is highly sought after by Big 4 firms, internal audit departments, management consulting firms, and regulatory bodies. Paired with the Lead Implementer, it represents the most complete ISO 27001 credential set available.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "RISK MANAGER",
    title: "ISO/IEC 27005 Lead Risk Manager",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 27005 Lead Risk Manager",
      idealFor:
        "Risk Managers, Chief Risk Officers, Senior Risk Analysts, Security Architects, IT Risk Professionals",
    },
    about:
      "ISO/IEC 27005 is the international standard for information security risk management, providing the risk assessment and risk treatment methodology that underpins every ISO 27001 programme. The Lead Risk Manager credential qualifies professionals to design, implement, and lead information security risk management programmes aligned to ISO 27005. The programme covers: establishing the risk management framework, risk identification and risk analysis methods, risk evaluation and risk treatment planning, risk acceptance and risk communication, and monitoring and reviewing risk management outcomes. For organisations with a Chief Risk Officer, Risk Director, or dedicated risk management function, this credential provides the internationally recognised framework qualification needed to formalise enterprise risk programmes.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "INCIDENT MANAGER",
    title: "ISO/IEC 27035 Lead Incident Manager",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 27035 Lead Incident Manager",
      idealFor:
        "SOC Managers, Incident Response Leads, Security Operations Professionals, CISOs Managing Incident Response Functions",
    },
    about:
      "ISO/IEC 27035 is the international standard for information security incident management. The Lead Incident Manager credential qualifies professionals to design, implement, and lead incident management programmes that meet ISO 27035 requirements. Cyber incidents are a certainty, not a possibility, and the difference between an incident that is managed and an incident that becomes a crisis is almost always the quality of the incident response programme in place before it happens. This programme covers: establishing the incident management plan, incident detection and reporting, incident assessment and decision making, incident response and escalation, post-incident activity and lessons learned, and coordination with regulators, insurers, and external parties.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "SENIOR LEADERSHIP",
    title: "PECB Certified CISO",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified Chief Information Security Officer (CISO)",
      idealFor:
        "Chief Information Security Officers, Deputy CISOs, Senior Security Directors, Aspiring CISOs at Major Organisations",
    },
    about:
      "The PECB Certified CISO is the premier senior leadership credential for information security executives. It is designed for the professional who leads or aspires to lead an organisation's entire information security function. The programme covers: the CISO role and responsibilities, security strategy development and business alignment, building and leading security teams, managing security programmes at enterprise scale, communicating security risk to boards and executive committees, regulatory and legal obligations for security leaders, crisis management and executive decision-making under pressure, and security budget management and ROI. This credential positions graduates as board-ready security executives with internationally recognised authority. In a market where the demand for qualified CISOs dramatically outstrips supply, the PECB CISO provides the formalised executive credential that the most senior security roles now require.",
    howToRegister: STANDARD_REGISTER,
  },
];

const ProgrammeCard = ({ prog }: { prog: Programme }) => (
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
      <span
        style={{
          display: "inline-block",
          background: `${GOLD}18`,
          color: GOLD,
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
      <h3
        style={{
          fontWeight: 800,
          fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
          color: NAVY,
          marginBottom: "1.25rem",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        {prog.title}
      </h3>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.75rem",
          background: CARD_LIGHT,
          borderRadius: "8px",
          padding: "1rem 1.25rem",
          border: "1px solid #e8e0cc",
        }}
      >
        {[
          { label: "Duration", value: prog.meta.duration },
          { label: "Credential", value: prog.meta.credential },
          { label: "Ideal For", value: prog.meta.idealFor },
        ].map((item) => (
          <div key={item.label} style={{ minWidth: "160px", flex: item.label === "Ideal For" ? 1 : undefined }}>
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
              {item.label}
            </span>
            <span style={{ fontSize: "0.82rem", color: "#4a5568" }}>{item.value}</span>
          </div>
        ))}
      </div>

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
        <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "#374151" }}>{prog.about}</p>
      </div>

      <div
        style={{
          background: CREAM,
          borderRadius: "8px",
          padding: "1.25rem",
          border: "1px solid #e8e0cc",
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
        <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "#4a5568" }}>
          {prog.howToRegister}
        </p>
      </div>
    </div>
  </div>
);

const AcademyInfoSecurity = () => {
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
            SCHOOL 2 OF 4
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
            School of Information Security
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              color: GOLD,
              marginBottom: "1rem",
              maxWidth: 700,
            }}
          >
            From ISO 27001 implementation to board-level CISO leadership — the five credentials
            that define an information security career.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              opacity: 0.75,
              maxWidth: 740,
              marginBottom: "1.75rem",
            }}
          >
            The School of Information Security serves working security professionals who are ready
            to formalise their expertise with globally recognised PECB credentials. Every programme
            is at implementer, auditor, or leadership level. If you work in information security,
            risk management, or security operations and you need internationally recognised
            qualifications, this school is built for you.
          </p>

          {/* Pathway bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              alignItems: "center",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "8px",
              padding: "0.875rem 1.25rem",
              border: "1px solid rgba(255,255,255,0.12)",
              maxWidth: "fit-content",
            }}
          >
            {[
              "ISO 27001 Lead Implementer",
              "ISO 27001 Lead Auditor",
              "ISO 27005 Lead Risk Manager",
              "ISO 27035 Lead Incident Manager",
              "PECB CISO",
            ].map((step, i, arr) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: "0" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: i === arr.length - 1 ? GOLD : "rgba(255,255,255,0.8)",
                  }}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ margin: "0 8px", color: GOLD, opacity: 0.6 }}>→</span>
                )}
              </span>
            ))}
          </div>
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

      {/* CTA */}
      <section style={{ background: CREAM, padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.75rem", color: NAVY, marginBottom: "1rem" }}>
            Ready to enrol or enquire?
          </h2>
          <p
            style={{
              color: "#4a5568",
              maxWidth: 480,
              margin: "0 auto 2rem",
            }}
          >
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

export default AcademyInfoSecurity;
