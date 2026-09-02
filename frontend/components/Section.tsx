interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}