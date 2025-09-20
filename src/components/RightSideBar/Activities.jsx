import React from "react";
import { useSelector } from "react-redux";
import { activities } from "../../utils/data";

const Activities = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="text-start">
      <div
        className={`text-sm mb-3 font-semibold pt-2 ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Activities
      </div>
      {activities?.map((activity, index) => (
        <div
          className="grid grid-cols-6 gap-2 mb-4 last:mb-0 items-start"
          key={index}
        >
          <figure className="col-span-1 flex items-center justify-center relative w-fit">
            <img
              src={activity?.image}
              alt={`user${index}`}
              className="w-[24px] h-[24px] rounded-full object-cover"
            />
            {activities?.length - 1 !== index && (
              <div
                className={`h-[14px] w-[1px] absolute top-[80%] my-3 ${
                  theme ? "bg-[#FFFFFF1A]" : "bg-[#1C1C1C1A]"
                }`}
              ></div>
            )}
          </figure>
          <div className="text-start col-span-5">
            <p
              className={`text-sm line-clamp-1 ${
                theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              {activity?.message}
            </p>
            {activity?.time && (
              <p
                className={`text-xs line-clamp-1 ${
                  theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                }`}
              >
                {activity?.time}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
