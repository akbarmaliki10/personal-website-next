export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "hypefast",
    role: "Backend Software Engineer",
    company: "Hypefast",
    period: "2022 - Present",
    description: "Focused on building and maintaining highly scalable APIs, managing distributed data pipelines, and optimizing system latency.",
    skills: ["GCP", "Go", "Kafka"],
  },
  {
    id: "csl",
    role: "Teaching Assistant & Researcher",
    company: "Computer Systems Lab @ UI",
    period: "2021 - 2022",
    description: "Conducted research on distributed systems architecture and mentored students in advanced OS and networking concepts.",
    skills: ["System Design", "Research"],
  },
  {
    id: "telkom",
    role: "Backend Intern",
    company: "Telkom Indonesia",
    period: "2021",
    description: "Developed internal tooling and RESTful APIs for enterprise data management solutions.",
    skills: ["AWS", "Python"],
  },
];
