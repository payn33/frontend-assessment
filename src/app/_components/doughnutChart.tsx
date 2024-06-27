"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: {
    label: string;
    value: number;
    color: string[];
    cutout: string;
  }[];
}

export default function DoughnutChart({ data }: Props) {
  const options: any = {
    plugins: {
      responsive: true,
      legend: {
        display: true,
        labels: {
          color: "black",
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
          fontSize: 2,
        },
        position: "right",
        padding: 5,
      },
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: ["Miles", "Calories Burned", "Exercise"],
    datasets: [
      {
        data: [data[0].value, 200],
        backgroundColor: data[0].color,
        borderColor: "#000000",
        borderWidth: 0,
        borderRadius: [
          { outerStart: 15, outerEnd: 15, innerStart: 15, innerEnd: 15 },
          0,
        ],
      },
      {
        data: [data[1].value, 240],
        backgroundColor: data[1].color,
        borderColor: "#000000",
        borderWidth: 0,
        borderRadius: [
          { outerStart: 15, outerEnd: 15, innerStart: 15, innerEnd: 15 },
          0,
        ],
      },
      {
        data: [data[2].value, 300],
        backgroundColor: data[2].color,
        borderColor: "#000000",
        borderWidth: 0,
        borderRadius: [
          { outerStart: 15, outerEnd: 15, innerStart: 15, innerEnd: 15 },
          0,
        ],
      },
    ],
  };

  return <Doughnut data={finalData} options={options} updateMode="resize"  />;
}
