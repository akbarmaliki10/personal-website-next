/** Localized text (category, title, description, badge) lives in `@/i18n/translations`. */
export interface Project {
  id: string;
  tags: string[];
  codeSnippet?: string;
}

export const projects: Project[] = [
  {
    id: "bulkOrder",
    tags: ["Go", "Cloud Tasks", "PostgreSQL", "Terraform", "WMS API"],
    codeSnippet: `// Phase 1: Enqueue async processing with Cloud Tasks
task := &taskspb.CreateTaskRequest{
    Parent: queuePath,
    Task: &taskspb.Task{
        MessageType: &taskspb.Task_HttpRequest{
            HttpRequest: &taskspb.HttpRequest{
                HttpMethod: taskspb.HttpMethod_POST,
                Url:        "/api/v1/orders/process-bulk",
                Body:       payload,
            },
        },
    },
}

// Phase 2: Transactional lock & bulk SKU stock validation
tx.Exec("SELECT id FROM order_import_requests WHERE id = $1 FOR UPDATE", reqID)
err := validateStockAcrossSKUs(ctx, tx, parsedOrders)
if err != nil {
    return rollbackAndNotifyFailure(tx, reqID, err)
}`,
  },
  {
    id: "salesSystem",
    tags: ["Go", "PostgreSQL", "Google Pub/Sub", "Terraform", "WMS API"],
  },
  {
    id: "consignment",
    tags: ["Go", "CloudSQL", "Google Pub/Sub", "Cloud Tasks", "Terraform"],
  },
  {
    id: "customerHub",
    tags: ["Go", "Cloud Run", "Google Pub/Sub", "Cloud Scheduler", "PostgreSQL"],
  },
  {
    id: "uav",
    tags: ["Python", "Apache Kafka", "YOLOv8n", "OpenCV", "Docker"],
  },
];
