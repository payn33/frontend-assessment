import Image from "next/image";
import navLogo from "@/public/navLogo.svg";

const texts = "Livwell";

interface Props {
  close: boolean;
}

export default function Logo({ close }: Props) {
  return (
    <div className="flex items-center">
      <Image src={navLogo} alt="livwell logo" />
      {!close && (
        <p className="text-[#00d1cf] font-black text-2xl pl-1">{texts}</p>
      )}
    </div>
  );
}
