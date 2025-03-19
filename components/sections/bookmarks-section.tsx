import Link from "next/link";
import { getBookmarks } from "../../lib/content";
import { ArrowRight } from "lucide-react";

export function BookmarksSection() {
  const bookmarks = getBookmarks().slice(0, 3); // Show only first 3 on homepage

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-normal tracking-tight text-foreground/90">Bookmarks</h2>
        <Link
          href="/bookmarks"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="View all bookmarks"
        >
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="space-y-3">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="py-2 border-b border-border/30 last:border-0">
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-base font-normal hover:text-primary transition-colors truncate">
                {bookmark.title}
              </h3>
              <p className="text-micro text-muted-foreground mt-1">
                <span className="text-muted-foreground/80">
                  {new URL(bookmark.url).hostname.replace('www.', '')}
                </span>
                {bookmark.tags && bookmark.tags.length > 0 && (
                  <span className="text-muted-foreground/60 ml-2">
                    · {bookmark.tags.join(" · ")}
                  </span>
                )}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} 