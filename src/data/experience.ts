/**
 * Non-translatable experience data. Localized text (period, role, company,
 * location, bullets) lives in `@/i18n/translations`, keyed by `id`.
 */
export interface Experience {
  id: string;
  skills: string[];
}

export const experiences: Experience[] = [
  { id: "hypefast", skills: ["Go", "TypeScript", "Python", "GCP Pub/Sub", "Terraform"] },
  { id: "csl", skills: ["Python", "Kafka", "YOLOv8"] },
  { id: "telkom", skills: ["Go", "PostgreSQL", "Jira"] },
];

export const leadershipExperiences: Experience[] = [
  { id: "bangkit", skills: ["GCP", "Database Design"] },
  { id: "compfest", skills: ["Docker Compose", "NGINX", "CTF"] },
];
