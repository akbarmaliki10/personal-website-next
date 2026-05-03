export interface StackItem {
  id: string;
  name: string;
  iconName: string; // We'll map this to a Lucide icon or custom SVG
}

export const stackItems: StackItem[] = [
  { id: "gcp", name: "Google Cloud Platform", iconName: "Cloud" },
  { id: "go", name: "Go", iconName: "Code2" }, // Fallback icons
  { id: "python", name: "Python", iconName: "Terminal" },
  { id: "postgres", name: "PostgreSQL", iconName: "Database" },
  { id: "kafka", name: "Kafka", iconName: "Network" },
  { id: "docker", name: "Docker", iconName: "Box" },
  { id: "k8s", name: "Kubernetes", iconName: "Cpu" },
];
