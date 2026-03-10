import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{children}</p>
);

const Contact = () => {
  const { toast } = useToast();
  const formRef = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject || "Website Enquiry");
    const body = encodeURIComponent(
      `Full Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation}\n\n${form.message}`
    );
    const mailtoLink = `mailto:contact@privalexadvisory.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({ title: "Opening your mail app…", description: "Your message details have been pre-filled." });
    setForm({ name: "", email: "", organisation: "", subject: "", message: "" });
  };

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
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl text-white/65 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            We work best with organisations that want a genuine advisory relationship, not a
            transactional one. Whether you are starting a compliance programme from scratch,
            managing an urgent regulatory matter, or looking for a training partner for your team,
            we would like to speak with you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-28 bg-background">
        <div
          ref={formRef.ref}
          className={`container mx-auto px-4 transition-all duration-700 ${formRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Send us a message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Complete the form below and we will respond within one business day. We handle your
                enquiry in accordance with our Privacy Policy. We do not share your details with
                third parties.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Full Name <span className="text-teal">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email <span className="text-teal">*</span>
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Organisation
                    </label>
                    <Input
                      placeholder="Your company"
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Subject <span className="text-teal">*</span>
                    </label>
                    <Input
                      required
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="h-11"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message <span className="text-teal">*</span>
                  </label>
                  <Textarea
                    required
                    rows={6}
                    placeholder="Tell us about your compliance needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="resize-none"
                  />
                </div>
                <Button variant="teal" size="lg" type="submit" className="mt-2">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-light-grey rounded-xl p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-6 text-lg">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">General Enquiries</p>
                      <a
                        href="mailto:contact@privalexadvisory.com"
                        className="text-sm text-muted-foreground hover:text-teal transition-colors"
                      >
                        contact@privalexadvisory.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Training Enquiries</p>
                      <a
                        href="mailto:training@privalexadvisory.com"
                        className="text-sm text-muted-foreground hover:text-teal transition-colors"
                      >
                        training@privalexadvisory.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light-grey rounded-xl p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-6 text-lg">Our Offices</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Lagos, Nigeria</p>
                      <p className="text-sm text-muted-foreground">Block E, New Providence Garden</p>
                      <p className="text-sm text-muted-foreground">Opposite Russel International School</p>
                      <p className="text-sm text-muted-foreground">Lekki, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">London, United Kingdom</p>
                      <p className="text-sm text-muted-foreground">Suite 5058, Unit 3A</p>
                      <p className="text-sm text-muted-foreground">34-35 Hatton Garden</p>
                      <p className="text-sm text-muted-foreground">Holborn, EC1N 8DX, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-8">
                <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Response Commitment</p>
                <p className="text-white font-semibold text-lg mb-3">Within 1 business day</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  We respond to all enquiries within one business day. For urgent matters, including
                  active data breaches or imminent regulatory deadlines — please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
