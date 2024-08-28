import { smile } from "@/app/assets";
import Image from "next/image";
import React from "react";

const EmpoweredBySection = () => {
  const items = [
    {
      title: "Decentralize",
      number: 1,
      desc: "Empower transactions. Direct Secure, and trustless.",
      subDesc: "Lorem, ipsum dolor.",
    },
    {
      title: "Immutable",
      number: 1,
      desc: "Empower transactions. Direct Secure, and trustless.",
      subDesc: "Lorem, ipsum dolor.",
    },
    {
      title: "Smartify",
      number: 10,
      desc: "Empower transactions. Direct Secure, and trustless.",
      subDesc: "Lorem, ipsum dolor.",
    },
    {
      title: "Tokenize",
      number: 6.1,
      desc: "Empower transactions. Direct Secure, and trustless.",
      subDesc: "Lorem, ipsum dolor.",
    },
    {
      title: "Secure",
      number: 3,
      desc: "Empower transactions. Direct Secure, and trustless.",
      subDesc: "Lorem, ipsum dolor.",
    },
    {
      title: "Interconnect",
      number: 10,
      desc: "Empower transactions. Direct Secure, and trustless.",
      subDesc: "Lorem, ipsum dolor.",
    },
  ];
  return (
    <div className="px-[10%] mt-[150px]">
      <div className="text-8xl">
        <p>Blockchain</p>
        <div className="relative w-fit">
          <p className="gradient-text-4 w-[fit-content] relative">
            Empowered by
          </p>
          <div className="w-fit mx-auto mt-5 absolute right-[88px] -top-[100px]">
            <Image src={smile} alt="underline" width={105} />
          </div>
        </div>
      </div>
      <div className="cards grid grid-cols-3 gap-[50px] mt-10">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              className={`bg-gradient p-10 px-10 rounded-3xl text-center text-black flex flex-col justify-center items-center`}
            >
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <p className="text-[200px] relative w-fit h-fit font-bold">
                {item.number}
                <span className="text-3xl absolute -right-[30px] top-[50px] ">
                  M
                </span>
              </p>
              <span className="text-lg font-semibold -mt-[50px]">
                {item.subDesc}
              </span>

              <p className="text-3xl font-bold mt-5">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmpoweredBySection;
