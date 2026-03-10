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

const aiProgrammes: Programme[] = [
  {
    badge: "AI GOVERNANCE TRACK — IMPLEMENTER",
    title: "ISO/IEC 42001 Lead Implementer — AI Management System",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 42001 Lead Implementer",
      idealFor:
        "AI Product Managers, Tech Leads, DPOs, Compliance Officers, and Risk Professionals Managing AI Deployments",
    },
    about:
      "ISO/IEC 42001 is the world's first international standard for Artificial Intelligence Management Systems (AIMS). It provides a framework for organisations to develop, implement, maintain, and continually improve a responsible AI management system. The Lead Implementer credential qualifies professionals to design and build an AIMS aligned to ISO 42001 requirements covering AI governance structures, AI risk assessment and treatment, data quality and bias management, human oversight mechanisms, AI transparency policies, and AI system lifecycle management. For organisations deploying AI in fintech, healthtech, edtech, lending, insurance, or government services, this credential provides the formal governance qualification needed to demonstrate responsible AI deployment to regulators, boards, and customers.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "AI GOVERNANCE TRACK — AUDITOR",
    title: "ISO/IEC 42001 Lead Auditor — AI Management System",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO/IEC 42001 Lead Auditor",
      idealFor:
        "Auditors, Regulators, Senior AI Governance Consultants, Compliance Assessors, Internal Audit Professionals",
    },
    about:
      "The ISO 42001 Lead Auditor credential qualifies professionals to plan, conduct, and report on AI management system audits, assessing whether an organisation's AIMS meets ISO 42001 requirements. As AI regulation matures and regulators begin conducting AI compliance assessments, the demand for qualified AI auditors will grow rapidly. This programme covers: AI audit principles and planning, evaluating AI governance structures, assessing AI risk management processes, auditing AI data and bias management programmes, evaluating human oversight and transparency mechanisms, and writing AI audit reports. For professionals in internal audit, regulatory assessment, or AI governance consulting, this is the credential that formalises AI audit authority.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "AI GOVERNANCE TRACK — TECHNICAL AI PROFESSIONAL",
    title: "Certified AI Professional (CAIP)",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified AI Professional (CAIP)",
      idealFor:
        "Data Scientists, AI Engineers, Machine Learning Practitioners, Technical Professionals Building and Deploying AI Systems",
    },
    about:
      "The PECB Certified AI Professional (CAIP) credential is designed for technical professionals who build, deploy, and maintain AI systems and who need a formalised qualification that demonstrates their professional competence. Unlike governance-focused credentials, the CAIP addresses the technical dimensions of responsible AI — including algorithm design and fairness, model validation and testing, AI data management, technical bias detection and mitigation, and AI system security. The programme provides a professional framework for technical AI practitioners, enabling them to demonstrate competence to employers, clients, and regulators. For data scientists and AI engineers working at fintechs, telcos, healthtech firms, or international technology companies, this is the credential that professionalises the AI technical role.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "AI GOVERNANCE TRACK — AI RISK MANAGER",
    title: "Lead AI Risk Manager",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified Lead AI Risk Manager",
      idealFor:
        "Risk Managers, Compliance Officers, AI Product Owners, Enterprise Risk Directors Managing AI-Related Risk",
    },
    about:
      "The Lead AI Risk Manager credential qualifies professionals to identify, assess, manage, and monitor AI-related risks across an organisation. AI introduces risk types that conventional enterprise risk management frameworks were not designed to handle algorithmic bias, model drift, adversarial attacks, AI hallucination, and regulatory non-compliance. This programme equips risk professionals with the AI-specific risk vocabulary, assessment methodology, and management framework needed to integrate AI risk into enterprise risk programmes. Topics include: AI risk identification and classification, AI risk assessment methodologies, risk treatment strategies for AI-specific risks, monitoring and reviewing AI risk, and reporting AI risk to boards and regulators. This credential pairs naturally with ISO 31000 Lead Risk Manager for professionals building comprehensive enterprise risk capability.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "AI GOVERNANCE TRACK — AI MANAGEMENT",
    title: "Certified AI Manager (CAIM)",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified AI Manager (CAIM)",
      idealFor:
        "Senior Managers and Executives Overseeing AI Strategy, Deployment, and Governance at Organisational Level",
    },
    about:
      "The PECB Certified AI Manager (CAIM) credential is designed for senior managers and executives who are responsible for AI strategy, AI programme management, and AI governance at the organisational level but who do not operate at the technical implementation level. The CAIM gives leaders the conceptual understanding, governance vocabulary, and management frameworks needed to discharge their AI oversight responsibilities credibly. Topics include: AI strategy and business alignment, AI governance frameworks and board responsibilities, managing AI vendors and AI procurement, AI ethics and responsible AI leadership, communicating AI risk to boards and regulators, and managing AI-related stakeholder concerns. For CIOs, CTOs, General Counsels, and Compliance Directors overseeing AI programmes, the CAIM provides the formal leadership credential that the AI governance role increasingly demands.",
    howToRegister: STANDARD_REGISTER,
  },
];

