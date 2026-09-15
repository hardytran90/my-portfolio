const links = [
    { href: "#about", label: "About Me" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "My Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-medium tracking-tight text-ink">
          Hardy Tran
        </a>
        <ul className="hidden gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
          <a href="mailto:vinhhung90@gmail.com"
          className="rounded-full border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-future/60 hover:text-future">
          Email me
        </a>
      </nav>
    </header>
  );
}