import { getBookmarks } from "../../lib/content";
import { BookmarkSearch } from "../../components/sections/bookmark-search";

export const metadata = {
  title: "Bookmarks | Abhi Tanwar",
  description: "A collection of articles, videos, and resources I find interesting",
};

export default function BookmarksPage() {
  const bookmarks = getBookmarks();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-normal tracking-tight">Bookmarks</h1>
        <p className="text-sm text-muted-foreground">
          A collection of articles, videos, and resources I find interesting
        </p>
      </div>

      <BookmarkSearch bookmarks={bookmarks} />
    </div>
  );
} 