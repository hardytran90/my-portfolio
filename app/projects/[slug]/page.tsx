import Image from "next/image";
import { Database } from "lucide-react";
import { getIconSrc } from "@/lib/icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, toolSlugs } from "@/lib/data";
import { FaGithub } from "react-icons/fa";


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

        {project.github && (
            <a href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-future/60 hover:text-future">
            <FaGithub size={16} />
            View on GitHub
          </a>
        )}

            {project.cover && (
          <div className="mt-6 h-[189px] w-full overflow-hidden rounded-xl border border-line">
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              width={800}
              height={189}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        )}

        <p className="mt-6 leading-relaxed text-muted">{project.summary}</p>
        {project.tools && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.tools.map((name) => {
            const src = getIconSrc(name);
            return (
                <div key={name} className="flex flex-col items-center gap-2">
                {src ? (
                    <Image
                    src={src}
                    alt={name}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                    unoptimized={src.startsWith("http")} // external CDN image, skip optimization unless domain is whitelisted
                    />
                ) : (
                    <Database className="h-9 w-9 text-muted" aria-label={name} />
                )}
                <span className="text-[11px] text-muted">{name}</span>
                </div>
              );
            })}
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

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-12 rounded-2xl border border-line p-6">
            <h2 className="text-lg text-ink">Gallery</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="aspect-video overflow-hidden rounded-lg border border-line"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}