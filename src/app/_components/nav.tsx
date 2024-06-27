import Image from "next/image";
import navProfileImage from "@/public/navProfileImage.png";
import bell from "@/public/bell.svg";
import moon from "@/public/moon.svg";
import { ChevronDownIcon, DotsVerticalIcon } from "@radix-ui/react-icons";

const texts = {
  name: "Ronald Richards",
  role: "Instructor",
};

export default function Nav() {
  return (
    <div className="flex justify-end w-full bg-white px-5 py-4 text-black shadow-sm">
      <div className="flex justify-between">
        <span className="flex items-baseline">
          <Image src={navProfileImage} alt="nav profile image />" />
          <ChevronDownIcon
            className="text-black"
            width={20}
            height={20}
          />
        </span>

        <div className="flex flex-col px-3">
          <p className="font-semibold">{texts.name}</p>
          <p className="text-[#747474]">{texts.role}</p>
        </div>

        <div className="flex items-center md:w-[120px] justify-between">
          <Image
            src={bell}
            alt="notification bell"
            className="cursor-pointer hidden md:inline"
          />
          <Image src={moon} alt="theme switcher" className="cursor-pointer hidden md:inline" />
          <DotsVerticalIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
