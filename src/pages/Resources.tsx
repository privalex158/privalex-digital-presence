import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { seedResources, categoryColors } from "@/data/seedData";
import { Search, FileText, Download } from "lucide-react";
import { getResources, type AdminResource } from "@/lib/resources";

const categories = ["All", "Data Protection", "Cybersecurity", "AI Governance", "Regulatory Updates", "Training"];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [uploaded, setUploaded] = useState<AdminResource[]>([]);

  useEffect(() => {
    getResources().then(setUploaded).catch(() => {});
  }, []);

  const filteredSeed = seedResources.filter(r => {
    if (!r.published) return false;
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.description.toLowerCase().includes(search.toLowerCase())) return false;
    if (category !== "All" && r.category !== category) return false;
    return true;
  });

  const filteredUploaded = uploaded.filter(r => {
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.description.toLowerCase().includes(search.toLowerCase())) return false;
    if (category !== "All" && !r.tags?.includes(category)) return false;
    return true;
  });

  const featured = filteredSeed.filter(r => r.featured);
  const rest = filteredSeed.filter(r => !r.featured);

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

          {filteredUploaded.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-foreground mb-6">Latest Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUploaded.map(r => (
                  <div key={r.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <FileText className="h-6 w-6 text-teal mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                    {r.description && <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{r.description}</p>}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {r.tags?.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[tag] || "bg-muted text-muted-foreground"}`}>{tag}</span>
                      ))}
                    </div>
                    <a href={r.file_url} target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button variant="teal" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                      <span className="text-xs text-muted-foreground">{r.format}</span>
                    </div>
                    <Button variant="teal" size="sm">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(r => (
                <div key={r.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <FileText className="h-6 w-6 text-teal mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{r.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[r.category] || "bg-muted text-muted-foreground"}`}>{r.category}</span>
                    <span className="text-xs text-muted-foreground">{r.format}</span>
                  </div>
                  <Button variant="teal" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </Button>
                </div>
              ))}
            </div>
          )}

          {filteredSeed.length === 0 && filteredUploaded.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

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
