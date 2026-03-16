import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Brain,
  GraduationCap,
  ArrowRight,
  Star,
  Clock,
  User,
  Quote,
  Search,
  PencilLine,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { seedTestimonials, seedArticles, categoryColors } from "@/data/seedData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const trustBadges = [
  "PECB Authorised Training Partner",
  "IIM Accredited CDPO Trainer",
  "NDPC Licensed DPCO",
  "NBA-ICLE Accredited",
  "Holborn, London",
  "Lekki, Lagos",
];

const whyCards = [
  {
    title: "Deep Regulatory Expertise",
    desc: "We do not offer generic compliance checklists. We understand the NDPA, GDPR, UK DPA, ISO standards, and sector-specific frameworks at the level needed to give organisations genuinely useful advice — not just safe advice.",
  },
  {
    title: "Africa and Global Reach",
    desc: "With our Global Headquarters in London and African Headquarters in Lagos, PrivaLex Advisory advises organisations operating across Nigeria, West Africa, the United Kingdom, and the European Union. Cross-border compliance is not a specialisation. It is what we do every day.",
  },
  {
    title: "Practitioners, Not Theorists",
    desc: "Our advisors have served as Data Protection Officers, published peer-reviewed research, trained regulators, and testified before legislative committees. When we advise your organisation, you get the judgement of practitioners.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    icon: Search,
    desc: "Understand the member's processing activities, systems, vendor relationships, and regulatory risk drivers through structured discovery.",
  },
  {
    num: "02",
    title: "Design",
    icon: PencilLine,
    desc: "Develop a tailored compliance and governance blueprint with prioritised, risk-led actions calibrated to the operator's size and complexity.",
  },
  {
    num: "03",
    title: "Implement",
    icon: Settings2,
    desc: "Build the documentation, workflows, training materials, and evidence packs required with named owners and defined accountability.",
  },
  {
    num: "04",
    title: "Assure",
    icon: ShieldCheck,
    desc: "Test effectiveness through compliance audits and periodic reviews. File annual CARs and adapt frameworks as regulations and the business evolve.",
  },
];

const serviceCards = [
  {
    icon: Shield,
    title: "Data Protection & Privacy",
    desc: "From NDPC registration and gap assessments to full data protection programme design, privacy impact assessments, breach response, and cross-border transfer mechanisms. We serve organisations that take their privacy obligations seriously and need an advisor who does too.",
    href: "/services/data-protection",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Information Security",
    desc: "ISO 27001 programme design and implementation, cyber risk assessments, incident response planning and security governance frameworks. We help boards, CISOs, and compliance teams build security programmes that stand up to real threats and real audits.",
    href: "/services/cybersecurity",
  },
  {
    icon: Brain,
    title: "AI Governance & Technology Policy",
    desc: "AI risk assessments, AI Act readiness, responsible AI programme design, automated decision-making reviews, and technology policy counsel. We are among the few advisory firms in Africa with published research and practical experience in AI governance.",
    href: "/services/ai-governance",
  },
  {
    icon: GraduationCap,
    title: "PrivaLex Academy",
    desc: "Certified training programmes for DPOs, compliance officers, security professionals, risk managers, and lawyers delivered through PrivaLex Academy, our PECB-authorised and IIM-accredited training division. From the IIM CDPO for Nigerian regulatory compliance to ISO 42001 for AI governance, we train the professionals who run compliance programmes.",
    href: "/services/academy",
  },
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{children}</p>
);

