import React from "react";
import "./QuestionSection.css";

const QuestionsSection = () => {
  const items = [
    {
      label: "Security?",
    },
    {
      label: "Benefits?",
    },
    {
      label: "Tracebility?",
    },
    {
      label: "Interoperability?",
    },
  ];
  return (
    <div className="mt-[130px]">
      <h4 className="text-[6vw] text-right font-medium leading-[140px] px-[10%]">
        Your Guide to <br />
        Common Queries <br /> and{" "}
        <span className="gradient-text-4">Solutions</span>
      </h4>
      <div className="questions text-[4vw] border-t border-gray-500 mt-2">
        {items.map((item) => {
          return (
            <div
              key={item.label}
              className="question border-b border-gray-500 cursor-pointer px-[5%]"
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsSection;
