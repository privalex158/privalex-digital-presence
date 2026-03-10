import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, BookOpen, MessageSquare, Settings, LogOut, Wrench } from "lucide-react";
import PrivaLexLogo from "@/components/PrivaLexLogo";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, end: true },
  { label: "Resources", href: "/admin/resources", icon: FileText },
  { label: "Insights", href: "/admin/insights", icon: BookOpen },
  { label: "Toolkits", href: "/admin/toolkits", icon: Wrench },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("privalex_admin");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-light-grey">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-border">
          <PrivaLexLogo />
          <p className="text-xs text-muted-foreground mt-2">Admin Panel</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-teal/10 text-teal" : "text-foreground hover:bg-muted"
                }`
              }
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 w-full transition-colors">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
