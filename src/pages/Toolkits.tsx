import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const toolkits = [
  {
    title: "Data Protection Programme Toolkit",
    desc: "Everything you need to establish a data protection programme from scratch — policies, templates, process maps, and implementation guides.",
    items: ["Privacy Policy Template", "Data Processing Register", "DPIA Template", "Consent Management Framework", "Breach Response Plan"],
  },
  {
    title: "ISO 27001 Implementation Toolkit",
    desc: "A comprehensive toolkit for organisations seeking ISO 27001 certification — risk assessment templates, control implementation guides, and audit preparation materials.",
    items: ["Risk Assessment Template", "Statement of Applicability", "Information Security Policy Suite", "Internal Audit Checklist", "Management Review Template"],
  },
  {
    title: "AI Governance Starter Kit",
    desc: "Foundational documents and frameworks for organisations beginning their AI governance journey — risk assessments, policy templates, and compliance checklists.",
    items: ["AI Risk Assessment Framework", "Responsible AI Policy", "Automated Decision-Making Review Template", "AI Ethics Guidelines", "AI Compliance Checklist"],
  },
];

const Toolkits = () => (
  <div>
    <section className="pt-24 pb-16 bg-navy">
      <div className="container mx-auto px-4 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Toolkits</h1>
        <p className="text-xl text-white/70 max-w-3xl">
          Pre-built compliance toolkits designed to accelerate your programme implementation. Each toolkit contains the essential documents, templates, and frameworks you need.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 space-y-8">
        {toolkits.map((tk, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-8 border-l-4 border-l-teal">
            <h3 className="text-2xl font-bold text-foreground mb-3">{tk.title}</h3>
            <p className="text-muted-foreground mb-6">{tk.desc}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {tk.items.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <FileText className="h-4 w-4 text-teal flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Button variant="teal" size="sm">
              <Download className="h-4 w-4 mr-1" /> Request Toolkit
            </Button>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-light-grey text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-4">Need a custom toolkit?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We build bespoke compliance toolkits tailored to your organisation's specific regulatory environment and operational needs.</p>
        <Button variant="teal" size="lg" asChild><Link to="/contact">Speak to Our Team</Link></Button>
      </div>
    </section>
  </div>
);

export default Toolkits;
