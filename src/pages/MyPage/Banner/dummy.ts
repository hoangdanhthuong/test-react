import { ChartData } from "chart.js";

const data: ChartData<"line"> = {
  labels: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"],
  datasets: [
    {
      label: "Line Dataset",
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55, 40, 32, 45, 70, 75, 90],
    },
    {
      label: "Line Dataset 2",
      fill: false,
      borderColor: "#FFCC21",
      borderWidth: 2,
      data: [45, 50, 55, 58, 63, 65, 60, 58, 52, 48, 45, 42],
    },
  ],
};

const options: any = {
  responsive: true,
  maintainAspectRatio: false, // Set to false to make the chart fit its container
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        display: false, // Hide the horizontal grid lines (only vertical lines will be displayed)
      },
      ticks: {
        display: false, // Hide Y-axis tick labels
      },
    },
    x: {
      grid: {
        display: true, // Display the vertical grid lines
        color: "#777777", // Customize the color of the vertical grid lines,
      },
    },
  },
};

export const chartData = {
  data,
  options,
};
