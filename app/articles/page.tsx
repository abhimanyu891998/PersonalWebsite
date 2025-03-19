import Link from "next/link";
import { getArticles } from "../../lib/content";
import { formatDate } from "../../lib/utils";

export const metadata = {
  title: "Writings | Abhi Tanwar",
  description: "Thoughts and insights",
};

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-normal tracking-tight">Writings</h1>
        <p className="text-sm text-muted-foreground">Thoughts and insights</p>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.slug} className="group py-3 border-b border-border/30 last:border-0">
            <Link href={`/articles/${article.slug}`}>
              <h2 className="text-lg font-medium group-hover:text-primary transition-colors truncate">
                {article.title}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                {formatDate(article.date)}
                {article.tags && article.tags.length > 0 && (
                  <span className="text-muted-foreground/60 text-[10px] ml-2">
                    {article.tags.join(" · ")}
                  </span>
                )}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 