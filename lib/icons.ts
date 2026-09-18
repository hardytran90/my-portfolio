import { skillGroups, type SkillItem } from "./data";

export const ICON_COLOR = "8b92a8";

export type IconEntry = {
    slug?: string;  // use CDN Simple Icons if provided
    logo?: string;  // use local file in public/logos if provided
};

// Full icon library — every tool that might need a logo ANYWHERE in the site
// (homepage Skills AND individual project pages). Being listed here does NOT
// make a tool show up on the homepage — that's controlled separately by skillGroups in data.ts.
const iconLibrary: Record<string, IconEntry> = {
  Python: { slug: "python" },
  JavaScript: { slug: "javascript" },
  "C#": { logo: "/logos/csharp.svg" },
  MySQL: { logo: "/logos/mysql.svg" },
  ".NET": { slug: "dotnet" },
  HTML: { slug: "html5" },
  React: { logo: "/logos/reactjs.svg" },
  NodeJS: { logo: "/logos/nodejs.svg" },
  FastAPI: { logo: "/logos/fastapi.svg" },
  "MS Azure": { logo: "/logos/microsoft-azure.svg" },
  Github: { logo: "/logos/github.svg" },
  Jira: { logo: "/logos/jira.svg" },
  Postman: { logo: "/logos/postman.svg" },
  Docker: { logo: "/logos/docker.svg" },
  "MS Office": { logo: "/logos/microsoft-office.svg" },
  "FinalCut Pro": { logo: "/logos/final-cut.svg" },
  "PHP": { logo: "/logos/php.svg"},
  "CSS": { logo: "/logos/css.svg"}
};

// Shared helper used anywhere an icon needs to be resolved by name (Skills, project detail, etc.)
export function getIconSrc(name: string): string | null {
  const item = iconLibrary[name];
  if (!item) return null;
  if (item.logo) return item.logo; // prefer the pre-recolored local file
  if (item.slug) return `https://cdn.simpleicons.org/${item.slug}/${ICON_COLOR}`;
  return null;
}