import { education } from "@/lib/data";
import Image from "next/image";

export default function Education() {
    return (
        <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-label text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        Education
      </h2>

      <ol className="mt-10 space-y-10">
        {education.map((item) => (
          <li key={item.title} className="flex items-center gap-6">
            {/* icon node + connecting line */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white overflow-hidden">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={62}
                  height={62}
                  className="object-contain"
                />
              </div>

            {/* content */}
            <div className="pb-2">
              <h3 className="mt-1 text-base font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-md text-muted">{item.level}</p>
              <p className="font-label text-md text-muted">{item.period}</p>
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