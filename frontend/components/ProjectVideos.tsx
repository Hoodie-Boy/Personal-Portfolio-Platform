import type { Project } from "@/types/api";

interface ProjectVideosProps {
  project: Project;
}

export default function ProjectVideos({
  project,
}: ProjectVideosProps) {
  if (project.videos.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Videos
      </h2>

      <div className="mt-6 space-y-8">
        {project.videos.map((video) => (
          <figure key={video.id}>
            {video.video_type === "youtube" &&
              video.external_url && (
                <div className="aspect-video overflow-hidden rounded-xl border border-[var(--border)]">
                  <iframe
                    src={video.external_url}
                    title={video.title}
                    className="h-full w-full"
                    allowFullScreen
                  />
                </div>
              )}

            {video.video_type === "vimeo" &&
              video.external_url && (
                <div className="aspect-video overflow-hidden rounded-xl border border-[var(--border)]">
                  <iframe
                    src={video.external_url}
                    title={video.title}
                    className="h-full w-full"
                    allowFullScreen
                  />
                </div>
              )}

            {video.video_type === "upload" &&
              video.video_file && (
                <video
                  controls
                  className="
                    aspect-video
                    w-full
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-black
                  "
                  poster={video.thumbnail || undefined}
                >
                  <source src={video.video_file} />
                  Your browser does not support the video element.
                </video>
              )}

            {video.caption && (
              <figcaption className="mt-3 text-sm text-[var(--muted)]">
                {video.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
