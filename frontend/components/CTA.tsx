import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-y border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Get in touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Have an engineering problem worth solving?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            I'm interested in building practical systems
            that combine engineering, electronics, and
            software.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-lg bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-80"
          >
            Let's connect →
          </Link>
        </div>
      </div>
    </section>
  );
}