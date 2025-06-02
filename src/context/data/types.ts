import type { NearEarthObject } from "../../types/feed";

export interface DataContextType {
  items: NearEarthObject[];
  loading: boolean;
  getItemById: (id: string) => NearEarthObject | null;
}
