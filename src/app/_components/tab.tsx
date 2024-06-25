import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import LineChart from "./lineChart";
import { ScriptableContext } from "chart.js";

interface Props {
  data: {
    title: string;
    labels?: {
      text: string;
      color: string;
    }[];
  }[];
  getVal: (val: string) => void;
}
const generateRandomData = (length: number, min: number, max: number) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const lineChartData = [
  {
    labels: months,
    datasets: [
      {
        id: 1,
        label: "REM",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 215, 0, 1)");
          gradient.addColorStop(1, "rgba(255, 215, 0, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#FFD700",
        borderWidth: 0,
      },
      {
        id: 2,
        label: "Light Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(0, 199, 242, 1)");
          gradient.addColorStop(1, "rgba(0, 199, 242, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#00C7F2",
        borderWidth: 0,
      },
      {
        id: 3,
        label: "Deep Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(14, 101, 157, 1)");
          gradient.addColorStop(1, "rgba(14, 101, 157, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#0E659D",
        borderWidth: 0,
      },
      {
        id: 4,
        label: "Awake",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 173, 125, 1)");
          gradient.addColorStop(1, "rgba(34, 173, 125, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#22AD7D",
        borderWidth: 0,
      },
    ],
  },
  {
    labels: months,
    datasets: [
      {
        id: 4,
        label: "Awake",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 173, 125, 1)");
          gradient.addColorStop(1, "rgba(34, 173, 125, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#22AD7D",
        borderWidth: 0,
      },
      {
        id: 2,
        label: "Light Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(0, 199, 242, 1)");
          gradient.addColorStop(1, "rgba(0, 199, 242, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#00C7F2",
        borderWidth: 0,
      },
      {
        id: 3,
        label: "Deep Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(14, 101, 157, 1)");
          gradient.addColorStop(1, "rgba(14, 101, 157, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#0E659D",
        borderWidth: 0,
      },
      {
        id: 1,
        label: "REM",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 215, 0, 1)");
          gradient.addColorStop(1, "rgba(255, 215, 0, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#FFD700",
        borderWidth: 0,
      },
    ],
  },
  {
    labels: months,
    datasets: [
      {
        id: 3,
        label: "Deep Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(14, 101, 157, 1)");
          gradient.addColorStop(1, "rgba(14, 101, 157, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#0E659D",
        borderWidth: 0,
      },
      {
        id: 2,
        label: "Light Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(0, 199, 242, 1)");
          gradient.addColorStop(1, "rgba(0, 199, 242, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#00C7F2",
        borderWidth: 0,
      },
      {
        id: 4,
        label: "Awake",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 173, 125, 1)");
          gradient.addColorStop(1, "rgba(34, 173, 125, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#22AD7D",
        borderWidth: 0,
      },
      {
        id: 1,
        label: "REM",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 215, 0, 1)");
          gradient.addColorStop(1, "rgba(255, 215, 0, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#FFD700",
        borderWidth: 0,
      },
    ],
  },
  {
    labels: months,
    datasets: [
      {
        id: 1,
        label: "REM",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 215, 0, 1)");
          gradient.addColorStop(1, "rgba(255, 215, 0, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#FFD700",
        borderWidth: 0,
      },
      {
        id: 2,
        label: "Light Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(0, 199, 242, 1)");
          gradient.addColorStop(1, "rgba(0, 199, 242, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#00C7F2",
        borderWidth: 0,
      },
      {
        id: 3,
        label: "Deep Sleep",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(14, 101, 157, 1)");
          gradient.addColorStop(1, "rgba(14, 101, 157, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#0E659D",
        borderWidth: 0,
      },
      {
        id: 4,
        label: "Awake",
        data: generateRandomData(12, 1, 23),
        fill: "origin",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 173, 125, 1)");
          gradient.addColorStop(1, "rgba(34, 173, 125, 0.1)");
          return gradient;
        },
        lineTension: 0.4,
        borderColor: "#22AD7D",
        borderWidth: 0,
      },
    ],
  },
];

export default function Tabs({ data, getVal }: Props) {
  return (
    <Root defaultValue={data[0].title} onValueChange={getVal}>
      <List className="w-full flex items-center">
        {data.map((ctx, idx) => (
          <Trigger
            value={ctx.title}
            key={idx}
            className={`font-semibold w-1/4 py-1 mr-1 text-sm data-[state=active]:bg-[#323A46] data-[state=active]:text-white data-[state=inactive]:text-[#C3C9D2] data-[state=inactive]:bg-[#E7EAEE] rounded-[5px]`}
          >
            <p>{ctx.title}</p>
          </Trigger>
        ))}
      </List>

      {data.map((ctx, idx) => (
        <Content key={idx} value={ctx.title} className="pt-8 w-full">
          <LineChart data={lineChartData[idx]} />
        </Content>
      ))}
    </Root>
  );
}
