import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  "AI Risk Assessments",
  "EU AI Act Readiness",
  "Responsible AI Programme Design",
  "Automated Decision-Making Reviews",
  "AI Ethics & Governance Frameworks",
  "Technology Policy Counsel",
  "Algorithmic Impact Assessments",
  "AI Procurement & Vendor Assessment",
  "AI Transparency & Explainability Reviews",
  "Regulatory Horizon Scanning — AI",
  "AI Training Data Compliance",
  "Board-Level AI Risk Briefings",
];

const serviceDetails = [
  {
    title: "AI Risk Assessment & Governance Framework Design",
    desc: "We assess the AI risks specific to your organisation's systems and deployment context, then design governance frameworks aligned to ISO/IEC 42001, the EU AI Act, and Nigeria's emerging AI policy landscape. Our frameworks give boards and compliance teams genuine oversight of AI-related risk.",
  },
  {
    title: "EU AI Act Readiness",
    desc: "The EU Artificial Intelligence Act establishes the world's first binding AI regulatory framework. Nigerian organisations offering AI systems to EU users, or deploying AI within EU operations, must understand and plan for AI Act obligations. We conduct readiness assessments and design compliance roadmaps.",
  },
  {
    title: "Responsible AI Programme Design",
    desc: "From AI ethics policies and bias assessments to algorithmic transparency frameworks and human oversight mechanisms, we design Responsible AI programmes that satisfy regulators, protect users, and support sustainable AI deployment.",
  },
  {
    title: "Automated Decision-Making Reviews",
    desc: "AI systems that make decisions about individuals in credit, recruitment, healthcare, insurance, or law enforcement trigger specific obligations under the NDPA, GDPR, and the AI Act. We review automated decision-making systems, assess compliance gaps, and design Article 22-compliant processes.",
  },
  {
    title: "Technology Contracts & AI Vendor Due Diligence",
    desc: "Procuring AI tools and technology services creates complex data protection and liability obligations. We review and negotiate AI vendor contracts, SaaS agreements, and data processing arrangements — ensuring your organisation's rights and obligations are properly protected.",
  },
  {
    title: "Technology Policy Research & Publications",
    desc: "PrivaLex Advisory publishes original research on AI governance, data protection law, and technology policy. Our published work is cited by regulators and referenced by practitioners across Africa and Europe. We advise stakeholders on technology policy design.",
  },
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{children}</p>
);

const AIGovernance = () => {
  const contentRef = useScrollReveal();

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/10 blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
              <Brain className="h-6 w-6 text-teal" />
            </div>
            <SectionLabel>Service Area</SectionLabel>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl text-balance animate-fade-in-up">
            AI Governance & Technology Policy
          </h1>
          <p className="text-xl text-white/65 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
            Artificial intelligence is moving faster than any regulatory framework can keep up with.
            We help organisations deploy AI responsibly, govern it rigorously, and stay ahead of the
            regulations that are catching up.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 bg-background">
        <div
          ref={contentRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${contentRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
                Governance frameworks for the AI era.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The AI regulatory landscape is evolving rapidly. The EU AI Act, emerging African AI
                frameworks, and sector-specific guidance are creating new compliance obligations for
                organisations that develop, deploy, or procure AI systems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Our AI governance practice helps organisations understand their regulatory
                obligations, assess AI-related risks, and build governance frameworks that are
                proportionate, practical, and future-proof. We advise on the intersection of AI,
                data protection, and technology policy — because these issues do not exist in
                isolation.
              </p>
              <Button variant="teal" size="lg" asChild>
                <Link to="/contact" className="group">
                  Speak to Our Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            <div className="bg-light-grey rounded-xl p-9 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-7">Our Services</h3>
              <div className="space-y-3.5">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-teal" />
                    </div>
                    <span className="text-foreground text-sm leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <SectionLabel>The Services We Provide</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-7">
            {serviceDetails.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-teal rounded-t-xl" />
                <h3 className="text-base font-semibold text-foreground mb-3 mt-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            Speak to Our AI Governance Team
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Get ahead of AI regulation with governance frameworks built by practitioners who
            understand both the technology and the law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="teal" size="lg" asChild>
              <Link to="/contact">Speak to Our Team</Link>
            </Button>
            <Button variant="white-outline" size="lg" asChild>
              <Link to="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIGovernance;
