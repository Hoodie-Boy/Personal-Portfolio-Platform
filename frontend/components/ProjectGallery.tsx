import type { Project } from "@/types/api";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  if (project.images.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Project Gallery
      </h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {project.images.map((image) => (
          <figure
            key={image.id}
            className="
              overflow-hidden
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
            "
          >
            <img
              src={image.image}
              alt={image.alt_text || project.title}
              className="aspect-video w-full object-cover"
            />

            {image.caption && (
              <figcaption className="p-4 text-sm text-[var(--muted)]">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
