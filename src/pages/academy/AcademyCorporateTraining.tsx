import { Link } from "react-router-dom";

const GOLD = "#c99014";
const NAVY = "#0c1f43";
const CREAM = "#fcf4dc";
const CARD_LIGHT = "#fdf8ed";

const trainingOptions = [
  {
    title: "Group bookings",
    body: "Minimum 3 participants; group pricing available on all programmes. Contact us for volume rates",
  },
  {
    title: "Dedicated cohorts",
    body: "We deliver dedicated cohorts for organisations that want to train a team together, on a schedule that suits your calendar",
  },
  {
    title: "Customised content",
    body: "For organisations with specific sector contexts (banking, healthcare, telecoms, government), we can contextualise course content to your regulatory environment",
  },
  {
    title: "In-house delivery",
    body: "Selected programmes can be delivered on-site at your organisation's premises in Lagos or London",
  },
  {
    title: "Annual training retainers",
    body: "Organisations that want to provide ongoing training access for their compliance and security teams can take out an annual training retainer covering multiple programmes and unlimited Masterclass access",
  },
  {
    title: "DPO and CISO development programmes",
    body: "We design bespoke multi-module professional development programmes for organisations building or upgrading their DPO or CISO function",
  },
];

const sectors = [
  "Financial Services & Fintech",
  "Healthcare & Life Sciences",
  "Telecommunications",
  "Government & Public Sector",
  "Legal Profession",
  "Technology & E-Commerce",
  "Energy & Infrastructure",
  "Education & Universities",
];

const AcademyCorporateTraining = () => {
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
            CORPORATE & INSTITUTIONAL
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
            Corporate & Institutional Training
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              opacity: 0.78,
              maxWidth: 720,
            }}
          >
            PrivaLex Academy works with organisations that need to train teams, not just individuals.
            We design corporate training programmes that meet regulatory obligations, build internal
            capability, and deliver measurable outcomes without pulling your team out of work for
            longer than necessary.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#f9f9f9", padding: "4rem 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>

          {/* What we offer */}
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
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: GOLD,
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                What We Offer Organisations
              </p>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: NAVY,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Corporate Training Options
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {trainingOptions.map((option) => (
                  <div
                    key={option.title}
                    style={{
                      background: CARD_LIGHT,
                      border: "1px solid #e8e0cc",
                      borderRadius: "10px",
                      padding: "1.25rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: "3px",
                        background: GOLD,
                      }}
                    />
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        color: NAVY,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {option.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#4a5568" }}>
                      {option.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sectors */}
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
                Sectors We Serve
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    style={{
                      background: `${GOLD}14`,
                      color: NAVY,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: "6px",
                      border: `1px solid ${GOLD}30`,
                    }}
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
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
                Get in Touch
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#374151", marginBottom: "1.5rem" }}>
                To discuss a corporate training programme, group booking, or bespoke training
                design, contact our team directly.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
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
                  ENQUIRE ABOUT CORPORATE TRAINING
                </a>
                <a
                  href="mailto:training@privalexadvisory.com"
                  style={{
                    fontSize: "0.88rem",
                    color: NAVY,
                    fontWeight: 600,
                    textDecoration: "none",
                    opacity: 0.75,
                  }}
                >
                  training@privalexadvisory.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyCorporateTraining;
