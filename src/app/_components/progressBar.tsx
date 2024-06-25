import { useEffect, useState } from "react";
import { Indicator, Root } from "@radix-ui/react-progress";

interface Props {
  idx: number;
  barColor: string;
  initialValue: number;
  currentValue: number;
}

export default function ProgressBar({
  idx,
  initialValue,
  currentValue,
  barColor,
}: Props) {
  const [progress, setProgress] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(currentValue), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div
        className={`flex text-sm items-center ${
          idx <= 2 ? "justify-end" : 'justify-between'
        }`}
      >
        {idx > 2 && <p>{initialValue}%</p>}
        <p>{currentValue}%</p>
      </div>
      <Root
        value={progress}
        className={`relative overflow-hidden bg-[#e7eaee] rounded-full w-full h-[3px] ${
          idx > 2 && "h-[5px]"
        }`}
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
      >
        <Indicator
          className={`${barColor} w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Root>
    </div>
  );
}
