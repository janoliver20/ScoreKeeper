export interface RawScore {
  Items: RawItem[];
  Count: number;
  ScannedCount: number;
}

export interface RawItem {
  payload: string;
  id: string;
  timestamp: string;
}
