import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  "NDPC Registration & Compliance",
  "NDPA 2023 Gap Assessments",
  "Data Protection Programme Design",
  "Privacy Impact Assessments (PIA/DPIA)",
  "Data Subject Rights Management",
  "Breach Notification & Response",
  "Cross-Border Data Transfer Mechanisms",
  "GDPR Compliance (UK/EU Operations)",
  "DPO-as-a-Service",
  "Records of Processing Activities (ROPA)",
  "Privacy by Design Reviews",
  "Third-Party Vendor Privacy Assessments",
];

const serviceDetails = [
  {
    title: "NDPC Registration & Compliance",
    desc: "We guide organisations through the Nigeria Data Protection Commission registration process, data protection audit filings, and ongoing compliance with the Nigeria Data Protection Act 2023. We have supported organisations across financial services, healthcare, education, and the public sector.",
  },
  {
    title: "Data Protection Impact Assessments (DPIAs)",
    desc: "We design and conduct DPIAs for high-risk processing activities including AI-driven profiling, biometric data processing, large-scale health data programmes, and surveillance systems. Our DPIAs meet regulatory requirements and satisfy business objectives simultaneously.",
  },
  {
    title: "Privacy Programme Design",
    desc: "From governance frameworks and privacy policies to records of processing activities, consent mechanisms, and data subject rights procedures, we design complete privacy programmes that work in practice — not just on paper.",
  },
  {
    title: "Breach Response & Regulatory Engagement",
    desc: "When a data breach occurs, speed and judgement matter. We provide immediate breach response support, prepare regulatory notifications under NDPA and GDPR timelines, manage regulatory engagement, and advise on remediation. Our team has handled breaches at some of Nigeria's largest organisations.",
  },
  {
    title: "Cross-Border Data Transfer Mechanisms",
    desc: "Nigerian organisations transferring personal data to the EU, UK, or United States require compliant transfer mechanisms. We design standard contractual clause frameworks, advise on adequacy reliance, and ensure transfer impact assessments meet regulatory expectations.",
  },
  {
    title: "GDPR Compliance for Nigerian Organisations with EU Operations",
    desc: "Nigerian companies with EU customers, EU-based employees, or EU-facing digital products must comply with the GDPR. We conduct GDPR gap assessments, design Article 27 representative arrangements, and build compliance programmes that satisfy European data protection authorities.",
  },
];

const dpoModels = [
  {
    tag: "ROLLING MONTHLY",
    title: "Rolling Monthly DPO-as-a-Service",
    desc: "A structured ongoing advisory relationship billed as an annual programme, payable in 12 equal monthly instalments and cancellable on one month's notice. Includes regular compliance check-ins, policy maintenance, DSAR and breach support, vendor oversight, and NDPC liaison. Best for organisations that want continuous compliance oversight without the cost of a full-time hire.",
  },
  {
    tag: "INTERIM / TRANSITION",
    title: "Interim and Transition DPO",
    desc: "Short-term DPO cover during recruitment, restructuring, regulatory engagement, or when your incumbent DPO is unavailable. We step in immediately, maintain regulatory compliance posture, and ensure no obligations are missed during the transition. Scoped for weeks or months depending on need.",
  },
  {
    tag: "PROJECT DPO",
    title: "Project DPO Support",
    desc: "Scoped delivery for specific compliance initiatives: DPIAs for new products or high-risk processing, vendor governance programmes, privacy policy and notice refresh, NDPC audit preparation, and regulatory remediation projects. A defined start and end, with clear deliverables. Ideal when you need DPO-level expertise for a specific task without an ongoing commitment.",
  },
  {
    tag: "BREACH-ON-CALL",
    title: "Breach-on-Call DPO",
    desc: "Rapid advisory and regulator/individual notification support when incidents occur. Available as a standing retainer (priority access guaranteed within agreed response times) or on a per-incident basis. Includes immediate breach triage, NDPC/ICO notification decision support, evidence pack preparation, and regulator engagement guidance throughout the incident lifecycle.",
  },
  {
    tag: "GROUP / PORTFOLIO",
    title: "Group and Portfolio DPO Office",
    desc: "A single DPO office covering multiple entities, products, or jurisdictions with consolidated governance reporting. Designed for groups operating multiple regulated Nigerian entities, fintechs with multi-product structures, and organisations with operations spanning Nigeria, the UK, and the EU. Includes associate DPOs, unified KPIs, cross-entity data governance, and board-level assurance packs.",
  },
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{children}</p>
);

const DataProtection = () => {
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
              <Shield className="h-6 w-6 text-teal" />
            </div>
            <SectionLabel>Service Area</SectionLabel>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl text-balance animate-fade-in-up">
            Data Protection & Privacy
          </h1>
          <p className="text-xl text-white/65 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
            We advise organisations at every stage of their data protection journey — from first
            registration with the NDPC to enterprise-wide privacy transformation programmes.
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
                Practical data protection advisory, built for your organisation.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our data protection practice advises organisations on every aspect of privacy
                compliance — from the NDPA 2023 and GDPR to sector-specific regulatory requirements.
                We work with organisations at every stage of maturity, from those building their
                first compliance programme to those managing complex cross-border data operations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Every engagement produces a concrete deliverable: a compliance framework, a gap
                assessment report, a privacy programme, or a policy suite. We do not produce advice
                you cannot implement.
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

      {/* DPO-as-a-Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionLabel>Outsourced DPO Services</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Managed Privacy Office
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-3xl">
            For organisations that need a certified Data Protection Officer without a full-time
            appointment, PrivaLex Advisory provides a complete Managed Privacy Office — our
            DPO-as-a-Service suite. Every engagement is led by NDPC-licensed DPOs available for
            formal appointment and ongoing compliance oversight.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
            We offer five distinct engagement models, from on-call advisory for lean teams to a full
            enterprise DPO office for multi-entity groups. All engagements include NDPC liaison
            support, management reporting, and access to our full template and playbook library.
            Pricing is tailored to your risk profile, data footprint, and sector.
          </p>
          <div className="space-y-5">
            {dpoModels.map((m) => (
              <div
                key={m.tag}
                className="flex gap-0 rounded-xl overflow-hidden border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="w-36 flex-shrink-0 bg-teal/80 flex items-center justify-center p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider text-center leading-tight">
                    {m.tag}
                  </span>
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-base font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
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
            Speak to Our Data Protection Team
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Our team is ready to help you navigate Nigeria's data protection landscape and build a
            compliance programme that works.
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

export default DataProtection;
