import { getProjects } from "../../lib/content";
import { Globe, Github } from "lucide-react";

export const metadata = {
  title: "Projects | Abhi Tanwar",
  description: "My open source projects and other work",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-normal tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">My open source projects and other work</p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group border border-border rounded-lg p-6 hover:bg-muted/20 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h2>
                  <p className="text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                  {project.year}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 