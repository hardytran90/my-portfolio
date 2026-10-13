import Image from "next/image";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-24">
       <div className="mx-auto max-w-3xl">
          <h2 className="font-label text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Experiences
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                {item.logos && item.logos.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {item.logos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-lg border border-line bg-white p-1.5"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-past/10 text-past">
                  <Briefcase size={20} />
                </div>
              )}

              <p className="mt-4 font-label text-xs text-muted">{item.period}</p>
              <h3 className="mt-1 text-base font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}