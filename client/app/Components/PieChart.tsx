import React, { useEffect, useRef } from "react";
import Chart, { ChartData, ChartConfiguration } from "chart.js/auto";

interface PieChartProps {
  data: number[];
  labels: string[];
  colors?: string[]; // Optional custom colors
}

export default function PieChart({ data, labels, colors }: PieChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) {
      console.error("Canvas element is not available.");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get 2D context for the canvas.");
      return;
    }

    // Destroy existing chart to avoid duplication
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const defaultColors = [
      "rgba(255, 99, 132, 0.7)",
      "rgba(54, 162, 235, 0.7)",
      "rgba(255, 206, 86, 0.7)",
      "rgba(75, 192, 192, 0.7)",
      "rgba(153, 102, 255, 0.7)",
    ];

    const chartData: ChartData<"pie", number[], string> = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors || defaultColors,
          borderColor: colors?.map((color) => color.replace(/0\.7/, "1")) || defaultColors,
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration<"pie", number[], string> = {
      type: "pie",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}`,
            },
          },
        },
      },
    };

    chartInstanceRef.current = new Chart(ctx, config); // Create pie chart

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels, colors]);

  return <canvas ref={chartRef}></canvas>;
}