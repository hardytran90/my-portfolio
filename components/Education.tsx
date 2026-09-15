import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
    return (
        <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm font-mono uppercase tracking-widest text-muted">
        Education
      </h2>

      <ol className="mt-10 space-y-10">
        {education.map((item, i) => (
          <li key={item.title} className="relative flex gap-6">
            {/* icon node + connecting line */}
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-future/10 text-future">
                <GraduationCap size={18} />
              </span>
              {i < education.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-line" />
              )}
            </div>

            {/* content */}
            <div className="pb-2">
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <h3 className="mt-1 text-base font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
    );
}