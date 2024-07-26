import React from "react";

const HeaderSection = () => {
  return (
    <div className="px-[9%]">
      <div className="flex justify-center">
        <p className="text-[15vw] text-center gradient-text-2 w-[fit-content] m-0 p-0">
          Blockchain
        </p>
      </div>
      <div className="flex justify-end">
        <p className="w-1/2 text-left gradient-text-3 text-lg tracking-wide">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          tempora esse, voluptatem doloribus delectus totam suscipit deleniti
          maxime error similique?
        </p>
      </div>
      <div className="flex justify-end">
        <p className="text-[10vw] text-center gradient-text-3 w-[fit-content] m-0 p-0">
          Network
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
