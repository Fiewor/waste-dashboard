// src/components/SummaryCards.tsx
import React from "react";
import type { Summary } from "../types";

export const SummaryCards: React.FC<{ summary: Summary }> = ({ summary }) => {
  const cards = [
    { title: "Total Bins", value: summary.totalBins },
    { title: "Full Bins", value: summary.binsFull },
    { title: "Warning Bins", value: summary.binsWarning },
    { title: "Normal Bins", value: summary.binsNormal },
    { title: "Average Fullness", value: `${summary.avgFullness.toFixed(1)}%` },
  ];

  return (
    <div className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-gray-500 p-4 rounded shadow text-center"
        >
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
};
