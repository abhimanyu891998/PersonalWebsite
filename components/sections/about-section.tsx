import { getAbout } from "../../lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

export function AboutSection() {
  const about = getAbout();

  return (
    <section>
      <h2 className="text-lg font-normal tracking-tight text-foreground/90 mb-6">About</h2>

      <div className="prose prose-light dark:prose-dark text-foreground/90 text-sm font-light leading-relaxed">
        <MDXRemote source={about} />
      </div>
    </section>
  );
} 