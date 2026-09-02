import Link from "next/link";

// import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

import { getFeaturedProjects } from "@/lib/api";

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A selection of engineering and software projects that represent the way I approach technical problems."
        />

        <Link
          href="/projects"
          className="shrink-0 text-sm font-medium underline underline-offset-4"
        >
          View all projects →
        </Link>
      </div>

      {/* <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div> */}
    </Section>
  );
}