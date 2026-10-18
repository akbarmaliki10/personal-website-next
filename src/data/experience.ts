/**
 * Non-translatable experience data. Localized text (period, role, company,
 * location, bullets) lives in `@/i18n/translations`, keyed by `id`.
 */
export interface Experience {
  id: string;
  skills: string[];
}

export const experiences: Experience[] = [
  { id: "hypefast", skills: ["Go", "PostgreSQL", "Cloud Tasks", "GCP Pub/Sub", "Terraform", "Docker"] },
  { id: "csl", skills: ["Python", "Apache Kafka", "YOLOv8n", "Docker"] },
  { id: "telkom", skills: ["Go", "PostgreSQL", "REST APIs", "Jira"] },
];

export const leadershipExperiences: Experience[] = [
  { id: "bangkit", skills: ["GCP", "FastAPI", "TensorFlow", "Database Design"] },
  { id: "compfest", skills: ["Docker Compose", "NGINX", "Load Balancing", "CTF"] },
];
