import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { seedTestimonials } from "@/data/seedData";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TestimonialsManager = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState(seedTestimonials);
  const [formOpen, setFormOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({
    quote: "", client_name: "", client_title: "", organisation: "", rating: 5, active: true, display_order: 0,
  });

  const openNew = () => {
    setEditId(null);
    setForm({ quote: "", client_name: "", client_title: "", organisation: "", rating: 5, active: true, display_order: testimonials.length + 1 });
    setFormOpen(true);
  };

  const openEdit = (t: typeof testimonials[0]) => {
    setEditId(t.id);
    setForm({ quote: t.quote, client_name: t.client_name, client_title: t.client_title, organisation: t.organisation, rating: t.rating, active: t.active, display_order: t.display_order });
    setFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      setTestimonials(testimonials.map(t => t.id === editId ? { ...t, ...form } as any : t));
      toast({ title: "Testimonial updated" });
    } else {
      setTestimonials([...testimonials, { ...form, id: Date.now().toString() } as any]);
      toast({ title: "Testimonial created" });
    }
    setFormOpen(false);
  };

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast({ title: "Testimonial deleted" });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Testimonials Manager</h1>
        <Button variant="teal" onClick={openNew}><Plus className="h-4 w-4 mr-1" /> Add Testimonial</Button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quote</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Organisation</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map(t => (
              <TableRow key={t.id}>
                <TableCell className="max-w-xs truncate text-sm">{t.quote.substring(0, 60)}...</TableCell>
                <TableCell className="font-medium text-sm">{t.client_name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{t.organisation}</TableCell>
                <TableCell>
                  <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-3 w-3 fill-teal text-teal" />)}</div>
                </TableCell>
                <TableCell><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${t.active ? "bg-emerald-100 text-emerald-800" : "bg-muted text-muted-foreground"}`}>{t.active ? "Active" : "Inactive"}</span></TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(t)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(t.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editId ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Quote *</label>
              <Textarea required rows={4} value={form.quote} onChange={e => setForm({ ...form, quote: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Client Name *</label>
                <Input required value={form.client_name} onChange={e => setForm({ ...form, client_name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Title</label>
                <Input value={form.client_title} onChange={e => setForm({ ...form, client_title: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Organisation</label>
                <Input value={form.organisation} onChange={e => setForm({ ...form, organisation: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Rating (1-5)</label>
                <Input type="number" min={1} max={5} value={form.rating} onChange={e => setForm({ ...form, rating: parseInt(e.target.value) || 5 })} />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" checked={form.active} onChange={e => setForm({ ...form, active: e.target.checked })} className="rounded" /> Active
            </label>
            <Button variant="teal" className="w-full" type="submit">Save Testimonial</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestimonialsManager;
