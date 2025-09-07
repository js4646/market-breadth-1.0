"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Extreme Fear", value: 20 },
  { name: "Fear", value: 20 },
  { name: "Neutral", value: 20 },
  { name: "Greed", value: 20 },
  { name: "Extreme Greed", value: 20 },
];

const COLORS = ["#8B0000", "#FF6347", "#FFD700", "#90EE90", "#008000"];

const Needle = ({ value, cx, cy, r }) => {
  const angle = (value / 100) * 180;
  const rad = (Math.PI * (180 - angle)) / 180;
  const x = cx + r * Math.cos(rad);
  const y = cy - r * Math.sin(rad);

  return (
    <>
      <line
        x1={cx}
        y1={cy}
        x2={x}
        y2={y}
        stroke="black"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={6} fill="black" />
    </>
  );
};

export default function FearGreedGauge({ value = 65 }) {
  const outerRadius = 180;
  const innerRadius = 100;

  const centerX = 250;
  const centerY = 250;
  const needleLength = outerRadius - 40;

  const total = data.reduce((a, b) => a + b.value, 0);

  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = (Math.PI * (180 - angle)) / 180;
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
  };

  // Build short arcs for labels at fixed radius
  let cumulative = 0;
  const arcDefs = data.map((entry, i) => {
    const sliceAngle = (entry.value / total) * 180;
    const midAngle = cumulative + sliceAngle / 2;
    cumulative += sliceAngle;

    const labelRadius = outerRadius + 10; // uniform distance
    const arcWidth = sliceAngle * 0.7; // short arc for text to follow

    const startAngle = midAngle - arcWidth / 2;
    const endAngle = midAngle + arcWidth / 2;

    const start = polarToCartesian(
      centerX + 5,
      centerY,
      labelRadius,
      startAngle
    );
    const end = polarToCartesian(centerX + 5, centerY, labelRadius, endAngle);

    const d = `M ${start.x} ${start.y} A ${labelRadius} ${labelRadius} 0 0 1 ${end.x} ${end.y}`;

    return { id: `arcPath-${i}`, d, name: entry.name };
  });

  return (
    <div style={{ position: "relative", width: 500, height: 350 }}>
      <PieChart width={500} height={350}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
          cx={centerX}
          cy={centerY}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <svg
        style={{ position: "absolute", top: 0, left: 0 }}
        width={500}
        height={350}
      >
        {/* Needle */}
        <Needle value={value} cx={centerX} cy={centerY} r={needleLength} />

        {/* Label arcs */}
        <defs>
          {arcDefs.map(({ id, d }) => (
            <path key={id} id={id} d={d} fill="none" />
          ))}
        </defs>

        {/* Labels */}
        {arcDefs.map(({ id, name }, i) => (
          <text
            key={i}
            fontSize={12}
            fontWeight="600"
            fill="#333"
            dominantBaseline="middle"
          >
            <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
              {name}
            </textPath>
          </text>
        ))}

        {/* Value text */}
        <text
          x={centerX}
          y={centerY + outerRadius / 4}
          textAnchor="middle"
          fontSize={22}
          fontWeight="bold"
          fill="#222"
        >
          {value} / 100
        </text>
      </svg>
    </div>
  );
}
