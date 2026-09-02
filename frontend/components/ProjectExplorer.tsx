"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/api";

interface ProjectExplorerProps {
  projects: Project[];
}

export default function ProjectExplorer({
  projects,
}: ProjectExplorerProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const projectTypes = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(projects.map((project) => project.project_type))
      ),
    ];
  }, [projects]);

  const projectStatuses = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(projects.map((project) => project.status))
      ),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch =
        normalizedSearch === "" ||
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.short_description
          .toLowerCase()
          .includes(normalizedSearch) ||
        project.technologies.some((technology) =>
          technology.name.toLowerCase().includes(normalizedSearch)
        );

      const matchesType =
        type === "All" || project.project_type === type;

      const matchesStatus =
        status === "All" || project.status === status;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [projects, search, type, status]);

  return (
    <div className="mt-12">

      {/* Search */}
      <div>
        <label
          htmlFor="project-search"
          className="text-sm font-medium"
        >
          Search
        </label>

        <input
          id="project-search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects, technologies..."
          className="
            mt-2
            w-full
            rounded-lg
            border
            border-[var(--border)]
            bg-[var(--background)]
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-[var(--foreground)]
          "
        />
      </div>

      {/* Filters */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">

        {/* Type */}
        <div>
          <label
            htmlFor="project-type"
            className="text-sm font-medium"
          >
            Project Type
          </label>

          <select
            id="project-type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="
              mt-2
              w-full
              rounded-lg
              border
              border-[var(--border)]
              bg-[var(--background)]
              px-4
              py-3
              text-sm
              outline-none
            "
          >
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="project-status"
            className="text-sm font-medium"
          >
            Status
          </label>

          <select
            id="project-status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="
              mt-2
              w-full
              rounded-lg
              border
              border-[var(--border)]
              bg-[var(--background)]
              px-4
              py-3
              text-sm
              outline-none
            "
          >
            {projectStatuses.map((projectStatus) => (
              <option key={projectStatus} value={projectStatus}>
                {projectStatus}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Result count */}
      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-[var(--muted)]">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {(search || type !== "All" || status !== "All") && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setType("All");
              setStatus("All");
            }}
            className="text-sm font-medium underline underline-offset-4"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Projects */}
      {filteredProjects.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-[var(--border)] p-12 text-center">
          <h2 className="text-xl font-semibold">
            No projects found
          </h2>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}