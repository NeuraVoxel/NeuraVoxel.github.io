export interface SceneData {
  id: string;
  title: string;
  pain: string;
  narrative: string;
  moduleSlugs: string[];
  docPath?: string;
}

export interface ScenesFile {
  scenes: SceneData[];
}
