import { Socials } from "./socials";

export default function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-border/40">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abhi Tanwar
        </p>
        <Socials />
      </div>
    </footer>
  );
} 