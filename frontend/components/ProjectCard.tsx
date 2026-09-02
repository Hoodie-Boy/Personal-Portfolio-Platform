import Link from "next/link";
import type { Project } from "@/types/api";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        transition
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Project image */}
      {project.thumbnail && (
        <Link href={`/projects/${project.slug}`}>
          <div className="aspect-video overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>
        </Link>
      )}

      <div className="p-6">

        {/* Metadata */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-wider
              text-[var(--muted)]
            "
          >
            {project.project_type}
          </span>

          {project.status && (
            <span
              className="
                rounded-full
                border
                border-[var(--border)]
                px-2.5
                py-1
                text-xs
                text-[var(--muted)]
              "
            >
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-6
            text-[var(--muted)]
          "
        >
          {project.short_description}
        </p>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span
                key={technology.id}
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  px-2.5
                  py-1
                  text-xs
                  text-[var(--muted)]
                "
              >
                {technology.name}
              </span>
            ))}

            {project.technologies.length > 4 && (
              <span
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  px-2.5
                  py-1
                  text-xs
                  text-[var(--muted)]
                "
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="
              text-sm
              font-medium
              underline
              underline-offset-4
            "
          >
            View project →
          </Link>

          {project.featured && (
            <span className="text-xs font-medium">
              Featured
            </span>
          )}
        </div>
      </div>
    </article>
  );
}