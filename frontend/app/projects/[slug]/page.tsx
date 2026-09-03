import Link from "next/link";

import { getProject } from "@/lib/api";
import ProjectMeta from "@/components/ProjectMeta";
import ProjectTechnologies from "@/components/ProjectTechnologies";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {/* Back link */}
      <Link
        href="/projects"
        className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
      >
        ← Back to projects
      </Link>

      {/* Hero */}
      <section className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {/* Type + Status */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="uppercase tracking-widest text-[var(--muted)]">
              {project.project_type}
            </span>

            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium">
              {project.status.replace("_", " ")}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          {/* Short description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {project.short_description}
          </p>

          {/* Project links */}
          {(project.github_url || project.demo_url) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
                >
                  View on GitHub ↗
                </a>
              )}

              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="aspect-video w-full object-cover"
            />
          </div>
        )}
      </section>

      {/* Project information */}
      <section className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="mb-6 text-2xl font-semibold">
          Project Information
        </h2>

        <ProjectMeta project={project} />
      </section>

      {/* About */}
      <section className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold">
          About the project
        </h2>

        <p className="mt-5 max-w-4xl whitespace-pre-line leading-8 text-[var(--muted)]">
          {project.description}
        </p>
      </section>

      {/* Technologies */}
      <section className="mt-16 border-t border-[var(--border)] pt-12">
        <ProjectTechnologies project={project} />
      </section>
    </main>
  );
}