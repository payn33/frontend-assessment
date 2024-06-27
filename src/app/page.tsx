"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import BarChartIcon from "@/public/barChartIcon.svg";
import BarChartAltIcon from "@/public/barChartAltIcon.svg";
import PeopleIcon from "@/public/people.svg";
import BicepIcon from "@/public/bicep.svg";
import CalenderIcon from "@/public/calender.svg";
import Bolt from "@/public/bolt.svg";
import ChatIcon from "@/public/chatIcon.svg";
import DashboardCard from "./_components/card";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import img6 from "@/public/img6.png";
import img7 from "@/public/img7.png";
import img9 from "@/public/img9.png";
import PredictorIcon from "@/public/predictor.png";
import UpdateIcon from "@/public/update.svg";
import InfoIcon from "@/public/info.svg";
import BgImage from "@/public/bgImage.png";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import DoughnutChart from "./_components/doughnutChart";
import Tabs from "./_components/tab";
import { useState } from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const texts = {
  headers: {
    text1: "Good evening",
    text2: "Monday 20 Sep, 2023",
  },

  input: {
    placeholder: "Search for clients & classes",
  },

  predictor: {
    text1: "Client Attendance Predictor",
    text2: "Here to be of service",
    text3: "Coming Soon",
  },

  devices: {
    text1: "Connected Devices",
    text2: "Choose a wearable device",
    text3: "Apple Watches & 26 more devices",
    text4: "50% of your clients are connected to their device",
  },

  steps: {
    text1: "Steps",
    text2: "27% client data usage was gathered this week",
    text3: "Walking Exercise",
    text4: "100,00,622 Steps",
    text5: "Keep pushing them to reach their goals!",
  },

  graph: {
    text1: "Client Performance Graph",
  },
};
export interface CardData {
  icon?: any;
  header: { title: string; color: string; icon: any; text?: string };
  progress: {
    initialValue: number;
    currentValue: number;
    text?: string;
    color: string;
  };

  stats: {
    value: string | number;
    percentage: number | string;
    text?: string;
  };

  cards?: {
    profileImg: any | any[];
    name: string;
    time: string;
    icon: any;
    type: string;
  }[];
}
[];

const cardData: CardData[] = [
  {
    icon: Bolt,
    header: {
      title: "Workout compliance",
      color: "bg-[#00d1cf]",
      icon: BarChartIcon,
    },
    stats: {
      value: "12/42",
      percentage: 37.11,
    },
    progress: {
      initialValue: 0,
      currentValue: 25,
      color: "bg-[#00C7F2]",
    },
  },
  {
    icon: Bolt,
    header: {
      title: "Task compliance",
      color: "bg-[#17B26A]",
      icon: BarChartIcon,
    },
    stats: {
      value: "42%",
      percentage: 37.12,
    },
    progress: {
      initialValue: 0,
      currentValue: 25,
      color: "bg-[#17B26A]",
    },
  },
  {
    icon: Bolt,
    header: {
      title: "Total weight loss",
      color: "bg-[#FFD700]",
      icon: BarChartIcon,
    },
    stats: {
      value: "20kg",
      percentage: 37.13,
    },
    progress: {
      initialValue: 0,
      currentValue: 25,
      color: "bg-[#FFD700]",
      text: "vs. previous month",
    },
  },
  {
    header: {
      title: "New clients",
      color: "bg-[#FEF8E6]",
      icon: PeopleIcon,
      text: "vs. previous month",
    },
    stats: {
      value: "20",
      percentage: 12.89,
    },
    progress: {
      initialValue: 0,
      currentValue: 36,
      color: "bg-[#FBC62F]",
    },
    cards: [
      {
        icon: ChatIcon,
        profileImg: img1,
        name: "Guy Hawkings",
        time: "22 minutes",
        type: "icon",
      },
      {
        icon: ChatIcon,
        profileImg: img2,
        name: "Asta Majid",
        time: "22 minutes",
        type: "icon",
      },
      {
        icon: ChatIcon,
        profileImg: img3,
        name: "Robert Fox",
        time: "22 minutes",
        type: "icon",
      },
      {
        icon: ChatIcon,
        profileImg: img4,
        name: "Anete Black",
        time: "22 minutes",
        type: "icon",
      },
    ],
  },
  {
    header: {
      title: "Classes for today",
      color: "bg-[#E5FAFF]",
      icon: BicepIcon,
      text: "vs. previous shift",
    },
    stats: {
      value: "15",
      percentage: 2.89,
    },
    progress: {
      initialValue: 0,
      currentValue: 78,
      color: "bg-[#00C7F2]",
    },
    cards: [
      {
        icon: "view class",
        profileImg: img4,
        name: "Yoga Class",
        time: "60 minutes",
        type: "string",
      },
      {
        icon: "view class",
        profileImg: img5,
        name: "Cycle Class",
        time: "60 minutes",
        type: "string",
      },
      {
        icon: "view class",
        profileImg: img6,
        name: "Robert Fox",
        time: "60 minutes",
        type: "string",
      },
      {
        icon: "view class",
        profileImg: img7,
        name: "Cardio Class",
        time: "60 minutes",
        type: "string",
      },
    ],
  },
  {
    header: {
      title: "Appointments for today",
      color: "bg-[#E8E6FE]",
      icon: CalenderIcon,
      text: "vs. previous shift",
    },
    stats: {
      value: "12",
      percentage: 1.89,
    },
    progress: {
      initialValue: 0,
      currentValue: 90,
      color: "bg-[#695CFB]",
    },
    cards: [
      {
        icon: null,
        profileImg: img1,
        name: "Guy Hawkings",
        time: "10:00 - 12:00 PM | cardio session ",
        type: "check",
      },
      {
        icon: null,
        profileImg: img2,
        name: "Asta Majid",
        time: "12:00 - 1:00 PM | pilates session ",
        type: "check",
      },
      {
        icon: null,
        profileImg: [img3, img9],
        name: "Robert Fox & Julia Fox",
        time: "2:00 - 4:00 PM | cycle session ",
        type: "check",
      },
      {
        icon: null,
        profileImg: img4,
        name: "Annette Black",
        time: "5:00 - 7:00 PM | Yoga session ",
        type: "check",
      },
    ],
  },
];
const tabData = [
  {
    title: "Sleep",

    labels: [
      { text: "REM", color: "bg-[#FFD700]" },
      { text: "Light Sleep", color: "bg-[#00C7F2]" },
      { text: "Deep Sleep", color: "bg-[#0E659D]" },
      { text: "Awake", color: "bg-[#22AD7D]" },
    ],
  },
  {
    title: "Steps",
  },
  {
    title: "Weight",
  },
  {
    title: "Temperature",
  },
];

