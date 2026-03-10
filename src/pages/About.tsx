import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Users, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{children}</p>
);

const About = () => {
  const missionRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const officesRef = useScrollReveal();
  const accredRef = useScrollReveal();

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-0 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <SectionLabel>Who We Are</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl text-balance animate-fade-in-up">
            Who We Are
          </h1>
          <p className="text-xl text-white/65 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
            Africa's leading independent data protection, cybersecurity, and technology compliance
            advisory firm.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-background">
        <div
          ref={missionRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${missionRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-7 leading-snug">
                Built for African organisations. Held to global standards.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PrivaLex Advisory was established to address a gap that was impossible to ignore:
                the most complex data protection, cybersecurity, and AI governance challenges facing
                African organisations were being handled with advice designed for a different
                continent, different regulatory environment, and different risk context.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We built PrivaLex to close that gap. Our advisors combine deep regulatory knowledge,
                practical enforcement experience, and genuine technical understanding to deliver
                advice that is grounded in African business reality and aligned to the highest
                international standards.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From our offices in Lekki, Lagos and Holborn, London, we serve financial
                institutions, technology companies, healthcare providers, government agencies, and
                international organisations operating across Nigeria, West Africa, the United
                Kingdom, and the European Union.
              </p>
              <SectionLabel>Our Mission</SectionLabel>
              <blockquote className="border-l-4 border-teal pl-6 py-2 italic text-foreground text-lg leading-relaxed">
                "To make world-class data protection, cybersecurity, and AI governance advisory
                accessible to every organisation that needs it — starting in Africa."
              </blockquote>
            </div>
            <div className="bg-light-grey rounded-xl p-9 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-8">Our Values</h3>
              <div className="space-y-7">
                {[
                  {
                    title: "Rigour",
                    desc: "Every piece of advice is grounded in law, regulation, and technical standards.",
                  },
                  {
                    title: "Practicality",
                    desc: "We deliver outputs our clients can implement, not theoretical frameworks.",
                  },
                  {
                    title: "Independence",
                    desc: "We are not tied to any vendor, platform, or technology provider.",
                  },
                  {
                    title: "African-first",
                    desc: "We are built for African organisations while maintaining global standards.",
                  },
                ].map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="w-1 bg-teal rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{v.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes PrivaLex Different */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-4">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            What Makes PrivaLex Different
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Practitioners, Not Compliance Factories",
                desc: "Every member of our team has operational experience in the disciplines they advise on.",
              },
              {
                title: "We Publish Our Thinking",
                desc: "Our white papers, articles, and regulatory analyses are available publicly because we believe the quality of our thinking should speak for itself.",
              },
              {
                title: "Africa-First, Globally Aligned",
                desc: "We understand the Nigerian regulatory environment at granular depth, and we understand how it interacts with GDPR, the AI Act, ISO standards, and US regulatory requirements.",
              },
              {
                title: "We Train the Professionals",
                desc: "Through PrivaLex Academy, we develop the DPOs, compliance officers, security managers, and risk professionals that the market needs.",
              },
              {
                title: "We Engage Regulators",
                desc: "We work with the NDPC and other regulatory bodies — not around them.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-teal rounded-t-xl" />
                <h3 className="text-base font-semibold text-foreground mb-2 mt-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy">
        <div
          ref={statsRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${statsRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, num: "2", label: "Offices Worldwide" },
              { icon: Award, num: "4", label: "Accreditations" },
              { icon: Users, num: "4", label: "Practice Areas" },
              { icon: Globe, num: "150+", label: "Countries (PECB)" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="text-center bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-200"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <s.icon className="h-7 w-7 text-teal mx-auto mb-4" />
                <p className="font-display text-3xl font-bold text-white mb-1">{s.num}</p>
                <p className="text-white/55 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-28 bg-background" id="locations">
        <div
          ref={officesRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${officesRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <SectionLabel>Our Locations</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Offices
          </h2>
          <div className="grid md:grid-cols-2 gap-7">
            {[
              {
                city: "Lagos, Nigeria",
                area: "Lekki",
                address: ["Block E, New Providence Garden", "Opposite Russel International School", "Lekki, Lagos", "Nigeria"],
              },
              {
                city: "London, United Kingdom",
                area: "Holborn",
                address: ["Suite 5058, Unit 3A", "34-35 Hatton Garden", "Holborn, EC1N 8DX", "United Kingdom"],
              },
            ].map((o) => (
              <div
                key={o.city}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-teal rounded-l-xl" />
                <div className="pl-2">
                  <MapPin className="h-6 w-6 text-teal mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-1">{o.city}</h3>
                  <p className="text-teal text-sm font-medium mb-3">{o.area}</p>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-0.5">
                    {o.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-light-grey" id="accreditations">
        <div
          ref={accredRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${accredRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="text-center mb-12">
            <SectionLabel>Credentials</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Accreditations & Recognition
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PECB Authorised Training Partner",
              "IIM Accredited Training Organisation",
              "NDPC Licensed DPCO",
              "NBA-ICLE Accredited",
            ].map((a) => (
              <span
                key={a}
                className="bg-card border border-border rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:border-teal/40 transition-all duration-200"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            Work with us.
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
            Ready to discuss your compliance needs? Our team is here to help.
          </p>
          <Button
            size="lg"
            className="bg-navy text-white hover:bg-navy/90 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
