import { skillGroups } from "@/lib/data";
import Image from "next/image";

const ICON_COLOR = "8b92a8";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-label text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        Tech Stack & Tools
      </h2>

      <div className="mt-10 space-y-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
              {group.label}
            </h3>

            <div className="mt-4 flex flex-wrap gap-6">
              {group.items.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2">
                  {item.slug ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://cdn.simpleicons.org/${item.slug}/${ICON_COLOR}`}
                      alt={item.name}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <Image
                      src={item.logo!}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  )}
                  <span className="text-xs text-muted">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}