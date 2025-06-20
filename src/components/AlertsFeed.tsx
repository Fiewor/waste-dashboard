// src/components/AlertsFeed.tsx
import React from "react";
import type { Alert } from "../types";

export const AlertsFeed: React.FC<{ alerts: Alert[] }> = ({ alerts }) => {
  return (
    <div className="bg-white p-4 rounded shadow col-span-full">
      <h2 className="text-xl font-bold mb-2">Alerts</h2>
      <ul>
        {alerts.map((alert, i) => (
          <li key={i} className="border-b py-2">
            <strong>{alert.binId}</strong>: {alert.message}{" "}
            <span className="text-gray-500 text-sm">
              ({new Date(alert.timestamp).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
