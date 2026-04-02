import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Calendar } from "lucide-react";
import { getInsightBySlug, type Insight } from "@/lib/insights";

const InsightArticle = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    getInsightBySlug(slug)
      .then(setArticle)
      .catch(() => setArticle(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
        <Link to="/insights" className="text-teal hover:underline">Back to Insights</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container mx-auto px-4 pt-12">
          <Link to="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>
          {article.tag && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-white/10 text-white">
              {article.tag}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1"><User className="h-4 w-4" />{article.author}</span>
            {article.published_at && (
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{article.published_at}</span>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article
            className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-a:text-teal prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>
      </section>
    </div>
  );
};

export default InsightArticle;
