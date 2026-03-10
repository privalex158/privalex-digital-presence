import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { seedResources, categoryColors, accessLevelLabels } from "@/data/seedData";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ResourcesManager = () => {
  const { toast } = useToast();
  const [resources, setResources] = useState(seedResources);
  const [formOpen, setFormOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "", description: "", category: "Data Protection", format: "PDF",
    jurisdiction: "Nigeria", access_level: "free", featured: false, author: "",
  });

  const openNew = () => {
    setEditId(null);
    setForm({ title: "", description: "", category: "Data Protection", format: "PDF", jurisdiction: "Nigeria", access_level: "free", featured: false, author: "" });
    setFormOpen(true);
  };

  const openEdit = (r: typeof resources[0]) => {
    setEditId(r.id);
    setForm({ title: r.title, description: r.description, category: r.category, format: r.format, jurisdiction: r.jurisdiction, access_level: r.access_level, featured: r.featured, author: r.author });
    setFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      setResources(resources.map(r => r.id === editId ? { ...r, ...form } as any : r));
      toast({ title: "Resource updated" });
    } else {
      setResources([...resources, { ...form, id: Date.now().toString(), published: true, publication_date: new Date().toISOString().split("T")[0], download_count: 0 } as any]);
      toast({ title: "Resource created" });
    }
    setFormOpen(false);
  };

  const handleDelete = (id: string) => {
    setResources(resources.filter(r => r.id !== id));
    toast({ title: "Resource deleted" });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Resources Manager</h1>
        <Button variant="teal" onClick={openNew}><Plus className="h-4 w-4 mr-1" /> Add Resource</Button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Access</TableHead>
              <TableHead>Format</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map(r => (
              <TableRow key={r.id}>
                <TableCell className="font-medium">{r.title}</TableCell>
                <TableCell><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[r.category] || "bg-muted text-muted-foreground"}`}>{r.category}</span></TableCell>
                <TableCell className="text-sm">{accessLevelLabels[r.access_level]}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{r.format}</TableCell>
                <TableCell>{r.featured && <Star className="h-4 w-4 text-teal fill-teal" />}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(r)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(r.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editId ? "Edit Resource" : "Add Resource"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Title *</label>
              <Input required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Description</label>
              <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Category</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  {["Data Protection", "Cybersecurity", "AI Governance", "Regulatory Updates", "Training", "General"].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Format</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.format} onChange={e => setForm({ ...form, format: e.target.value })}>
                  {["PDF", "Word Template", "Excel Checklist", "Guide", "Report", "Other"].map(f => <option key={f}>{f}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Jurisdiction</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.jurisdiction} onChange={e => setForm({ ...form, jurisdiction: e.target.value })}>
                  {["Nigeria", "EU/UK", "International", "Multi-jurisdiction"].map(j => <option key={j}>{j}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Access Level</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.access_level} onChange={e => setForm({ ...form, access_level: e.target.value })}>
                  {["free", "register", "clients_only"].map(a => <option key={a} value={a}>{accessLevelLabels[a]}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Author</label>
              <Input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="featured" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} className="rounded" />
              <label htmlFor="featured" className="text-sm font-medium">Featured</label>
            </div>
            <Button variant="teal" className="w-full" type="submit">Save Resource</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResourcesManager;
