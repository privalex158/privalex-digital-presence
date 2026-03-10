import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { seedArticles, categoryColors } from "@/data/seedData";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const InsightsManager = () => {
  const { toast } = useToast();
  const [articles, setArticles] = useState(seedArticles);
  const [formOpen, setFormOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "", slug: "", category: "Nigeria & NDPA", author: "PrivaLex Advisory",
    excerpt: "", body: "", published: false, featured: false, read_time: 5,
  });

  const openNew = () => {
    setEditId(null);
    setForm({ title: "", slug: "", category: "Nigeria & NDPA", author: "PrivaLex Advisory", excerpt: "", body: "", published: false, featured: false, read_time: 5 });
    setFormOpen(true);
  };

  const openEdit = (a: typeof articles[0]) => {
    setEditId(a.id);
    setForm({ title: a.title, slug: a.slug, category: a.category, author: a.author, excerpt: a.excerpt || "", body: a.body, published: a.published, featured: a.featured, read_time: a.read_time });
    setFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = form.slug || generateSlug(form.title);
    if (editId) {
      setArticles(articles.map(a => a.id === editId ? { ...a, ...form, slug } as any : a));
      toast({ title: "Article updated" });
    } else {
      setArticles([...articles, { ...form, slug, id: Date.now().toString(), publication_date: new Date().toISOString().split("T")[0] } as any]);
      toast({ title: "Article created" });
    }
    setFormOpen(false);
  };

  const handleDelete = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
    toast({ title: "Article deleted" });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Insights Manager</h1>
        <Button variant="teal" onClick={openNew}><Plus className="h-4 w-4 mr-1" /> New Article</Button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map(a => (
              <TableRow key={a.id}>
                <TableCell className="font-medium max-w-xs truncate">{a.title}</TableCell>
                <TableCell><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[a.category] || "bg-muted text-muted-foreground"}`}>{a.category}</span></TableCell>
                <TableCell><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${a.published ? "bg-emerald-100 text-emerald-800" : "bg-muted text-muted-foreground"}`}>{a.published ? "Published" : "Draft"}</span></TableCell>
                <TableCell className="text-sm text-muted-foreground">{a.publication_date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(a)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(a.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
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
            <DialogTitle>{editId ? "Edit Article" : "New Article"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Title *</label>
              <Input required value={form.title} onChange={e => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })} />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Slug</label>
              <Input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Category</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  {["Nigeria & NDPA", "Cybersecurity", "AI Governance", "Data Protection", "Regulatory Updates"].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Author</label>
                <Input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Excerpt</label>
              <Textarea rows={2} maxLength={150} value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Body (HTML)</label>
              <Textarea rows={10} value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Read Time (min)</label>
                <Input type="number" value={form.read_time} onChange={e => setForm({ ...form, read_time: parseInt(e.target.value) || 5 })} />
              </div>
            </div>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" checked={form.published} onChange={e => setForm({ ...form, published: e.target.checked })} className="rounded" /> Published
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} className="rounded" /> Featured
              </label>
            </div>
            <Button variant="teal" className="w-full" type="submit">Save Article</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InsightsManager;
