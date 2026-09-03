import { getSocialLinks } from "@/lib/api";

export default async function Footer() {
  const socialLinks = await getSocialLinks();

  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        {socialLinks.length > 0 && (
          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  );
}