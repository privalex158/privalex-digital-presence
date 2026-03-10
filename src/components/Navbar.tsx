import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import PrivaLexLogo from "./PrivaLexLogo";

type DropdownItem = { label: string; href: string };

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    dropdown: [
      { label: "Data Protection & Privacy", href: "/services/data-protection" },
      { label: "Cybersecurity & Information Security", href: "/services/cybersecurity" },
      { label: "AI Governance & Technology Policy", href: "/services/ai-governance" },
    ],
  },
  {
    label: "Insights",
    dropdown: [
      { label: "Articles", href: "/insights" },
      { label: "White Papers", href: "/resources?format=Guide" },
      { label: "Case Studies", href: "/resources?category=Data+Protection" },
      { label: "Regulatory Alerts", href: "/insights?category=Regulatory+Updates" },
    ],
  },
  {
    label: "About",
    dropdown: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Locations", href: "/about#locations" },
      { label: "Accreditations & Recognitions", href: "/about#accreditations" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || !isHome;
  const bgClass = solid
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
    : "bg-transparent";
  const textClass = solid ? "text-foreground" : "text-white";
  const hoverClass = "hover:text-teal";

  const isActive = (href?: string, dropdown?: DropdownItem[]) => {
    if (href) return location.pathname === href;
    if (dropdown) return dropdown.some(d => location.pathname.startsWith(d.href.split("?")[0]));
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <PrivaLexLogo variant={solid ? "default" : "white"} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${hoverClass} ${textClass} ${
                    isActive(undefined, item.dropdown) && solid
                      ? "text-teal"
                      : isActive(undefined, item.dropdown) && !solid
                      ? "text-white font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-border py-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className="flex items-center px-4 py-2.5 text-sm text-foreground hover:bg-light-grey hover:text-teal transition-colors duration-150 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mr-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${hoverClass} ${textClass} ${
                  isActive(item.href) && solid
                    ? "text-teal"
                    : isActive(item.href) && !solid
                    ? "font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Button variant="teal" size="default" asChild>
            <Link to="/academy">PrivaLex Academy</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${textClass} hover:opacity-70`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-border shadow-xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[calc(100vh-5rem)] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="px-4 py-5 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-light-grey transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileDropdown === item.label ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 pb-1 space-y-0.5">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-teal rounded-md hover:bg-light-grey transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-light-grey hover:text-teal transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 pb-2">
            <Button variant="teal" className="w-full" asChild>
              <Link to="/academy">PrivaLex Academy</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
