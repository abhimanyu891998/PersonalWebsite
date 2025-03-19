import { getArticleBySlug, getArticles } from "../../../lib/content";
import { formatDate } from "../../../lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  return {
    title: `${article.title} | Abhi Tanwar`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  return (
    <article className="space-y-8">
      <Link href="/articles" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to articles
      </Link>

      <div className="space-y-4">
        <h1 className="text-2xl font-normal tracking-tight mb-4">
          {article.title}
        </h1>
        <div className="flex gap-1 items-center text-muted-foreground">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="mx-1">·</span>
          <div className="flex items-center">
            {article.tags.map((tag, index) => (
              <>
                {index > 0 && <span className="mx-1 text-muted-foreground/50">·</span>}
                <span key={tag} className="text-micro text-muted-foreground/70">
                  {tag}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
} 