const Index = () => {
  const whyRef = useScrollReveal();
  const howRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const insightsRef = useScrollReveal();
  const aboutRef = useScrollReveal();

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center bg-navy overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80')" }}
        />
        {/* Dark overlay over image */}
        <div className="absolute inset-0 bg-navy/80" />
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-teal/10 blur-3xl" />
          <div className="absolute top-0 -left-20 w-[400px] h-[400px] rounded-full bg-mid-blue/15 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
          <div className="max-w-5xl">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 animate-fade-in border border-white/15">
              Africa's Leading Data Protection & Technology Compliance Firm
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-100 text-balance">
              Privacy is not a compliance checkbox.{" "}
              <span className="text-teal">It is how your organisation earns the right to operate.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/65 max-w-4xl mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
              PrivaLex Advisory is Africa's leading data protection, cybersecurity, and technology
              compliance firm — a licensed DPCO accredited by the Nigeria Data Protection Commission.
              We support organisations across Nigeria, the United Kingdom, and global markets with
              regulatory compliance, statutory audits, and annual audit returns under the Nigeria
              Data Protection Act 2023.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
              <Button variant="teal" size="lg" asChild>
                <Link to="/contact" className="group">
                  Speak to Our Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="white-outline" size="lg" asChild>
                <Link to="/services/data-protection">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/25 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-4 overflow-x-auto">
            <div className="flex items-center gap-6 min-w-max">
              {trustBadges.map((badge, i) => (
                <span key={badge} className="flex items-center gap-6">
                  <span className="text-xs text-white/55 font-medium whitespace-nowrap uppercase tracking-wider">
                    {badge}
                  </span>
                  {i < trustBadges.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-white/25" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PRIVALEX ─────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div
          ref={whyRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${whyRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <SectionLabel>Why PrivaLex</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-3xl text-balance">
            Compliance done right protects more than data. It protects your business.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14 text-lg leading-relaxed">
            We deliver advisory services built on real regulatory experience — not theory.
          </p>
          <div className="grid md:grid-cols-3 gap-7">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-teal rounded-t-xl" />
                <h3 className="text-lg font-semibold text-foreground mb-3 mt-2">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section className="py-28 bg-light-grey">
        <div
          ref={howRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${howRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How we work.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-14 text-lg leading-relaxed">
            Every PrivaLex Advisory engagement follows a repeatable four-stage delivery model —
            whether we are conducting a single DPIA or building a full compliance programme from
            scratch. You always know what happens next, who owns it, and what you will have at the end.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="bg-card rounded-xl p-7 border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors flex-shrink-0">
                    <step.icon className="h-5 w-5 text-teal" />
                  </div>
                  <span className="font-display text-3xl font-bold text-teal/25 group-hover:text-teal/40 transition-colors leading-none">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div
          ref={servicesRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${servicesRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <SectionLabel>Practice Areas</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Four disciplines. One integrated advisory practice.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-14 text-lg leading-relaxed">
            Every service we deliver is grounded in law, informed by real enforcement experience,
            and designed to produce results that withstand regulatory scrutiny.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCards.map((card, i) => (
              <Link
                key={card.href}
                to={card.href}
                className="group bg-navy rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-teal/30"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-teal/15 flex items-center justify-center mb-5 group-hover:bg-teal/25 transition-colors">
                  <card.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-white/60 mb-5 leading-relaxed text-sm">{card.desc}</p>
                <span className="text-teal text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <Button variant="teal" size="lg" asChild>
              <Link to="/services/data-protection">Explore All Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Speak to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── DPIA SCREENING TOOL ──────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B2A6B 0%, #151c58 100%)" }}>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">Free Compliance Tool</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 max-w-2xl text-balance">
            Does your processing require a DPIA?
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 text-lg leading-relaxed">
            Not sure if your processing activity triggers a legal obligation to conduct a Data
            Protection Impact Assessment? Our free multi-jurisdictional screening tool gives you an
            indicative answer in under five minutes — covering UK GDPR, EU GDPR, Nigeria NDPA 2023,
            12 US state and federal frameworks, and 16 African data protection laws.
          </p>
          <Button variant="teal" size="lg" asChild>
            <Link to="/dpia-screening-tool" className="group">
              Run the free screening
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <div className="flex flex-wrap gap-2 mt-6">
            {["UK GDPR", "Nigeria NDPA", "+ 29 more"].map((badge) => (
              <span key={badge} className="bg-white/10 text-white/75 text-xs font-medium px-3 py-1 rounded-full border border-white/15">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 bg-light-grey">
        <div
          ref={testimonialsRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${testimonialsRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <SectionLabel>Client Feedback</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What our clients say.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-14 text-lg leading-relaxed">
            We measure success by the outcomes we deliver for the organisations we serve.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {seedTestimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Quote className="h-8 w-8 text-teal/30 mb-4 flex-shrink-0" />
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-teal text-teal" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 flex-1 text-sm">
                  "{t.quote}"
                </blockquote>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{t.client_title}</p>
                  <p className="text-muted-foreground text-sm">{t.organisation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS PREVIEW ─────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div
          ref={insightsRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${insightsRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <SectionLabel>Knowledge Hub</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thinking at the frontier of data law.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-14 text-lg leading-relaxed">
            PrivaLex Advisory publishes original research, regulatory analysis, and practical
            guidance on the legal and technical issues that matter most to the organisations we serve.
            Our insights are referenced by practitioners and read by the professionals building
            compliance programmes across Africa and Europe.
          </p>
          <div className="grid md:grid-cols-3 gap-7">
            {seedArticles.map((article, i) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="h-44 bg-gradient-to-br from-navy/90 to-mid-blue/80 flex items-center justify-center relative overflow-hidden">
                  <Shield className="h-16 w-16 text-white/15" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }} />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                      categoryColors[article.category] || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {article.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-teal transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {article.read_time} min read
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="teal" size="lg" asChild>
              <Link to="/insights">View All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ───────────────────────────────────── */}
      <section className="py-28 bg-navy">
        <div
          ref={aboutRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${aboutRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-snug text-balance">
                Data Protection & Cybersecurity Advisory Leader
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-4">
                PrivaLex Advisory was founded on a single conviction: that organisations across
                Africa deserve access to the same quality of data protection, cybersecurity, and
                technology compliance advice available to the world's largest companies.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-10">
                From our offices in Lagos and London, we serve financial institutions, technology
                companies, healthcare providers, government agencies, and international organisations
                operating across Nigeria, West Africa, the United Kingdom, and the European Union.
              </p>
              <Button variant="white-outline" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "2", label: "Global Offices" },
                { num: "4", label: "Practice Areas" },
                { num: "150+", label: "Countries (PECB)" },
                { num: "4", label: "Accreditations" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors duration-200"
                >
                  <p className="font-display text-4xl font-bold text-teal mb-1">{stat.num}</p>
                  <p className="text-white/55 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMY CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
                PrivaLex Academy
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 max-w-2xl text-balance">
                Train the professionals who run your compliance programme.
              </h2>
              <p className="text-white/75 max-w-2xl mb-10 text-lg leading-relaxed">
                PrivaLex Academy is our dedicated training division — PECB authorised, IIM accredited,
                and NDPC ecosystem approved. We offer certified programmes across data protection,
                information security, cybersecurity, and AI governance. We also host NBA-ICLE accredited
                masterclasses.
              </p>
              <Button
                size="lg"
                className="bg-navy text-white hover:bg-navy/90 shadow-lg hover:shadow-xl transition-all duration-200"
                asChild
              >
                <a href="https://www.privalexacademy.com" target="_blank" rel="noopener noreferrer">
                  Visit PrivaLex Academy <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                  alt="Professional training workshop"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
