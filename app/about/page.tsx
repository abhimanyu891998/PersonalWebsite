import { getAbout } from "../../lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata = {
    title: "About | Your Name",
    description: "About me and my work",
};

export default function AboutPage() {
    const about = getAbout();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-xl font-normal tracking-tight">About</h1>
                <p className="text-sm text-muted-foreground">A bit about me and my background</p>
            </div>

            <div className="prose prose-light dark:prose-dark text-foreground/90 text-sm font-light leading-relaxed">
                <MDXRemote source={about} />
            </div>
        </div>
    );
} 