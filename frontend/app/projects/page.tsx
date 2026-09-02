import ProjectExplorer from "@/components/ProjectExplorer";
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
          A collection of engineering, software, embedded systems,
          and research projects.
        </p>
      </div>

      <ProjectExplorer projects={projects} />
    </main>
  );
}