const grcProgrammes: Programme[] = [
  {
    badge: "GRC TRACK — RISK MANAGER",
    title: "ISO 31000 Lead Risk Manager",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO 31000 Lead Risk Manager",
      idealFor:
        "Chief Risk Officers, Risk Directors, Senior Risk Analysts, Enterprise Risk Consultants, Board Risk Committee Members",
    },
    about:
      "ISO 31000 is the international standard for risk management, providing principles, framework, and process guidance that applies across every sector and every type of risk. The Lead Risk Manager credential qualifies professionals to design, implement, and lead enterprise risk management programmes aligned to ISO 31000. For organisations in financial services, insurance, infrastructure, and government, ISO 31000 provides the internationally recognised enterprise risk management framework that satisfies board, regulator, and rating agency expectations. The programme covers: the ISO 31000 risk management framework, risk identification and analysis methods, risk evaluation and risk treatment, risk communication and consultation, monitoring and reviewing the risk programme, and integrating risk management into organisational governance. This credential pairs naturally with ISO 27005 Lead Risk Manager (information security risk) and Lead AI Risk Manager for professionals building comprehensive multi-domain risk expertise.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "GRC TRACK — COMPLIANCE MANAGER",
    title: "ISO 37301 Lead Compliance Manager",
    meta: {
      duration: "5 Days + Examination",
      credential: "PECB Certified ISO 37301 Lead Compliance Manager",
      idealFor:
        "Chief Compliance Officers, Legal Directors, Senior Compliance Managers — Banks, Fintechs, Telcos, Healthcare, Listed Companies",
    },
    about:
      "ISO 37301 is the international standard for compliance management systems — providing a framework for organisations to design, implement, and maintain programmes that meet all applicable legal, regulatory, and ethical obligations. The Lead Compliance Manager credential qualifies professionals to build and lead compliance management systems aligned to ISO 37301. The rapidly evolving regulatory landscape and sector-specific frameworks make formal compliance management capability a boardroom-level requirement. This programme covers: compliance governance structures, compliance risk assessment, building compliance policies and procedures, compliance culture and training, compliance monitoring and reporting, managing regulatory relationships, and responding to enforcement actions. For Chief Compliance Officers, General Counsels, and Senior Compliance Managers, this is the internationally recognised credential that formalises their professional authority.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "GRC TRACK — IT GOVERNANCE",
    title: "ISO/IEC 38500 Lead IT Governance Manager",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified ISO/IEC 38500 Lead IT Governance Manager",
      idealFor:
        "CIOs, IT Directors, Board Members, Senior Executives Responsible for IT Strategy and Governance Alignment",
    },
    about:
      "ISO/IEC 38500 is the international standard for the governance of information technology, providing principles and framework guidance for boards and senior executives who are responsible for ensuring that IT investments and operations align with organisational strategy and regulatory requirements. The Lead IT Governance Manager credential qualifies professionals to evaluate and direct the governance of IT at the board and executive level. For CIOs, IT Directors, and Non-Executive Directors with technology oversight responsibility at Nigerian banks, telcos, government agencies, and listed companies, this credential provides the formally recognised governance qualification for IT leadership. The programme covers: IT governance principles, evaluating and directing IT strategy, monitoring IT performance and compliance, managing IT risk at board level, and IT governance in regulated sectors.",
    howToRegister: STANDARD_REGISTER,
  },
  {
    badge: "GRC TRACK — AUDITOR",
    title: "Management Systems Internal Auditor",
    meta: {
      duration: "3 Days + Examination",
      credential: "PECB Certified Management Systems Internal Auditor",
      idealFor:
        "Internal Auditors, Compliance Officers, Independent Consultants Auditing Across Multiple Management System Standards",
    },
    about:
      "The Management Systems Internal Auditor credential qualifies professionals to conduct internal audits across multiple ISO management system standards — including ISO 27001, ISO 42001, ISO 37301, ISO 31000, and others. It is a versatile, multi-standard audit qualification that is highly valued by Big 4 firms, internal audit departments, management consulting firms, and independent compliance consultants who audit organisations against more than one standard. The programme covers: audit principles and ethical requirements, audit planning and preparation, conducting audit interviews and evidence gathering, evaluating audit evidence, writing audit findings and non-conformity reports, and managing the internal audit lifecycle. For professionals who audit across multiple standards or who want a single credential that demonstrates audit competence across the management systems landscape, this is the most efficient qualification available.",
    howToRegister: STANDARD_REGISTER,
  },
];

