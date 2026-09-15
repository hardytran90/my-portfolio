import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiDotnet,
  SiHtml5,
  SiLinux,
  SiApple,
} from "react-icons/si";
import { FileText, Film, Image } from "lucide-react";
import { skillGroups } from "@/lib/data";

// Fallback to a generic icon for tools without a brand logo in react-icons.
const iconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  Python: SiPython,
  SQL: SiMysql,
  ".NET": SiDotnet,
  HTML: SiHtml5,
  Linux: SiLinux,
  macOS: SiApple,
  "MS Office": FileText,
  "Final Cut Pro": Film,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm font-mono uppercase tracking-widest text-muted">
        Skills
      </h2>

      <div className="mt-8 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-sm text-muted">{group.label}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {group.items.map((name) => {
                const Icon = iconMap[name] ?? FileText;
                return (
                  <span
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink/90"
                  >
                    <Icon size={16} />
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}