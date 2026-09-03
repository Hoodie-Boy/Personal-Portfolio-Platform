import Link from "next/link";

import { getProfile } from "@/lib/api";

export default async function AboutPage() {
  const profile = await getProfile();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Page header */}
      <section>
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          About
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          About me
        </h1>
      </section>

      {/* Profile */}
      <section className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
        {/* Profile image */}
        {profile.profile_image && (
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <img
              src={profile.profile_image}
              alt={profile.name}
              className="aspect-square w-full object-cover"
            />
          </div>
        )}

        {/* Profile content */}
        <div>
          <h2 className="text-3xl font-semibold">
            {profile.name}
          </h2>

          <p className="mt-2 text-lg text-[var(--muted)]">
            {profile.headline}
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest">
                About
              </h3>

              <p className="mt-3 whitespace-pre-line leading-8 text-[var(--muted)]">
                {profile.bio}
              </p>
            </div>

            {profile.location && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest">
                  Location
                </h3>

                <p className="mt-2 text-[var(--muted)]">
                  {profile.location}
                </p>
              </div>
            )}

            {profile.email && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest">
                  Email
                </h3>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 inline-block text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {profile.email}
                </a>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
              >
                View Resume
                <span className="ml-2">↗</span>
              </a>
            )}

            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
            >
              View Projects
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}