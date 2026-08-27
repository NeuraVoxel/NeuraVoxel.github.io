export interface ToolData {
  id: string;
  title: string;
  summary: string;
  url: string;
  status: "available" | "preview" | "planned";
  order?: number;
}

export interface ToolsFile {
  tools: ToolData[];
}
