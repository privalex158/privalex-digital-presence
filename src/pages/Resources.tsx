import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { seedResources, categoryColors, accessLevelColors, accessLevelLabels } from "@/data/seedData";
import { Search, FileText, Download, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const categories = ["All", "Data Protection", "Cybersecurity", "AI Governance", "Regulatory Updates", "Training"];
const accessLevels = ["All", "free", "register", "clients_only"];
const formats = ["All", "PDF", "Excel Checklist", "Template", "Guide", "Report"];

const Resources = () => {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [access, setAccess] = useState("All");
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [regForm, setRegForm] = useState({ name: "", email: "", organisation: "" });
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const filtered = seedResources.filter(r => {
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.description.toLowerCase().includes(search.toLowerCase())) return false;
    if (category !== "All" && r.category !== category) return false;
    if (access !== "All" && r.access_level !== access) return false;
    return r.published;
  });

  const featured = filtered.filter(r => r.featured);
  const rest = filtered.filter(r => !r.featured);

  const handleAccess = (resource: typeof seedResources[0]) => {
    if (resource.access_level === "free") {
      toast({ title: "Download started", description: `Downloading ${resource.title}` });
    } else if (resource.access_level === "register") {
      setSelectedResource(resource.id);
      setRegModalOpen(true);
    } else {
      toast({ title: "Clients Only", description: "Contact us to access this resource." });
    }
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Registration complete", description: "Your download will begin shortly." });
    setRegModalOpen(false);
    setRegForm({ name: "", email: "", organisation: "" });
  };

  return (
    <div>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container mx-auto px-4 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">The PrivaLex Advisory Resource Library</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Published research, regulatory analysis, compliance guidance, and practical frameworks — available to download.
          </p>
        </div>
      </section>

      <section className="py-8 bg-light-grey border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${category === c ? "bg-teal text-white" : "bg-card border border-border text-foreground hover:bg-muted"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-foreground mb-6">Featured Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featured.map(r => (
                  <div key={r.id} className="bg-card border border-border rounded-lg p-6 border-l-4 border-l-teal relative">
                    <span className="absolute top-4 right-4 bg-teal/10 text-teal text-xs font-medium px-2 py-0.5 rounded-full">Featured</span>
                    <FileText className="h-8 w-8 text-teal mb-3" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{r.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{r.description}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[r.category] || "bg-muted text-muted-foreground"}`}>{r.category}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${accessLevelColors[r.access_level]}`}>{accessLevelLabels[r.access_level]}</span>
                      <span className="text-xs text-muted-foreground">{r.format}</span>
                    </div>
                    <Button variant="teal" size="sm" onClick={() => handleAccess(r)}>
                      <Download className="h-4 w-4 mr-1" /> {r.access_level === "free" ? "Download" : r.access_level === "register" ? "Register to Download" : "Request Access"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(r => (
              <div key={r.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <FileText className="h-6 w-6 text-teal" />
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${accessLevelColors[r.access_level]}`}>{accessLevelLabels[r.access_level]}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{r.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[r.category] || "bg-muted text-muted-foreground"}`}>{r.category}</span>
                  <span className="text-xs text-muted-foreground">{r.format}</span>
                </div>
                <Button variant="teal" size="sm" className="w-full" onClick={() => handleAccess(r)}>
                  <Download className="h-4 w-4 mr-1" /> {r.access_level === "free" ? "Download" : r.access_level === "register" ? "Register" : "Request Access"}
                </Button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Register modal */}
      <Dialog open={regModalOpen} onOpenChange={setRegModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register to Download</DialogTitle>
            <DialogDescription>Enter your details to access this resource.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRegSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Full Name *</label>
              <Input required value={regForm.name} onChange={e => setRegForm({ ...regForm, name: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Email *</label>
              <Input required type="email" value={regForm.email} onChange={e => setRegForm({ ...regForm, email: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Organisation</label>
              <Input value={regForm.organisation} onChange={e => setRegForm({ ...regForm, organisation: e.target.value })} />
            </div>
            <Button variant="teal" className="w-full" type="submit">Register & Download</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-16 bg-light-grey">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <Button variant="teal" asChild><Link to="/contact">Contact Our Team</Link></Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
