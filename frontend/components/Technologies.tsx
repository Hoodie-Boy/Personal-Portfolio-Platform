import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

import { getTechnologies } from "@/lib/api";

export default async function Technologies() {
  const technologies = await getTechnologies();

  return (
    <Section className="border-t border-[var(--border)]">
      <SectionHeading
        eyebrow="Tools"
        title="Technologies I work with"
        description="A selection of tools, languages, platforms, and technologies used across my projects."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm transition hover:bg-[var(--surface)]"
          >
            {technology.name}
          </div>
        ))}
      </div>
    </Section>
  );
}