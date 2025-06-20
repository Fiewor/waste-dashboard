import type { BinStatus } from "./types";

export const mockData = {
  bins: [
    {
      id: "bin-001",
      location: { name: "Engineering Block", lat: 6.5244, lng: 3.3792 },
      fullness: 82,
      lastUpdated: "2025-06-18T08:30:00Z",
      status: "warning" as BinStatus,
    },
    {
      id: "bin-002",
      location: { name: "Cafeteria", lat: 6.5241, lng: 3.379 },
      fullness: 95,
      lastUpdated: "2025-06-18T08:15:00Z",
      status: "critical" as BinStatus,
    },
    {
      id: "bin-003",
      location: { name: "Library", lat: 6.5246, lng: 3.3794 },
      fullness: 20,
      lastUpdated: "2025-06-18T08:00:00Z",
      status: "normal" as BinStatus,
    },
  ],
  alerts: [
    {
      binId: "bin-002",
      message: "Bin almost full. Please empty soon.",
      timestamp: "2025-06-18T08:15:00Z",
    },
  ],
  summary: {
    totalBins: 3,
    binsFull: 1,
    binsWarning: 1,
    binsNormal: 1,
    avgFullness: 65.67,
  },
};
