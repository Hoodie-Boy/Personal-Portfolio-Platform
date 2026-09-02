import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    number: "01",
    title: "Electrical Engineering",
    description:
      "Control systems, electronics, instrumentation, automation, and electrical system design.",
  },
  {
    number: "02",
    title: "Embedded Systems",
    description:
      "Microcontrollers, sensors, actuators, communication interfaces, and real-time control.",
  },
  {
    number: "03",
    title: "Software Development",
    description:
      "Python, C/C++, Node.js, web applications, APIs, and engineering software.",
  },
  {
    number: "04",
    title: "IoT & Automation",
    description:
      "Connecting physical systems with software, networking, monitoring, and automation.",
  },
];

export default function FocusAreas() {
  return (
    <Section className="border-t border-[var(--border)]">
      <SectionHeading
        eyebrow="What I Do"
        title="Engineering across the stack."
        description="My projects often sit at the intersection of physical systems and software."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
        {areas.map((area) => (
          <div
            key={area.number}
            className="bg-[var(--background)] p-8"
          >
            <span className="text-sm text-[var(--muted)]">
              {area.number}
            </span>

            <h3 className="mt-6 text-xl font-semibold">
              {area.title}
            </h3>

            <p className="mt-3 leading-7 text-[var(--muted)]">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}