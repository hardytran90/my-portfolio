"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#about", label: "About Me" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "My Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Nav() {
const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#top" className="shrink-0 whitespace-nowrap text-sm font-medium tracking-tight text-ink">
          Hardy Tran
        </a>

        {/* Links: Only shown when there is enough room (>= 1024px) */}
        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex xl:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="whitespace-nowrap transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href="/resume/HardyTran_CV.pdf" 
          download 
          className="bg-[linear-gradient(100deg,var(--color-past)_0%,var(--color-future)_100%)] whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-bg transition-transform hover:-translate-y-0.5 sm:px-4 sm:text-sm">
            Download my resume
          </a>

          <a href="mailto:vinhhung90@gmail.com"
          className="whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-xs text-ink transition-colors hover:border-future/60 hover:text-future sm:px-4 sm:text-sm">
          Email me
        </a>
        {/* Menu toggle: only below 1024px */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="ml-1 rounded-full p-1.5 text-muted transition-colors hover:text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Dropdown menu below 1024px */}
        {open && (
          <ul
          id="mobile-menu"
          className="border-t border-line/60 px-4 py-3 text-sm text-muted sm:px-6 lg:hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-ink"
                >
                  {link.label}
                  </a>
              </li>
            ))}
          </ul>
        )}
    </header>
  );
}