const doughnutChartData = [
  {
    label: "Miles",
    value: 300,
    color: ["#FBC62F", "#f7f8f9"],
    cutout: "60%%",
  },
  {
    label: "Calories Burned",
    value: 220,
    color: ["#00C7F2", "#f7f8f9"],
    cutout: "39view all%",
  },
  {
    label: "Exercise",
    value: 120,
    color: ["#F75D5F", "#f7f8f9"],
    cutout: "28%",
  },
];

export default function Home() {
  const [currentTabVal, setCurrenTabVal] = useState(tabData[0].title);

  const getVal = (val: string) => {
    setCurrenTabVal(val);
  };

  return (
    <main className={`flex flex-col min-h-screen pt-12 pr-4 pl-5`}>
      <div className="flex w-full h-[70px] items-center justify-between flex-col md:flex-row md:items-start mb-[70px] md:mb-0">
        <div className="text-black w-full mb-3 md:mb-0">
          <h1 className="font-bold text-lg">{texts.headers.text1}</h1>
          <p className="text-[#72777B]">{texts.headers.text2}</p>
        </div>

        <div className="flex items-center text-black w-full">
          <span className="flex items-center flex-row-reverse mr-8 w-full relative">
            <input
              type="search"
              name="search"
              placeholder={texts.input.placeholder}
              className="border-2 rounded-[5px] focus-visible:outline-none px-[25px] py-2 placeholder:pl-2 text-sm w-full md:w-[300px]"
            />
            <label
              htmlFor="search"
              className="translate-x-[12px] absolute w-full inline md:w-[300px]"
            >
              <MagnifyingGlassIcon />
            </label>
          </span>

          <QuestionMarkCircledIcon
            className="cursor-pointer text-[#004a3f]"
            width={18}
            height={18}
          />
        </div>
      </div>

      <div className="w-full flex justify-between flex-col md:flex-row">
        <div className="w-[100%] md:w-[70%] flex flex-col mb-15 md:mb-0 ">
          <div className="flex flex-wrap  h-fit items-baseline ">
            {cardData.map((ctx, idx) => (
              <DashboardCard
                key={idx}
                idx={idx}
                className="flex-grow w-full sm:w-full md:w-full lg:w-1/4  mr-2 mb-2 min-w-[250px] min-h-[160px]"
                cardData={ctx}
              />
            ))}
          </div>
          <div className="text-black w-full rounded-[5px] border-2 p-4">
            <div className="mb-3">
              <span className="flex justify-between items-center w-full">
                <p className="font-semibold text-lg">{texts.graph.text1}</p>
                <div className="flex items-center justify-between w-[80px]">
                  <div className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center mr-2 rounded-md w-[20px] h-[20px]">
                    <Image
                      src={InfoIcon}
                      alt="dashboard update icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center mr-2 rounded-md w-[20px] h-[20px]">
                    <Image
                      src={UpdateIcon}
                      alt="dashboard update icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center mr-2 rounded-md w-[20px] h-[20px]">
                    <DotsVerticalIcon />
                  </div>
                </div>
              </span>
              <p className="text-sm text-[#72777B]">{currentTabVal}</p>
            </div>
            <Tabs data={tabData} getVal={getVal} />
          </div>
        </div>

        <div className="text-black w-[100%] md:w-[30%] px-2 py-4 md:px-0 md:py-0 my-4">
          <div className="flex flex-col items-center bg-black rounded-[5px] text-white w-full px-5 py-10">
            <span className="mb-5">
              <Image src={PredictorIcon} alt="client attendance predictor" />
            </span>

            <p className="font-bold text-center">{texts.predictor.text1}</p>
            <p className="text-sm mb-4">{texts.predictor.text2}</p>
            <button
              className={`${pacifico.className} bg-[#75A1FF] rounded-[40px] px-3 py-2`}
            >
              {texts.predictor.text3}
            </button>
          </div>

          <div className="text-black my-6 bg-white rounded-[5px] py-4">
            <div className="rounded-[5px]">
              <span className="flex items-center justify-between px-2">
                <p>{texts.devices.text1}</p>

                <span className="flex items-center">
                  <div className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center mr-2 rounded-md w-[20px] h-[20px]">
                    <Image
                      src={UpdateIcon}
                      alt="dashboard update icon"
                      width={15}
                      height={15}
                    />
                  </div>

                  <div className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-md w-[20px] h-[20px]">
                    <Image
                      src={InfoIcon}
                      alt="dashboard info icon"
                      width={15}
                      height={15}
                    />
                  </div>
                </span>
              </span>

              <p className="text-[12px] text-[#72777B] px-2">
                {texts.devices.text2}
              </p>

              <div className="border-1 border-black-200 w-full rounded-[5px]">
                <div className="w-full my-4">
                  <Image
                    src={BgImage}
                    alt="dashboard card background image"
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between items-start">
                  <span className="px-2">
                    <p className="font-semibold">{texts.devices.text3}</p>

                    <p className="text-[#72777B] text-sm">
                      {texts.devices.text4}
                    </p>
                  </span>

                  <button className="flex items-center min-w-[100px] justify-center px-1 py-2 text-white bg-[#4AD79B] text-sm rounded-[5px] ">
                    <p>view all</p> <DoubleArrowRightIcon className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-full bg-white mb-1 rounded-t-[5px]">
              <span className="flex justify-between items-start p-2">
                <p className="font-semibold">{texts.steps.text1}</p>
                <div className="flex items-center justify-between w-[70px]">
                  <div className="bg-[#F7F8F9] rounded-[5px] text-[#64748b] cursor-pointer flex items-center justify-center rounded-md w-[20px] h-[20px]">
                    <ChevronLeftIcon />
                  </div>
                  <div className="bg-[#F7F8F9] rounded-[5px] text-[#64748b] cursor-pointer flex items-center justify-center rounded-md w-[20px] h-[20px]">
                    <ChevronRightIcon />
                  </div>
                  <div className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-md w-[20px] h-[20px]">
                    <Image
                      src={InfoIcon}
                      alt="dashboard info icon"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              </span>

              <p className="text-[12px] text-[#72777B] px-2">
                {texts.steps.text2}
              </p>
            </div>

            <div className="bg-white rounded-[5px] py-4 px-2">
              <div className="text-black flex justify-between items-center">
                <p className="font-semibold">{texts.steps.text3}</p>
                <span className="flex text-[#0D027D] bg-[#E8E6FE] rounded-[5px] w-[25px] h-[25px] justify-center items-center">
                  <Image
                    src={BarChartAltIcon}
                    alt="dashboard card bar chart icon"
                    width={18}
                    height={18}
                    className="text-[#0D027D]"
                  />
                </span>
              </div>

              <div>
                <p className="font-bold text-lg">{texts.steps.text4}</p>
                <p className="text-[12px] text-[#72777B]">
                  {texts.steps.text5}
                </p>
              </div>

              <div className="flex ">
                <DoughnutChart data={doughnutChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
