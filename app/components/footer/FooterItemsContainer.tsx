import React from "react";

interface Props {
  title: string;
  items: string[];
}

const FooterItemsContainer: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="text-2xl font-normal select-none">
      <h3 className="mb-5 text-gray-500">{title}</h3>
      <ul>
        <li></li>
        {items.map((item) => {
          return (
            <li key={item} className="mb-2 cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItemsContainer;
