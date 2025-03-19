import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Socials({ vertical = false }: { vertical?: boolean }) {
  const socials = [
    { icon: Twitter, href: "https://twitter.com/abhi_s_tanwar", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abhimanyue-singh-tanwar-30a424130/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/abhimanyu891998", label: "GitHub" },
    { icon: Mail, href: "mailto:singhabhimanyu186@gmail.com", label: "Email" },
  ];

  return (
    <div className={`flex ${vertical ? "flex-col" : ""} gap-2`}>
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5" />
          <span className="sr-only">{social.label}</span>
        </Link>
      ))}
    </div>
  );
} 