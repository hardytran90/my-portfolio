export const profile = {
  name: "Hardy Tran",
  location: "Adelaide, SA",
  phone: "0402 060 797",
  email: "vinhhung90@gmail.com",
  // TODO: paste your real LinkedIn URL here — the CV only listed a placeholder link.
  linkedin: "https://www.linkedin.com/in/hardy-tran/",
  tagline: "Ten years in business & creative. Now I build software.",
  bio: [
    "I started my career in banking and finance, spent next six years in creative & event area, and traveled around Vietnam. I moved to Adelaide to start new career in technology.",
    "That mix is unusual, but it works in my favour: I've managed budgets and stakeholders under real deadline pressure, and I now pair that with hands-on skills in Python, JavaScript, C#, SQL and cloud platforms like MS Azure.",
    "I'm currently completing Professional Year program in Adelaide while looking for a role in Software Engineer or Web Development, where I can keep building things that are used by real people under real constraints.",
  ],
};

export type EducationItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

// Ordered oldest to newest — this is a genuine chronological history, not decoration.
export const education: EducationItem[] = [
    {
    period: "Jan 2026 — Feb 2027",
    title: "Professional Year",
    org: "Performance Education, Adelaide",
    description:
      "Australian business culture, workplace skills and professional communication, ahead of moving into a software or DevOps role.",
  },
  {
    period: "Feb 2024 — Dec 2025",
    title: "Master of Computing and Innovation",
    org: "University of Adelaide, Australia",
    description:
      "Focused on the foundations of software and computing, including the two applied projects below.",
  },
  {
    period: "2011 — 2013",
    title: "Bachelor of Business Administration",
    org: "Ho Chi Minh City Open University, Vietnam",
    description: "Focus on business markets and the banking industry.",
  },
  {
    period: "2008 — 2011",
    title: "Diploma of Business Administration",
    org: "University of Finance – Marketing, Vietnam",
    description: "Foundation coursework in business and finance management.",
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

// Oldest to newest
export const experience: ExperienceItem[] = [
    {
    period: "Apr 2025 — Current",
    title: "Food Service Assistant",
    org: "Regis Aged Care, Burnside, Adelaide",
    description:
      "Preparing and serving meals for residents while studying — steady, practical work in a multicultural team that also sharpened my English communication.",
  },
  {
    period: "May 2017 — Mar 2023",
    title: "Event Planner",
    org: "Vinteam Services Travel Corp, Ho Chi Minh City",
    description:
      "Planned travel and conference events for corporate clients: itineraries, program content, budgets and third-party vendors. Sat between client expectations and vendor cost management on high-value accounts.",
  },
  {
    period: "2011 — 2016",
    title: "Financial Specialist",
    org: "Maritime Bank · ANZ Bank · Eximbank, Ho Chi Minh City",
    description:
      "Five years in banking and finance immediately after graduating — communication, problem-solving and working accurately under pressure.",
  },
]

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "JavaScript", "C#", "SQL", ".NET", "HTML"] },
  { label: "Cloud", items: ["Microsoft Azure"] },
  { label: "Systems", items: ["Linux", "macOS"] },
  { label: "Tools", items: ["MS Office", "Adobe Photoshop", "Final Cut Pro"] },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  status: "Distinction" | "High Distinction" | "Coming soon";
  summary: string;
  objective?: string;
  tools?: string[];
  duties?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "gradescope-plagiarism-analysis",
    title: "Analysis of Individual Gradescope Submissions",
    period: "Feb 2025 — Jul 2025",
    status: "Distinction",
    summary:
      "A tool that helps instructors check for plagiarism across student submissions and run a deeper analysis of the code itself.",
    objective:
      "Give instructors a reliable way to check plagiarism in student submissions and get a deeper analysis of the code behind them.",
    tools: ["Python", "JavaScript", "HTML", "CSS", "MySQL"],
    duties:
      "Part of a five-person team. I designed the backend system and database, then came back to review and refine the frontend near the end of the project.",
    outcome:
      "Delivered a working system with high-accuracy plagiarism detection. Presented and defended the design and results to project supervisors in the final report.",
  },
  {
    slug: "no-code-influxdb",
    title: "No-Code Solution for InfluxDB",
    period: "Aug 2025 — Nov 2025",
    status: "High Distinction",
    summary:
      "A simple, friendly real-time dashboard that lets researchers query InfluxDB data without writing code.",
    objective:
      "Give researchers a simple, friendly interface for working with real-time data in InfluxDB, without needing to write queries by hand.",
    tools: ["Python", "HTML", "CSS", "JavaScript"],
    duties:
      "Part of a four-person team. I was responsible for the frontend system and the real-time dashboard the end user actually interacts with.",
    outcome:
      "Delivered a working system meeting the client's core requirements, demonstrated live and confirmed working under the client supervisor's review.",
  },
  {
    slug: "coming-soon",
    title: "Personal project — in progress",
    period: "2026",
    status: "Coming soon",
    summary:
      "A self-directed build outside of coursework, currently in progress. Details land here once it's live.",
  },
];

