"use client";
import Image from "next/image";
import { CardData } from "../page";
import {
  CheckIcon,
  DoubleArrowRightIcon,
  TriangleUpIcon,
} from "@radix-ui/react-icons";
import ProgressBar from "./progressBar";
interface Props {
  className?: string;
  idx?: number;
  cardData: CardData;
}
export default function DashboardCard({
  className,
  cardData: {
    icon,
    header: { color: headerColor, title, icon: headerIcon, text: headerText },
    stats: { value, percentage, text },
    progress: {
      initialValue,
      currentValue,
      color: barColor,
      text: progressText,
    },
    cards,
  },
  idx,
}: Props) {
  return (
    <div className={`text-black border-2 rounded-[5px] px-3 py-4 ${className}`}>
      {icon && (
        <div
          className={`rounded-lg bg-[#F7F8F9] w-fit flex p-1 justify-center items-center mb-2`}
        >
          <Image
            src={icon}
            alt="dashboard card lightening icon"
            width={20}
            height={20}
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2
          className={`text-[#72777B] text-base ${idx && idx > 2 && "text-lg"}`}
        >
          {title}
        </h2>

        <div
          className={`${headerColor} flex rounded-md items-center justify-center w-[25px] h-[25px] ${
            idx && idx > 2 && "w-[30px] h-[30px]"
          } translate-y-[7px] cursor-pointer`}
        >
          {idx && idx < 2 ? (
            <span className="flex">
              <Image
                src={headerIcon}
                alt="dashboard card bar chart icon"
                width={18}
                height={18}
              />
            </span>
          ) : (
            <span>
              <Image
                src={headerIcon}
                alt="dashboard card bar chart icon"
                width={18}
                height={18}
              />
            </span>
          )}
        </div>
      </div>

      <div>
        <span className="flex items-center">
          <p className={`text-lg  font-black pr-2.5`}>{value}</p>
          <p className="bg-[#d2fff6] rounded-sm px-1 text-[11px] text-[#005d36] font-[500] flex items-center justify-center">
            <TriangleUpIcon className="text-[4px]" />
            {percentage}%
          </p>
        </span>

        <p className="text-base text-[#72777B] ">{headerText}</p>

        <div className="flex flex-col">
          <ProgressBar
            idx={idx || 0}
            initialValue={initialValue}
            currentValue={currentValue}
            barColor={barColor}
          />

          {progressText && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-[#72777B]">{progressText}</p>

              <p className="text-[#008EEF] cursor-pointer text-sm font-semibold flex items-center justify-center">
                view more <DoubleArrowRightIcon className="font-bold ml-2" />
              </p>
            </div>
          )}
        </div>

        {cards && (
          <div className="min-h-[410px]">
            <div className="flex flex-col w-full pt-2.5 pb-4">
              {cards.map((ctx, idx) => (
                <div
                  key={idx}
                  className="flex rounded-md bg-[#F8F7FF] p-2 mb-2 min-h-[60px]"
                >
                  {ctx.profileImg.length ? (
                    <span className="mr-3 min-w-[55px] flex justify-center items-center">
                      <Image
                        src={ctx.profileImg[0]}
                        alt="dashboard card profile image"
                        width={40}
                        height={40}
                        className="z-20"
                      />

                      <Image
                        src={ctx.profileImg[1]}
                        alt="dashboard card profile image"
                        width={40}
                        height={40}
                        className="z-10 translate-x-[-10px]"
                      />
                    </span>
                  ) : (
                    <span className="mr-3 min-w-[55px]">
                      <Image
                        src={ctx.profileImg}
                        alt="dashboard card profile image"
                        width={40}
                        height={40}
                      />
                    </span>
                  )}
                  <div className="flex items-center justify-between w-full">
                    <span className="flex flex-col">
                      <p>{ctx.name}</p>
                      <p className="text-[#757575] text-xs">{ctx.time}</p>
                    </span>

                    {ctx.type === "icon" && (
                      <Image
                        src={ctx.icon}
                        alt="dashboard card chat icon"
                        width={25}
                        height={25}
                      />
                    )}

                    {ctx.type === "string" && (
                      <button className="text-[#005E36] text-sm p-1 rounded-md bg-[#D2FFE6]">
                        view class
                      </button>
                    )}

                    {ctx.type === "check" && (
                      <label
                        htmlFor="check"
                        className="rounded-[10px] relative inline-flex cursor-pointer m-3 w-[25px] h-[25px] "
                      >
                        <input
                          type="checkbox"
                          name="check"
                          className="peer appearance-none rounded-lg checked:bg-[#4AD79B] w-[25px] h-[25px] border-black-200 border-[2px]"
                          defaultChecked={idx === 0 || (idx === 2 && true)}
                        />

                        <CheckIcon
                          className="absolute translate-x-[75%] translate-y-[75%] mx-auto peer-checked:block hidden text-white"
                          width={10}
                          height={10}
                        />
                      </label>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full justify-end">
              <button className="flex items-center bg-[#EFEEFF] justify-center py-2 px-3 rounded-md text-[#695CFB] w-fit">
                <p className="text-sm font-semibold">view more</p>

                <DoubleArrowRightIcon className="ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
