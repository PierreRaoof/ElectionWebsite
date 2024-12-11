import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ElectionResultsChart = () => {
  // Data for the chart
  const data = {
    labels: ["President", "State Governor", "Measure 872", "Measure 874"],
    datasets: [
      // President
      {
        label: "Democrats",
        data: [48, 44, null, null], // null for measures
        backgroundColor: "blue",
      },
      {
        label: "Republicans",
        data: [46, 50, null, null],
        backgroundColor: "red",
      },
      {
        label: "Independents",
        data: [6, 6, null, null],
        backgroundColor: "green",
      },
      // Measures (Yes/No Votes)
      {
        label: "Yes Votes",
        data: [null, null, 58, 64], // null for candidates
        backgroundColor: "lightblue",
        stack: "Measure",
      },
      {
        label: "No Votes",
        data: [null, null, 42, 36],
        backgroundColor: "orange",
        stack: "Measure",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return value !== null ? `${context.dataset.label}: ${value}%` : null;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Percentage (%)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Election Positions / Measures",
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "600px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ElectionResultsChart;
