import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Portfolio
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="mt-4 text-[var(--muted)]">
          A collection of engineering, software,
          embedded systems, and research projects.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
              {project.project_type}
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {project.short_description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
