export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  badge?: string;
  codeSnippet?: string;
}

export const projects: Project[] = [
  {
    id: "uav",
    category: "DISTRIBUTED SYSTEMS",
    title: "Multi-UAV Data Stream",
    description: "Architected a high-throughput data streaming pipeline for real-time video feeds from multiple Unmanned Aerial Vehicles (UAVs). Utilized YOLOv8 for edge inference and Kafka for robust message brokering across the network.",
    tags: ["YOLOv8", "Kafka", "Python"],
    codeSnippet: `# Initializing stream
producer = KafkaProducer(
    bootstrap_servers='broker:9092'
)

# Processing YOLOv8 inference
results = model(frame)
bbox_data = extract_boxes(results)

# Publishing to Kafka
producer.send('uav-stream',
    key=b'drone_1',
    value=bbox_data
)`,
  },
  {
    id: "ajambeh",
    category: "E-COMMERCE",
    title: "Pokemon Ajambeh Collectibles",
    description: "Developed a robust backend for a niche e-commerce platform specializing in rare collectibles, implementing secure inventory management and payment gateways.",
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    id: "bangkit",
    category: "MACHINE LEARNING",
    title: "Bangkit Academy Capstone",
    description: "Designed and deployed scalable API endpoints serving machine learning models for the final capstone project at Google's Bangkit Academy.",
    tags: ["GCP Cloud Run", "FastAPI"],
    badge: "DISTINCTION (TOP 500)",
  },
];
