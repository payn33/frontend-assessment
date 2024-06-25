"use client";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Tooltip,
  Filler
);

interface Props {
  data: any;
}

export default function LineChart({ data }: Props) {
  const options: any = {
    plugins: {
      responsive: true,
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        labels: {
          color: ["#FBC62F", "#f7f8f9"],
          usePointStyle: true,
          boxWidth: 5,
          boxHeight: 5,
          fontSize: 2,
        },
        position: "top",
        align: "start",
      },
    },
    scales: {
      y: {
        min: 1,
        max: 24,
        ticks: {
          stepSize: 1,
          callback: function (value: number) {
            const hour = value % 24; // Get the hour value (0-23)
            const label = hour === 0 ? `${hour} AM` : `${hour} PM`; // Format label
            return label;
          },
        },
      },
    },
  };

  return (
    <Line
      data={data}
      datasetIdKey={"data[0].label[0]"}
      options={options}
      updateMode="resize"
    />
  );
}
