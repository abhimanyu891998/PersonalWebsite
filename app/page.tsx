import { ArticlesSection } from "../components/sections/articles-section";
import { BookmarksSection } from "../components/sections/bookmarks-section";
import { AboutSection } from "../components/sections/about-section";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <AboutSection />
      <ArticlesSection />
      <BookmarksSection />
    </div>
  );
} 