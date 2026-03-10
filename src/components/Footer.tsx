import { Link } from "react-router-dom";
import PrivaLexLogo from "./PrivaLexLogo";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    {/* Footer CTA */}
    <div className="border-b border-white/10">
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
          Ready to speak with us?
        </h2>
        <p className="text-white/65 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          We work with organisations that are serious about compliance. If you are building a data
          protection programme, managing a cybersecurity risk, navigating the AI regulatory
          landscape, or need a DPO — let us talk.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-md bg-teal text-white font-medium hover:bg-teal/90 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-teal/20 active:scale-[0.97]"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    {/* Footer columns */}
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <PrivaLexLogo variant="white" className="mb-5" />
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            Compliance Redefined. Privacy Secured.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/privalex-advisory"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-white/55 hover:bg-teal hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/PrivaLexAdvisor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-white/55 hover:bg-teal hover:text-white transition-all duration-200"
              aria-label="X / Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Data Protection & Privacy", href: "/services/data-protection" },
              { label: "Cybersecurity & Info Security", href: "/services/cybersecurity" },
              { label: "AI Governance & Tech Policy", href: "/services/ai-governance" },
              { label: "Training & PrivaLex Academy", href: "/services/academy" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-white/55 text-sm hover:text-teal transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", href: "/about" },
              { label: "Insights", href: "/insights" },
              { label: "Resource Library", href: "/resources" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-white/55 text-sm hover:text-teal transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-2.5 text-white/55 text-sm">
            <li>
              <a
                href="mailto:contact@privalexadvisory.com"
                className="hover:text-teal transition-colors duration-150"
              >
                contact@privalexadvisory.com
              </a>
            </li>
            <li>
              <a
                href="mailto:training@privalexadvisory.com"
                className="hover:text-teal transition-colors duration-150"
              >
                training@privalexadvisory.com
              </a>
            </li>
            <li className="pt-2 leading-relaxed">
              Lekki, Lagos, Nigeria
              <br />
              Holborn, London, UK
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/35 text-xs">
          © {new Date().getFullYear()} PrivaLex Advisory. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-white/35 text-xs hover:text-white/60 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-white/35 text-xs hover:text-white/60 transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
