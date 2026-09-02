import type { Project } from "@/types/api";

interface ProjectMetaProps {
  project: Project;
}

export default function ProjectMeta({
  project,
}: ProjectMetaProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
      <div className="bg-[var(--background)] p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          Type
        </p>
        <p className="mt-2 font-medium">
          {project.project_type}
        </p>
      </div>

      <div className="bg-[var(--background)] p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          Status
        </p>
        <p className="mt-2 font-medium">
          {project.status}
        </p>
      </div>

      <div className="bg-[var(--background)] p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          Start Date
        </p>
        <p className="mt-2 font-medium">
          {project.start_date || "—"}
        </p>
      </div>

      <div className="bg-[var(--background)] p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          End Date
        </p>
        <p className="mt-2 font-medium">
          {project.end_date || "Present"}
        </p>
      </div>
    </div>
  );
}
