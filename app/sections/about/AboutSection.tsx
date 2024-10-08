import { underline } from "@/app/assets";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="px-[10%] mt-[150px]">
      <p className="text-9xl text-center text-slate-50">
        Learn about our services
      </p>
      <div className="w-fit mx-auto mt-5">
        <Image src={underline} alt="underline" width={600} />
      </div>
      <p className="text-6xl text-center mt-8 leading-[80px] px-[100px] gradient-text-4 w-[fit-content]">
        LITCHAIN empowering transactions with blockchain technology. <br />{" "}
        Secure, transparent, and efficient. <br />
        Join us for the future of trust and decentralization.
      </p>
    </div>
  );
};

export default AboutSection;
