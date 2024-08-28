import { blob, explore, leftCover } from "@/app/assets";
import Image from "next/image";
import React from "react";

import Spline from "@splinetool/react-spline/next";

const HeaderSection = () => {
  return (
    <>
      <div className="px-[9%] relative">
        {/* <div className="absolute w-[300px] h-[300px] bg-[#F75BFF] bottom-[90px] left-[360px] z-[-3] opacity-30 rounded-full shadow-background" /> */}

        <div className="flex justify-center">
          <p className="text-[15vw] text-center gradient-text-2 w-[fit-content] m-0 p-0 relative">
            Blockchain
          </p>
        </div>
        <div className="flex justify-between relative">
          {/* <div className="absolute -top-[100px] left-[150px]">
            <Spline scene="https://prod.spline.design/VsJXJEq6GlL0GCCL/scene.splinecode" />
          </div> */}
          <div>
            <div className="flex justify-end">
              <Image
                src={leftCover}
                alt="svg"
                className="relative translate-x-[70%] -translate-y-[10px]"
              />
              <p className="w-1/2 text-left gradient-text-3 text-lg tracking-wide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                tempora esse, voluptatem doloribus delectus totam suscipit
                deleniti maxime error similique?
              </p>
            </div>
            <div className="flex justify-end">
              <p className="text-[10vw] text-center gradient-text-3 w-[fit-content] m-0 p-0">
                Network
              </p>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto mt-10 animate-spin-slow">
          <Image src={explore} alt="start exploring" width={150} />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
