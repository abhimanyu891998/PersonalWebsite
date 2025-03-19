import { getWorkExperience } from "../../lib/content";
import { ExternalLink } from "lucide-react";

export function WorkExperienceSection() {
  const experience = getWorkExperience();

  return (
    <section>
      <h2 className="text-lg font-normal tracking-tight text-foreground/90 mb-8">Work experience</h2>

      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-2 sm:gap-8">
            <div className="text-muted-foreground text-sm mb-1 sm:mb-0">
              {job.period}
            </div>
            <div>
              <div className="flex items-center mb-1">
                <h3 className="font-medium">{job.title} at {job.company}</h3>
                {job.url && (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="text-muted-foreground text-sm mb-2">{job.location}</div>
              <p className="text-sm sm:text-base">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 