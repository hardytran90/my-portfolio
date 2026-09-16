export const profile = {
  name: "Hardy Tran",
  location: "Adelaide, SA",
  email: "vinhhung90@gmail.com",
  // TODO: paste your real LinkedIn URL here — the CV only listed a placeholder link.
  linkedin: "https://www.linkedin.com/in/hardy-tran/",
  tagline: "Ten years in business & creative. Now I build softwares.",
  bio: [
    "I started my career in banking and finance, spent next six years in creative & event area, and traveled around Vietnam. I moved to Adelaide to start new career in technology.",
    "That mix is unusual, but it works in my favour: I've managed budgets and stakeholders under real deadline pressure, and I now pair that with hands-on skills in Python, JavaScript, C#, SQL and cloud platform with MS Azure.",
    "I'm currently completing Professional Year program in Adelaide while looking for a role in Software Engineer or Web Development, where I can keep building things that are used by real people under real constraints.",
  ],
};

export type EducationItem = {
  period: string;
  title: string;
  level: string;
  description: string;
  logo: string;
};

// Ordered newest to oldest
export const education: EducationItem[] = [
    {
    period: "Jan 2026 - Feb 2027 -- Australia",
    level: "Professional Year Program",
    title: "Performance Education",
    description:
      "Australian business culture, workplace skills and professional communication, ahead of moving into a software or DevOps role.",
    logo: "/logos/logo-pe.png",
  },
  {
    period: "Feb 2024 - Dec 2025 -- Australia",
    level: "Master of Computing and Innovation",
    title: "University of Adelaide",
    description:
      "Focused on the foundations of software and computing, including the two applied projects below.",
    logo: "/logos/logo-adelaide-uni.png",
    },
  {
    period: "2011 - 2013 -- Vietnam",
    level: "Bachelor of Business Administration",
    title: "Ho Chi Minh City Open University",
    description: "Focus on business markets and the banking industry.",
    logo: "/logos/open-uni.png",
},
  {
    period: "2008 - 2011 -- Vietnam",
    level: "Diploma of Business Administration",
    title: "University of Finance & Marketing",
    description: "Foundation coursework in business and finance management.",
    logo: "/logos/logo-marketing-uni.png",
},
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

// Newest to Oldest 
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

export type SkillItem = {
  name: string;
  slug?: string;
  logo?: string;
}

export type SkillGroup = {
  label: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Languages & Frameworks", 
    items: [
        { name: "Python", slug: "python" },
        { name: "JavaScript", slug: "javascript" },
        { name: "C#", logo: "/logos/csharp.svg" },
        { name: "MySQL", slug: "mysql" },
        { name: ".NET", slug: "dotnet" },
        { name: "HTML", slug: "html5" },
        { name: "React", logo: "/logos/reactjs.svg" },
        { name: "NodeJS", logo: "/logos/nodejs.svg" },
        { name: "FastAPI", logo: "/logos/fastapi.svg" },
    ],},
  { label: "Cloud", 
    items: [
        { name: "MS Azure", logo: "/logos/microsoft-azure.svg" }
    ],},
//   { label: "Systems", 
//     items: [
//         { name: "macOS", logo: "/logos/mac-os.svg" }
//     ],},
  { label: "Tools", 
    items: [
        { name:  "Github", logo: "/logos/github.svg" },
        { name:  "Jira", logo: "/logos/jira.svg" },
        { name:  "Postman", logo: "/logos/postman.svg" },
        { name:  "Docker", logo: "/logos/docker.svg" },
        { name: "MS Office", logo: "/logos/microsoft-office.svg" },
        { name:  "FinalCut Pro", logo: "/logos/final-cut.svg" },
    ],},
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

export const socials = {
    email: "vinhhung90@gmail.com",
    facebook: "https://www.facebook.com/Tran.Ba.Vinh.Hung",
    github: "https://github.com/hardytran90",
    linkedin: "https://www.linkedin.com/in/hardy-tran/",
    discord: "https://discord.com/users/hardy_tran",
};