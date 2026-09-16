import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const statusStyle: Record<string, string> = {
  Distinction: "text-past",
  "High Distinction": "text-future",
  "Coming soon": "text-muted",
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound(); // if wrong URL → automatically load 404 page of Next.js
  }

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <Link href="/#projects" className="text-sm text-muted hover:text-ink">
          ← Back to Projects
        </Link>

        <h1 className="mt-6 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h1>

        <div className="mt-2 flex items-center gap-3 text-sm text-muted">
          <span>{project.period}</span>
          <span className={statusStyle[project.status]}>{project.status}</span>
        </div>

        <p className="mt-6 leading-relaxed text-muted">{project.summary}</p>

        {project.tools && (
          <div className="mt-6 flex flex-wrap gap-2">
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

        {project.objective && (
          <section className="mt-10">
            <h2 className="text-lg text-ink">Objective</h2>
            <p className="mt-2 leading-relaxed text-muted">{project.objective}</p>
          </section>
        )}

        {project.duties && (
          <section className="mt-8">
            <h2 className="text-lg text-ink">My Role</h2>
            <p className="mt-2 leading-relaxed text-muted">{project.duties}</p>
          </section>
        )}

        {project.outcome && (
          <section className="mt-8">
            <h2 className="text-lg text-ink">Outcome</h2>
            <p className="mt-2 leading-relaxed text-muted">{project.outcome}</p>
          </section>
        )}
      </div>
    </main>
  );
}