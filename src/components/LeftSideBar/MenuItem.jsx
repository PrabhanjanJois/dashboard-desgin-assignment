import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

const MenuItem = ({ page, index }) => {
  const theme = useSelector((state) => state.theme.theme);
  const [state, setState] = useState({
    isOpen: false,
  });
  const [openIndex, setOpenIndex] = useState(null);

  const togglePages = (index) => {
    setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div key={index} className="mb-1">
      <div
        className={`${
          theme ? "hover:bg-[#FFFFFF1A]" : "hover:bg-[#1C1C1C0D]"
        } group relative flex items-center py-[2px] rounded-[8px] cursor-pointer mb-1 transition-transform hover:scale-105 duration-500 ease-in-out`}
        onClick={() => page?.children?.length !== 0 && togglePages(index)}
      >
        <div className="flex items-center pl-4">
          {page?.children &&
            (state?.isOpen && openIndex === index ? (
              <LiaAngleDownSolid
                size={14}
                className={`text-sm ${
                  theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"
                }`}
              />
            ) : (
              <LiaAngleRightSolid
                size={14}
                className={`${theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"}`}
              />
            ))}
          <p
            className={`text-sm font-normal pl-1 ${
              theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
            }`}
          >
            <page.icon size={16} className="inline-block mr-2" />
            {page?.name}
          </p>
        </div>
      </div>
      {page?.children?.length !== 0 && openIndex === index && (
        <div className={`pl-8`}>
          {page?.children?.map((page, i) => (
            <div className="mb-1" key={i}>
              <div
                className={`${
                  theme ? "hover:bg-[#FFFFFF1A]" : "hover:bg-[#1C1C1C0D]"
                } group relative flex items-center py-[2px] rounded-[8px] cursor-pointer mb-1 transition-transform hover:scale-105 duration-500 ease-in-out`}
              >
                <div className="flex items-center pl-4">
                  <p
                    className={`text-sm font-normal pl-1 ${
                      theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                    }`}
                  >
                    {page?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
