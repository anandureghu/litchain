import React from "react";
import FooterItemsContainer from "./FooterItemsContainer";

const Footer = () => {
  const footerItems = [
    {
      title: "Contact us",
      items: ["picominds@gmail.com"],
    },
    {
      title: "Follow us",
      items: ["Twitter", "Facebook", "Instagram"],
    },
    {
      title: "Usefull links",
      items: ["Features", "Services", "Community"],
    },
  ];
  return (
    <div>
      <div className="border-b border-gray-500 py-[100px] px-[5%] flex items-start gap-[180px] ">
        {footerItems.map((item) => {
          return (
            <FooterItemsContainer
              key={item.title}
              title={item.title}
              items={item.items}
            />
          );
        })}
      </div>
      <div className="px-[5%] py-[30px] text-gray-500 text-center">
        made with ❤️ picominds
      </div>
    </div>
  );
};

export default Footer;
