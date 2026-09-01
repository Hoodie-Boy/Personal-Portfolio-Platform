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
    <main>
      <h1>{project.title}</h1>

      <p>{project.short_description}</p>

      <p>{project.description}</p>

      <p>
        Status: {project.status}
      </p>
    </main>
  );
}