import { logo, wave } from "@/app/assets";
import Image from "next/image";
import React from "react";
import { PiHandWavingThin } from "react-icons/pi";

const Navbar = () => {
  const items = [
    {
      label: "Services",
    },
    {
      label: "Features",
    },
    {
      label: "FAQ",
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-screen h-[50px] flex justify-between items-center px-10">
      <div className="main text-2xl font-semibold gradient-text flex items-center gap-3">
        <Image src={logo} alt="litchain" width={25} height={25} />
        LITCHAIN
      </div>
      <div className="items">
        <ul className="flex gap-14 text-xl">
          {items.map((item) => {
            return <li key={item.label}>{item.label}</li>;
          })}
        </ul>
      </div>
      <div className="right cursor-pointer">
        <Image src={wave} alt="litchain" width={40} height={40} />
      </div>
    </div>
  );
};

export default Navbar;
