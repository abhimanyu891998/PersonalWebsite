"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

type Bookmark = {
  title: string;
  url: string;
  tags: string[];
};

export function BookmarkSearch({ bookmarks }: { bookmarks: Bookmark[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBookmarks = bookmarks.filter(bookmark =>
    bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bookmark.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    new URL(bookmark.url).hostname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-10"
          placeholder="Search bookmarks by title, tag, or source..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filteredBookmarks.map((bookmark, index) => (
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

        {filteredBookmarks.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            No bookmarks found matching your search.
          </p>
        )}
      </div>
    </div>
  );
} 