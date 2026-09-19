export const profile = {
  name: "Hardy Tran",
  location: "Adelaide, SA",
  email: "vinhhung90@gmail.com",
  // TODO: paste your real LinkedIn URL here — the CV only listed a placeholder link.
  linkedin: "https://www.linkedin.com/in/hardy-tran/",
  tagline: "Ten years in business & creative. Now I build softwares.",
  bio: [
    "I started my career in banking and finance, spent next six years in creative & event area, and traveled around Vietnam. I moved to Adelaide to start new career in technology.",
    "That mix is unusual, but it works in my favour: I've managed budgets and stakeholders under real deadline pressure, and I now pair that with hands-on skills in Python, JavaScript, HTML, MySQL and cloud platform with MS Azure.",
    "I'm currently completing Professional Year program in Adelaide while looking for a role in Software Engineer or Web Developer, where I can keep building things that are used by real people under real constraints.",
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
    period: "(Jan 2026 - Feb 2027) - Australia 🇦🇺",
    level: "Professional Year Program",
    title: "Performance Education",
    description:
      "Australian business culture, workplace skills and professional communication, ahead of moving into a software or DevOps role.",
    logo: "/logos/logo-pe.png",
  },
  {
    period: "(Feb 2024 - Dec 2025) - Australia 🇦🇺",
    level: "Master of Computing and Innovation",
    title: "University of Adelaide",
    description:
      "Focused on the foundations of software and computing, including the two applied projects below.",
    logo: "/logos/logo-adelaide-uni.png",
    },
  {
    period: "(2011 - 2013) - Vietnam 🇻🇳",
    level: "Bachelor of Business Administration",
    title: "Ho Chi Minh City Open University",
    description: "Focus on business markets and the banking industry.",
    logo: "/logos/open-uni.png",
},
  {
    period: "(2008 - 2011) - Vietnam 🇻🇳",
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
    org: "Regis Aged Care, Adelaide",
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
  items: string[]; // just names — icon resolved via getIconSrc(name) from lib/icons.ts
};

export const skillGroups: SkillGroup[] = [
    { label: "Languages & Frameworks", items: ["Python", "JavaScript", "C#", ".NET", "MySQL", "HTML", "ReactJS", "NodeJS", "FastAPI"] },
    { label: "Cloud", items: ["MS Azure"] },
    { label: "Tools", items: ["Github", "Jira", "Postman", "Docker", "MS Office", "FinalCut Pro"] },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  status: "Distinction" | "High Distinction" | "Coming soon" | "Improving";
  summary: string;
  objective?: string;
  tools?: string[];
  duties?: string;
  outcome?: string;
  github?: string;
  cover?: string;
  gallery?: string[];
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
    tools: ["Python", "JavaScript", "HTML", "CSS", "MySQL", "FastAPI"],
    duties:
      "Part of a five-person team. I designed the backend system and database, then came back to review and refine the frontend near the end of the project.",
    outcome:
      "Delivered a working system with high-accuracy plagiarism detection. Presented and defended the design and results to project supervisors in the final report.",
    github: "https://github.com/hardytran90?page=2&tab=repositories",
    cover: "/project-photo/gradescope1.png",
    gallery: [
    "/project-photo/gradescope2.png",
    "/project-photo/gradescope3.png",
    "/project-photo/gradescope4.png",
    "/project-photo/gradescope5.png",
  ],
    },
  {
    slug: "no-code-influxdb",
    title: "No-Code Solution for InfluxDB",
    period: "Aug 2025 — Nov 2025",
    status: "High Distinction",
    summary:
      "A simple, friendly real-time dashboard that lets researchers query InfluxDB data without writing code.",
    objective:
      "The main goal of this project was to give researchers a simple and user-friendly interface for working with real-time data stored in InfluxDB, without requiring them to write complex queries manually. Users can select the data they need through an intuitive drag-and-drop interface, such as the bucket, time range, measurement, field, and value thresholds. The system then automatically generates the required Flux queries and visualises the results through Grafana. This makes it easier for researchers to explore, analyse, and monitor real-time data while reducing the technical knowledge required to work directly with InfluxDB.",
    tools: ["PHP", "Laravel", "JavaScript", "HTML", "CSS",],
    duties:
      "I was part of a four-person team, responsible for the frontend system and the real-time dashboard that the end user interacts with. My main responsibilities included integrating the application with Grafana, designing and refining the frontend based on data and visualisation results from Grafana, and ensuring that real-time data was presented clearly and effectively. I also worked closely with the backend team to ensure smooth data integration, tested the dashboard functionality, and improved the overall user experience and responsiveness of the interface.",
    outcome:
      "The final system successfully delivers a functional no-code platform that allows users to visually explore and analyze time-series data stored in InfluxDB through an interactive web interface. While the initial vision emphasized a comprehensive OOP-based data hierarchy and a calculation engine, the final implementation focused more on achieving robust integration between the dashboard, InfluxDB, and Grafana to enable real-time querying and visualization while deferring certain advanced features such as the calculation engine UI and mobile responsiveness to future sprints. The resulting platform meets the primary vision of providing a user-friendly experience for non-programmers, with intuitive components such as bucket selection, measurement filtering, and visual dashboard. The final outcome therefore reflects a stable and scalable foundation that fulfills the original vision of simplifying complex data interactions through an accessible, drag-and-drop-based analysis interface.",
    github: "https://github.com/hardytran90/Influx-UI-UniOfAdelaide",
    cover: "/project-photo/influxdb8.png",
    gallery: [
    "/project-photo/influxdb9.png",
    "/project-photo/influxdb3.png",
    "/project-photo/influxdb4.png",
    "/project-photo/influxdb5.png",
    "/project-photo/influxdb6.png",
    "/project-photo/influxdb7.png",
    ]
  },
  {
    slug: "master-dashboard",
    title: "Master Dashboard",
    period: "Aug 2026 — Current",
    github: "https://github.com/hardytran90/Master-Dashboard",
    status: "Improving",
    summary:
      "TBA.",
    objective:
      "TBA.",
    tools: ["TypeScript", "React", "NextJS", "HTML", "Tailwind CSS"],
    duties:
      "TBA.",
    outcome:
      "TBA.",
    cover: "",
    gallery: [],
  },
  {
    slug: "my-run-log",
    title: "My Run Log",
    period: "Jun 2026 — Current",
    github: "https://github.com/hardytran90/MyRunLog",
    status: "Improving",
    summary:
      "TBA.",
    objective:
      "TBA.",
    tools: ["Javascript", "React", "NextJS", "HTML", "CSS"],
    duties:
      "TBA.",
    outcome:
      "TBA.",
    cover: "",
    gallery: [],
  },
  {
    slug: "coding-tracker",
    title: "Coding Tracker",
    period: "Mar 2026 — Current",
    github: "TBA.",
    status: "Improving",
    summary:
      "TBA.",
    objective:
      "TBA.",
    tools: ["Javascript", "React", "NextJS", "HTML", "CSS"],
    duties:
      "TBA.",
    outcome:
      "TBA.",
  },
];

export const socials = {
    email: "vinhhung90@gmail.com",
    facebook: "https://www.facebook.com/Tran.Ba.Vinh.Hung",
    github: "https://github.com/hardytran90",
    linkedin: "https://www.linkedin.com/in/hardy-tran/",
    discord: "https://discord.com/users/hardy_tran",
};

export const toolSlugs: Record<string, string> = {
    Python: "python",
    JavaScript: "javascript",
    TypeScript: "typescript",
    HTML: "html5",
    CSS: "css3",
    MySQL: "mysql",
    React: "react",
    "Next.js": "nextdotjs",
};