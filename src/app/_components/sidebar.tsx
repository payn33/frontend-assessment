"use client";
import { useEffect, useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import { ChevronLeftIcon, DashboardIcon } from "@radix-ui/react-icons";
import LibraryIcon from "@/public/libraryIcon.svg";
import ClientManagementIcon from "@/public/clientManagementIcon.svg";
import { usePathname } from "next/navigation";

const texts = {
  nav: [
    {
      icon: <DashboardIcon width={20} height={20} />,
      alt: "dashboard icon",
      text: "Dashboard",
      path: "/",
    },
    {
      icon: LibraryIcon,
      alt: "library icon",
      text: "Library",
      path: "library",
    },
    {
      icon: ClientManagementIcon,
      alt: "client management icon",
      text: "Client Management",
      path: "management",
    },
  ],
};

interface Props {
  close: boolean;
  handleClose: (val?: boolean) => void;
}

export default function Sidebar({ close, handleClose }: Props) {
  const currentPath = usePathname();

  useEffect(() => {
    // const handleResize = (e) => {
    //   console.log
    //   // handleClose();
    // };
    // // Add event listener on component mount
    // window.addEventListener("resize", handleResize);
    // // Cleanup function to remove listener on component unmount
    // return () => window.removeEventListener("resize", handleResize);

    if (window) {
      const { innerWidth } = window;

      if (innerWidth <= 950) handleClose(false);
    }
  }, []);

  return (
    <div
      className={`max-w-[300px] md:max-w-[270px] z-50 ${
        close ? "w-[70px]" : "w-[75%] md:w-1/4"
      } fixed h-full top-0 pt-7 pl-5 pr-7 bg-white transition-all duration-100 ease-out`}
    >
      <Logo close={close} />

      <div
        className={`flex absolute right-[-25px] bg-white items-center justify-center w-[50px] h-[50px] border rounded-[25px] cursor-pointer`}
        onClick={() => handleClose()}
      >
        <ChevronLeftIcon
          className={`text-black ${close && "rotate-180"}`}
          width={20}
          height={20}
        />
      </div>

      <div className={`flex flex-col mt-[130px] min-w-[50px]`}>
        {texts.nav.map((ctx, idx) => (
          <div
            key={idx}
            className={`flex items-center cursor-pointer p-2 mb-3 ${
              ctx.path === currentPath && "bg-[#00d1cf] rounded-md"
            }
              ${close && "w-fit"}`}
          >
            {ctx.alt === "dashboard icon" ? (
              ctx.icon
            ) : (
              <Image src={ctx.icon} alt={ctx.alt} />
            )}
            {!close && (
              <p
                className={`font-bold text-black pl-2 ${
                  ctx.path === currentPath && "text-white"
                }`}
              >
                {ctx.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
