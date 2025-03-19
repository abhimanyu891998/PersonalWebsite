import Link from "next/link";
import { Socials } from "./socials";
import { MobileNav } from "./mobile-nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center pb-6 border-b border-border/40">
      <div>
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-medium tracking-tight">Abhi Tanwar</h1>
          <p className="text-sm text-muted-foreground mt-1">Channeling my curiosity into writing and building.</p>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-3">
          <Socials />
        </div>
        <MobileNav />
      </div>
    </header>
  );
} 