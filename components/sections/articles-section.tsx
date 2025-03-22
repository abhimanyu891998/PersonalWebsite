import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticles } from "../../lib/content";
import { formatDate } from "../../lib/utils";

export function ArticlesSection() {
  const articles = getArticles().slice(0, 3); // Show only first 3 on homepage

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <Link href="/articles" className="hover:text-primary transition-colors">
          <h2 className="text-lg font-normal tracking-tight text-foreground/90">Writings</h2>
        </Link>
        <Link
          href="/articles"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="View all articles"
        >
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="space-y-3">
        {articles.map((article) => (
          <div key={article.slug} className="group py-2 border-b border-border/30 last:border-0">
            <Link href={`/articles/${article.slug}`}>
              <h3 className="text-base font-normal group-hover:text-primary transition-colors truncate">
                {article.title}
              </h3>
              <p className="text-micro text-muted-foreground mt-1">
                {formatDate(article.date)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 