import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { seedArticles, categoryColors } from "@/data/seedData";
import { Clock, User, ArrowRight, Shield } from "lucide-react";

const Insights = () => (
  <div>
    <section className="pt-24 pb-16 bg-navy">
      <div className="container mx-auto px-4 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Insights</h1>
        <p className="text-xl text-white/70 max-w-3xl">
          Original research, regulatory analysis, and practical guidance from the PrivaLex Advisory team.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seedArticles.filter(a => a.published).map(article => (
            <Link key={article.id} to={`/insights/${article.slug}`} className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-48 bg-navy/5 flex items-center justify-center">
                <Shield className="h-16 w-16 text-navy/20" />
              </div>
              <div className="p-6">
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[article.category] || "bg-muted text-muted-foreground"}`}>
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-teal transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{article.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.read_time} min</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Insights;
