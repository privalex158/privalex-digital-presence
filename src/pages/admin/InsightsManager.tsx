import { useState, useEffect } from "react";
import { PlusCircle, Trash2, Pencil, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import RichTextEditor from "@/components/RichTextEditor";
import {
  getInsights, createInsight, updateInsight, deleteInsight,
  generateSlug, type Insight,
} from "@/lib/insights";

const empty = (): Omit<Insight, "id" | "created_at"> => ({
  title: "",
  slug: "",
  author: "PrivaLex Advisory",
  tag: "",
  body: "",
  published_at: new Date().toISOString().slice(0, 10),
});

const InsightsManager = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(empty());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const load = async () => {
    try {
      setInsights(await getInsights());
    } catch {
      toast({ title: "Failed to load insights", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
      ...(name === "title" && !editingId ? { slug: generateSlug(value) } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim() || !form.body.trim()) {
      toast({ title: "Title, author and details are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        await updateInsight(editingId, form);
        toast({ title: "Insight updated" });
      } else {
        await createInsight(form);
        toast({ title: "Insight published" });
      }
      setForm(empty());
      setEditingId(null);
      setShowForm(false);
      await load();
    } catch (err: any) {
      toast({ title: "Failed to save", description: err.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (insight: Insight) => {
    setForm({
      title: insight.title,
      slug: insight.slug,
      author: insight.author,
      tag: insight.tag,
      body: insight.body,
      published_at: insight.published_at,
    });
    setEditingId(insight.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteInsight(id);
      toast({ title: "Insight deleted" });
      if (editingId === id) { setForm(empty()); setEditingId(null); setShowForm(false); }
      await load();
    } catch (err: any) {
      toast({ title: "Failed to delete", description: err.message, variant: "destructive" });
    }
  };

  const handleCancel = () => {
    setForm(empty());
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-teal" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Insights Manager</h1>
            <p className="text-sm text-muted-foreground">Publish and manage insight articles shown on the Insights page.</p>
          </div>
        </div>
        {!showForm && (
          <Button variant="teal" onClick={() => setShowForm(true)} className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> New Insight
          </Button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-foreground mb-5">
            {editingId ? "Edit Insight" : "New Insight"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Title *</label>
              <Input name="title" value={form.title} onChange={handleChange} placeholder="e.g. What the NDPA Means for Data Controllers" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1">Author *</label>
                <Input name="author" value={form.author} onChange={handleChange} placeholder="e.g. PrivaLex Advisory" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1">Tag</label>
                <Input name="tag" value={form.tag} onChange={handleChange} placeholder="e.g. Nigeria & NDPA" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1">Publication Date</label>
                <Input name="published_at" type="date" value={form.published_at} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">
                Slug <span className="text-muted-foreground font-normal">(auto-generated, editable)</span>
              </label>
              <Input name="slug" value={form.slug} onChange={handleChange} placeholder="url-friendly-title" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Details *</label>
              <RichTextEditor
                value={form.body}
                onChange={(html) => setForm((f) => ({ ...f, body: html }))}
                placeholder="Write the full article content here..."
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" variant="teal" disabled={saving} className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                {saving ? "Saving..." : editingId ? "Update Insight" : "Publish Insight"}
              </Button>
              <Button type="button" variant="outline" onClick={handleCancel}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      {/* List */}
      <h2 className="font-semibold text-foreground mb-4">Published Insights ({insights.length})</h2>
      {loading ? (
        <p className="text-muted-foreground text-sm">Loading...</p>
      ) : insights.length === 0 ? (
        <p className="text-muted-foreground text-sm">No insights published yet.</p>
      ) : (
        <div className="space-y-3">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-card border border-border rounded-xl p-5 flex flex-wrap gap-4 items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  By {insight.author} · {insight.published_at} · <span className="text-teal">/insights/{insight.slug}</span>
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" onClick={() => handleEdit(insight)}>
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(insight.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InsightsManager;
