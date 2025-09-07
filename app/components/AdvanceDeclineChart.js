"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const sampleData = [
  { date: "2025-08-20", advdec: 120 },
  { date: "2025-08-21", advdec: 150 },
  { date: "2025-08-22", advdec: 180 },
  { date: "2025-08-23", advdec: 160 },
  { date: "2025-08-24", advdec: 200 },
];

export default function AdvanceDeclineChart() {
  return (
    <LineChart width={600} height={300} data={sampleData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="advdec" stroke="#2563eb" strokeWidth={2} />
    </LineChart>
  );
}
