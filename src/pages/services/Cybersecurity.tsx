import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  "ISO 27001 Programme Design & Implementation",
  "Information Security Gap Assessments",
  "Cyber Risk Assessments",
  "Incident Response Planning",
  "Security Governance Frameworks",
  "NIS 2 Directive Compliance",
  "Security Policy Development",
  "Penetration Testing Coordination",
  "Business Continuity & Disaster Recovery Planning",
  "Third-Party Security Risk Management",
  "Security Awareness Programme Design",
  "CISO Advisory Support",
];

const serviceDetails = [
  {
    title: "ISO 27001 Implementation & Certification Support",
    desc: "We design and implement Information Security Management Systems (ISMS) aligned to ISO/IEC 27001. From gap analysis and risk assessment through to policy design, control selection, internal audit support, and certification readiness — we provide end-to-end ISO 27001 programme delivery.",
  },
  {
    title: "Cyber Risk Assessments",
    desc: "We conduct independent cyber risk assessments aligned to ISO 27005, the NIST Cybersecurity Framework, and relevant sector guidance. Our assessments identify real vulnerabilities, quantify risk exposure, and produce board-ready risk registers with prioritised remediation recommendations.",
  },
  {
    title: "Incident Response Planning & Support",
    desc: "We design incident response plans aligned to ISO 27035, conduct tabletop exercises, and provide live incident response support when cyber incidents occur. Our team supports coordination with regulators, insurers, and law enforcement.",
  },
  {
    title: "Security Governance & Board Advisory",
    desc: "We support boards, audit committees, and executive leadership teams in understanding and discharging their cybersecurity governance obligations — translating technical risk into strategic decisions.",
  },
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{children}</p>
);

const Cybersecurity = () => {
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
              <Lock className="h-6 w-6 text-teal" />
            </div>
            <SectionLabel>Service Area</SectionLabel>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl text-balance animate-fade-in-up">
            Cybersecurity & Information Security
          </h1>
          <p className="text-xl text-white/65 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
            Cyber threats are growing in scale, sophistication, and regulatory consequence. We help
            organisations build security programmes that reduce risk, satisfy regulators, and protect
            the people and assets that matter most.
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
                Information security programmes built for your risk profile.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our cybersecurity practice helps organisations build, implement, and maintain
                information security programmes that meet international standards. Whether you are
                pursuing ISO 27001 certification, responding to a security incident, or building a
                security governance framework from scratch — we deliver the expertise and practical
                support you need.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                We work alongside your internal teams to design security programmes that are
                proportionate to your risk profile, aligned to regulatory expectations, and
                operationally sustainable.
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
            Speak to Our Cybersecurity Team
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Let us help you build an information security programme that meets international
            standards and withstands real-world threats.
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

export default Cybersecurity;
