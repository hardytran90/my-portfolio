import { skillGroups, type SkillItem } from "./data";

export const ICON_COLOR = "8b92a8";

// Flatten every item from all skill groups into a single lookup map: name -> { slug?, logo? }
const flatIconMap: Record<string, SkillItem> = skillGroups
  .flatMap((group) => group.items)
  .reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {} as Record<string, SkillItem>);

// Shared helper used anywhere an icon needs to be resolved by name (Skills, project detail, etc.)
export function getIconSrc(name: string): string | null {
  const item = flatIconMap[name];
  if (!item) return null;
  if (item.logo) return item.logo; // prefer the pre-recolored local file
  if (item.slug) return `https://cdn.simpleicons.org/${item.slug}/${ICON_COLOR}`;
  return null;
}