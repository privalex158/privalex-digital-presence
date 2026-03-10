import { useParams, Link } from "react-router-dom";
import { seedArticles, categoryColors } from "@/data/seedData";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

const InsightArticle = () => {
  const { slug } = useParams();
  const article = seedArticles.find(a => a.slug === slug);

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
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[article.category] || "bg-white/10 text-white"}`}>
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1"><User className="h-4 w-4" />{article.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{article.publication_date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.read_time} min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg prose-slate" dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </section>
    </div>
  );
};

export default InsightArticle;