const ProgrammeCard = ({ prog, track }: { prog: Programme; track: "ai" | "grc" }) => (
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
          background: track === "ai" ? `${GOLD}20` : `${NAVY}15`,
          color: track === "ai" ? GOLD : NAVY,
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

const TrackHeader = ({
  label,
  title,
  count,
}: {
  label: string;
  title: string;
  count: string;
}) => (
  <div
    style={{
      background: NAVY,
      borderRadius: "10px",
      padding: "1.5rem 2rem",
      marginBottom: "1.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "0.75rem",
    }}
  >
    <div>
      <span
        style={{
          display: "block",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: GOLD,
          textTransform: "uppercase",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </span>
      <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>{title}</span>
    </div>
    <span
      style={{
        fontSize: "0.75rem",
        fontWeight: 700,
        color: GOLD,
        background: `${GOLD}20`,
        padding: "4px 12px",
        borderRadius: "20px",
      }}
    >
      {count}
    </span>
  </div>
);

const AcademyAIGRC = () => {
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
            SCHOOL 4 OF 4
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
            School of AI, GRC & Digital Transformation
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              color: GOLD,
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            AI management system credentials, AI professional qualifications, enterprise risk,
            compliance management, IT governance, and internal audit — nine programmes across two
            tracks.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ background: "#f9f9f9", padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>

          {/* AI Track */}
          <TrackHeader
            label="Track 1"
            title="AI Governance Track"
            count="5 Programmes"
          />
          {aiProgrammes.map((prog) => (
            <ProgrammeCard key={prog.title} prog={prog} track="ai" />
          ))}

          <div style={{ height: "1rem" }} />

          {/* GRC Track */}
          <TrackHeader
            label="Track 2"
            title="Governance, Risk & Compliance Track"
            count="4 Programmes"
          />
          {grcProgrammes.map((prog) => (
            <ProgrammeCard key={prog.title} prog={prog} track="grc" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: CREAM, padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 800, fontSize: "1.75rem", color: NAVY, marginBottom: "1rem" }}>
            Ready to enrol or enquire?
          </h2>
          <p style={{ color: "#4a5568", maxWidth: 480, margin: "0 auto 2rem" }}>
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

export default AcademyAIGRC;
