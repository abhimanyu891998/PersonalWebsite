import Link from "next/link";
import { ArrowRight, Globe, Github, ExternalLink } from "lucide-react";
import { getProjects } from "../../lib/content";

export function ProjectsSection() {
  const projects = getProjects().slice(0, 3); // Show only first 3 on homepage

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-normal tracking-tight text-foreground/90">Projects</h2>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="View all projects"
        >
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="group hover-card rounded-lg p-3 hover:bg-muted/10 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-md shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-normal group-hover:text-primary transition-colors">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-micro text-muted-foreground">{project.description}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground mt-2 sm:mt-0 shrink-0">{project.year}</span>
            </div>

            {project.github && (
              <div className="mt-4 flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 