import { FileText, BookOpen, MessageSquare, Users } from "lucide-react";
import { seedResources, seedArticles, seedTestimonials } from "@/data/seedData";

const stats = [
  { label: "Total Resources", value: seedResources.length, icon: FileText, color: "text-teal" },
  { label: "Published Articles", value: seedArticles.filter(a => a.published).length, icon: BookOpen, color: "text-mid-blue" },
  { label: "Active Testimonials", value: seedTestimonials.filter(t => t.active).length, icon: MessageSquare, color: "text-navy" },
  { label: "Email Captures", value: 47, icon: Users, color: "text-teal" },
];

const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-foreground mb-8">Dashboard</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map(s => (
        <div key={s.label} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <s.icon className={`h-8 w-8 ${s.color}`} />
          </div>
          <p className="text-3xl font-bold text-foreground">{s.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {[
          "Resource uploaded: NDPA 2023 Compliance Checklist",
          "Article published: Araka v. E-Cart Internet Services",
          "New registration: john@example.com downloaded ISO 27001 Template",
          "Testimonial added: Head of Compliance, Major Nigerian Bank",
        ].map((activity, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground py-2 border-b border-border last:border-0">
            <div className="h-2 w-2 rounded-full bg-teal flex-shrink-0" />
            {activity}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
