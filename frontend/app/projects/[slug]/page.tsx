import Link from "next/link";
import { getProject } from "@/lib/api";

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
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← Back to projects
      </Link>

      <div className="mt-8">
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          {project.project_type}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          {project.short_description}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">
          About the project
        </h2>

        <p className="mt-5 whitespace-pre-line leading-8 text-[var(--muted)]">
          {project.description}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold">
          Technologies
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology.id}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
            >
              {technology.name}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
