import { projects } from "@/lib/data";
import Link from "next/link";

const statusStyle: Record<string, string> = {
    Distinction: "border-future/50 text-future",
    "High Distinction": "border-past/50 text-past",
    "Coming soon": "border-line text-muted",
};

export default function Projects() {
    return (
        <section id="projects" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-label text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          My Projects
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const isComingSoon = project.status === "Coming soon";

            const card = (
              <div className="flex h-full flex-col rounded-2xl border border-line p-6 transition-colors hover:border-future/50">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted">{project.period}</span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${statusStyle[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                {project.tools && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {!isComingSoon && (
                  <span className="mt-5 text-sm text-future">
                    View details →
                  </span>
                )}
              </div>
            );
            if (isComingSoon) {
              return <div key={project.slug}>{card}</div>;
            }

            return (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}