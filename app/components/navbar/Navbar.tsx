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
      <div className="main text-2xl font-semibold gradient-text">LITCHAIN</div>
      <div className="items">
        <ul className="flex gap-14 text-xl">
          {items.map((item) => {
            return <li key={item.label}>{item.label}</li>;
          })}
        </ul>
      </div>
      <div className="right w-[40px] h-[40px] border flex items-center justify-center rounded-full">
        <PiHandWavingThin size={30} className="gradient-text" />
      </div>
    </div>
  );
};

export default Navbar;
