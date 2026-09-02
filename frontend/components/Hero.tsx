import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Electrical Engineer · Developer · Builder
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            I build systems where
            hardware meets software.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            From embedded systems and automation to
            web applications and IoT platforms, I enjoy
            turning engineering problems into practical,
            working systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-80"
            >
              Explore My Projects
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium transition hover:bg-[var(--surface)]"
            >
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}