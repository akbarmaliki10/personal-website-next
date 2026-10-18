export interface StackItem {
  id: string;
  name: string;
  iconName: string;
}

export const stackItems: StackItem[] = [
  { id: "go", name: "Go (Golang)", iconName: "Code2" },
  { id: "gcp", name: "Google Cloud Platform", iconName: "Cloud" },
  { id: "postgres", name: "PostgreSQL & CloudSQL", iconName: "Database" },
  { id: "pubsub", name: "GCP Pub/Sub & Tasks", iconName: "Network" },
  { id: "terraform", name: "Terraform (IaC)", iconName: "Box" },
  { id: "python", name: "Python", iconName: "Terminal" },
  { id: "kafka", name: "Apache Kafka", iconName: "Network" },
  { id: "docker", name: "Docker & Containers", iconName: "Box" },
  { id: "typescript", name: "TypeScript", iconName: "Code2" },
  { id: "node", name: "Node.js & Next.js", iconName: "Terminal" },
];
