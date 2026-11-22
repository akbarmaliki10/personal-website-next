/** Localized text (category, title, description, badge) lives in `@/i18n/translations`. */
export interface Project {
  id: string;
  tags: string[];
  codeSnippet?: string;
  url?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "uav",
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
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    id: "bangkit",
    tags: ["GCP Cloud Run", "FastAPI"],
  },
  {
    id: "portLink",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Vercel"],
    url: "https://port.akbarmaliki.com",
    imageUrl: "/images/port-akbarmaliki.png",
  },
  {
    id: "jlptSrs",
    tags: ["React", "TypeScript", "Vite", "WanaKana", "Vercel Blob"],
    url: "https://jlpt.akbarmaliki.com",
    imageUrl: "/images/jlpt-akbarmaliki.png",
  },
];
