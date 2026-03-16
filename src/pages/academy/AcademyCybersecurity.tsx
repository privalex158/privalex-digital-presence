import { Link } from "react-router-dom";

const GOLD = "#F4A623";
const NAVY = "#2C3E6B";
const TEAL = "#006E7F";
const CREAM = "#F8F9FC";
const CARD_LIGHT = "#F8F9FC";

interface Programme {
  badge: string;
  title: string;
  meta: { duration: string; credential: string; idealFor: string };
  about: string;
  howToRegister: string;
}

const STANDARD_REGISTER =
  "To register, click the 'Register Now' button at the top of this page. Complete the registration form with your full name, organisation, email address, and billing details. You will receive a booking confirmation within one business day. Payment can be made by bank transfer (USD), card, or institutional purchase order. Corporate registrations for three or more participants qualify for group pricing — contact us at training@privalexadvisory.com to discuss.";

const programmes: Programme[] = [
  {
    badge: "CYBER MANAGER",
    title: "ISO/IEC 27032 Lead Cybersecurity Manager",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 27032 Lead Cybersecurity Manager",
      idealFor:
        "Security Managers, Risk Professionals, CISOs, Senior Security Leads Managing Enterprise Cyber Programmes",
    },
    about:
      "ISO/IEC 27032 is the international framework for cybersecurity addressing the gaps between conventional information security, network security, internet security, and critical information infrastructure protection. The Lead Cybersecurity Manager credential qualifies professionals to design, implement, and manage a cybersecurity programme aligned to ISO 27032. The programme covers: the cybersecurity landscape and threat environment, cybersecurity governance and policy, cybersecurity risk assessment, implementing cybersecurity controls aligned to ISO 27032, stakeholder management and cybersecurity communications, and monitoring and improving cybersecurity programme performance.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "CYBER AUDITOR",
    title: "ISO/IEC 27032 Lead Cybersecurity Auditor",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified ISO/IEC 27032 Lead Cybersecurity Auditor",
      idealFor:
        "Security Auditors, Consultants, Senior Practitioners, Regulatory Assessors, Internal Audit Teams",
    },
    about:
      "The Lead Cybersecurity Auditor credential qualifies professionals to audit cybersecurity management systems against ISO/IEC 27032 requirements. It is the audit companion to the Lead Cybersecurity Manager credential — together, they provide the most complete cybersecurity management and assurance credential set available. The programme covers: cybersecurity audit principles and planning, gathering and evaluating cybersecurity audit evidence, assessing technical and governance controls, writing audit findings and non-conformity reports, and managing the audit lifecycle. For professionals in internal audit, external consulting, or regulatory assessment roles, this credential provides the formal authority to conduct and report on cybersecurity audits that withstand regulatory and board scrutiny.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "CLOUD SECURITY MANAGER",
    title: "Lead Cloud Security Manager",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified Lead Cloud Security Manager",
      idealFor:
        "Cloud Security Engineers, IT Security Managers, Cloud Architects, Security Consultants Supporting Cloud-First Organisations",
    },
    about:
      "Cloud adoption is accelerating across financial services, technology, healthcare, and government, and regulatory frameworks have created formal compliance expectations for cloud security governance. The Lead Cloud Security Manager credential qualifies professionals to design and manage cloud security programmes, ensuring that cloud environments are secured, governed, and compliant. The programme covers: cloud computing models and security implications, cloud security architecture and design, identity and access management in cloud environments, data security and encryption in cloud, compliance and regulatory considerations for cloud operations, and managing cloud security vendors and shared responsibility models. This is one of the fastest-growing specialist credentials globally, and it is currently among the most undersupplied qualifications in the market.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "CLOUD SECURITY AUDITOR",
    title: "Lead Cloud Security Auditor",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified Lead Cloud Security Auditor",
      idealFor:
        "Cloud Auditors, Compliance Professionals, Security Consultants, Internal Auditors at Cloud-First Organisations",
    },
    about:
      "The Lead Cloud Security Auditor credential qualifies professionals to plan, conduct, and report on cloud security audits, assessing whether an organisation's cloud environment, cloud security architecture, and cloud governance programme meet recognised security standards. As Nigerian banks, fintechs, and enterprises move increasingly to cloud infrastructure, the demand for professionals who can formally audit cloud security postures and write audit findings that satisfy regulator and board expectations is growing rapidly. The programme covers: cloud security audit planning and scope, assessing cloud security architectures and shared responsibility implementations, evaluating identity and access management, assessing data security and encryption controls, and writing cloud audit reports.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "CRISIS LEADER",
    title: "ISO 22361 Lead Crisis Manager",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified ISO 22361 Lead Crisis Manager",
      idealFor:
        "Crisis Management Teams, Senior Leaders, Board Members, Emergency Planning Professionals, Business Continuity Managers",
    },
    about:
      "ISO 22361 is the international standard for crisis management, addressing how organisations prepare for, respond to, and recover from major disruptive events. The Lead Crisis Manager credential qualifies professionals to design and lead crisis management programmes aligned to ISO 22361. Boards, regulators, and insurers increasingly require evidence that organisations have a formal crisis management capability — not just a business continuity plan. This programme covers: crisis management framework design, crisis leadership and decision-making, crisis communication strategies, stakeholder management during a crisis, exercising and testing crisis management arrangements, and post-crisis review and learning. This credential is the internationally recognised qualification that demonstrates your programme meets global standards.",
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
            <span style={{ fontSize: "0.82rem", color: "#1C2230" }}>{item.value}</span>
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
        <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "#1C2230" }}>
          {prog.howToRegister}
        </p>
      </div>
    </div>
  </div>
);

const AcademyCybersecurity = () => {
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
            SCHOOL 3 OF 4
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
            School of Cybersecurity
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
            Cybersecurity management, cloud security, CMMC, and crisis management credentials for
            professionals leading enterprise cyber programmes.
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
          <h2 style={{ fontWeight: 800, fontSize: "1.75rem", color: NAVY, marginBottom: "1rem" }}>
            Ready to enrol or enquire?
          </h2>
          <p style={{ color: "#1C2230", maxWidth: 480, margin: "0 auto 2rem" }}>
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

export default AcademyCybersecurity;
