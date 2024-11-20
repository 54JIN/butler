import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  data: number[];
  labels: string[];
}

export default function LineChart({ data, labels }: LineChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    // const ctx = chartRef.current.getContext("2d");

    // const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    // gradient.addColorStop(0, "rgba(14, 146, 103, 0.5)"); // Start color (fully visible)
    // gradient.addColorStop(1, "rgba(14, 146, 103, 0)");
    if (chartRef.current) {
      // Destroy previous chart instance if it exists to avoid duplication
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create the new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Revenue",
              data: data,
              borderColor: "rgba(14, 146, 103, 1)",
              backgroundColor: "rgba(14, 146, 103, 0.2)",
              borderWidth: 2,
              fill: true,
              tension: 0.4, // Smooth curve effect
              pointRadius: 0,
              pointHoverRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
        },
      });
    }

    // Clean up function to destroy the chart instance on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels]); // Re-run the effect when `data` or `labels` change

  return <canvas ref={chartRef}></canvas>;
}
