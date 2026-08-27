export type ProductStatus = "available" | "preview" | "planned";

export type StageTag =
  | "perceive"
  | "process"
  | "train"
  | "simulate"
  | "return"
  | "input"
  | "practice"
  | "feedback"
  | "iterate"
  | "plan"
  | "execute"
  | "review"
  | "optimize";

export interface WorkshopProduct {
  id: string;
  name: string;
  summary: string;
  status: ProductStatus;
  tags: { label: string; stage: StageTag }[];
  openUrl?: string;
  docUrl?: string;
}

export interface WorkshopScene {
  id: string;
  title: string;
  countLabel: string;
  loopSteps: string[];
  products: WorkshopProduct[];
  empty?: boolean;
  emptyTitle?: string;
  emptyDesc?: string;
}

export interface WorkshopData {
  scenes: WorkshopScene[];
}
