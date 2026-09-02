import type { Project } from "@/types/api";

interface ProjectTechnologiesProps {
  project: Project;
}

export default function ProjectTechnologies({
  project,
}: ProjectTechnologiesProps) {
  if (project.technologies.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Technologies
      </h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology.id}
            className="
              rounded-full
              border
              border-[var(--border)]
              px-3
              py-1.5
              text-sm
            "
          >
            {technology.name}
          </span>
        ))}
      </div>
    </section>
  );
}
