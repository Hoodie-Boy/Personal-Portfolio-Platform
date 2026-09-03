import Link from "next/link";

import { getProfile, getSocialLinks } from "@/lib/api";

export default async function ContactPage() {
  const [profile, socialLinks] = await Promise.all([
    getProfile(),
    getSocialLinks(),
  ]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Header */}
      <section>
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s work together
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Have a project, collaboration idea, or just want to get in touch?
          Feel free to reach out.
        </p>
      </section>

      {/* Contact options */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Email */}
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
              Email
            </p>

            <p className="mt-3 break-all text-lg font-medium">
              {profile.email}
            </p>

            <p className="mt-4 text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
              Send me an email →
            </p>
          </a>
        )}

        {/* Social links */}
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
              {link.platform}
            </p>

            <p className="mt-3 text-lg font-medium">
              Connect with me
            </p>

            <p className="mt-4 text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
              Visit profile →
            </p>
          </a>
        ))}
      </section>

      {/* Projects CTA */}
      <section className="mt-16 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold">
          Interested in my work?
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
          Take a look at my projects to see the systems, software, and
          engineering work I have been building.
        </p>

        <Link
          href="/projects"
          className="mt-6 inline-flex items-center rounded-lg bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
        >
          View Projects
          <span className="ml-2">→</span>
        </Link>
      </section>
    </main>
  );
}