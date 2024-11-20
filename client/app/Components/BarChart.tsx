import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface BarChartProps {
  labels: string[];  // Labels for the X-axis
  incomeData: number[]; // Data for the income
  expenseData: number[]; // Data for the expenses
}

export default function BarChart({ labels, incomeData, expenseData }: BarChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const getBorderWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) return 8; // Mobile devices
      if (screenWidth < 1200) return 8; // Tablets and small desktops
      return 15; // Large desktops and monitors
    };

    if (chartRef.current) {
      // Destroy the previous chart instance if it exists to avoid duplication
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar", // Bar chart
        data: {
          labels: labels, // X-axis labels
          datasets: [
            {
              label: "Income", // Label for the income dataset
              data: incomeData, // Income data points
              backgroundColor: "rgba(75, 192, 192, 0.5)", // Bar color for income
              borderColor: "rgba(75, 192, 192, 1)", // Border color for income
              borderWidth: 1,
              barThickness: getBorderWidth(), // Set bar thickness for better visual appeal
              borderRadius: 8, // Rounded corners
            },
            {
              label: "Expenses", // Label for the expenses dataset
              data: expenseData, // Expenses data points
              backgroundColor: "rgba(255, 99, 132, 0.5)", // Bar color for expenses
              borderColor: "rgba(255, 99, 132, 1)", // Border color for expenses
              borderWidth: 1,
              barThickness: getBorderWidth(), // Set bar thickness for better visual appeal
              borderRadius: 8, // Rounded corners
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              // Configuring the x-axis
              beginAtZero: true,
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            y: {
              // Configuring the y-axis
              beginAtZero: true,
              grid: {
                display: false
              },
              ticks: {
                display: false
              },
              border: {
                display: false
              }
            },
          },
          plugins: {
            legend: {
              display: false // Position the legend at the top
            },
          },
        //   layout: {
        //     padding: {
        //       left: 10,
        //       right: 10,
        //       top: 10,
        //       bottom: 10,
        //     },
        //   },
        },
      });
    }

    // Clean up function to destroy the chart instance on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [labels, incomeData, expenseData]); // Re-run the effect when data changes

  return <canvas ref={chartRef}></canvas>;
};