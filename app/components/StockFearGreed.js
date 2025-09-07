"use client";
import React, { useState, useEffect } from "react";
import FearGreedMeter from "./FearGreedMeter";

export default function StockFearGreed() {
  const [index, setIndex] = useState(50);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/api/feargreed");
        const json = await res.json();
        // Remove digits after comma
        const value =
          json.value !== undefined ? Math.floor(json.value) : undefined;
        console.log("Fetched Fear & Greed index:", value);
        if (json.value !== undefined) {
          setIndex(value);
        }
      } catch (err) {
        console.error("Failed to fetch Fear & Greed index:", err);
      }
    }

    getData();

    // Refresh every hour
    const timer = setInterval(getData, 3600_000);
    return () => clearInterval(timer);
  }, []);

  return <FearGreedMeter value={index} />;
}
