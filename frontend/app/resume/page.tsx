import Link from "next/link";

import { getProfile } from "@/lib/api";

export default async function ResumePage() {
  const profile = await getProfile();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Header */}
      <section>
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          Resume
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          My Resume
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">
          A summary of my education, experience, projects, technical skills,
          and professional background.
        </p>
      </section>

      {/* Resume actions */}
      <section className="mt-10">
        {profile.resume ? (
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
            >
              View Resume
              <span className="ml-2">↗</span>
            </a>

            <a
              href={profile.resume}
              download
              className="inline-flex items-center rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
            >
              Download PDF
              <span className="ml-2">↓</span>
            </a>
          </div>
        ) : (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-sm text-[var(--muted)]">
              Resume is currently unavailable.
            </p>
          </div>
        )}
      </section>

      {/* Profile summary */}
      <section className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold">
          {profile.name}
        </h2>

        <p className="mt-2 text-lg text-[var(--muted)]">
          {profile.headline}
        </p>

        {profile.location && (
          <p className="mt-4 text-sm text-[var(--muted)]">
            📍 {profile.location}
          </p>
        )}

        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 block text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            ✉ {profile.email}
          </a>
        )}
      </section>

      {/* Navigation */}
      <section className="mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-70"
        >
          Explore my projects
          <span className="ml-2">→</span>
        </Link>
      </section>
    </main>
  );
}