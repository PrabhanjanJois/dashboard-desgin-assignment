import React from "react";
import { useSelector } from "react-redux";
import worldMap from "../../assets/world-map.svg";
import worldMapDark from "../../assets/world-map-dark.svg";
import { revenueLocations } from "../../utils/data";

const RevenueLocation = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`col-span-full md:col-span-1 ${
        theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
      } rounded-2xl p-5 h-full animate-fade`}
    >
      <h6 className={`text-sm font-semibold ${theme && "text-[#FFFFFF]"}`}>
        Revenue by Location
      </h6>
      <div>
        <div className="w-full  rounded-md mx-auto my-2">
          <div className="w-full  rounded-md mx-auto my-2">
            <img
              src={theme ? worldMapDark : worldMap}
              alt=""
              className="w-full"
            />
          </div>
        </div>
        {revenueLocations?.map((item, i) => (
          <div key={i} className="pt-4 pb-1 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p
                  className={`text-xs font-normal ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  {item?.place}
                </p>
              </div>
              <p
                className={`text-xs font-normal ${
                  theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                }`}
              >
                {item?.revenue}K
              </p>
            </div>
            <div className="absolute bottom-0 w-full">
              <div
                className={`h-[2px] rounded-full ${
                  theme ? "bg-[#FFFFFF66]" : "bg-[#E5ECF6]"
                }`}
              >
                <div
                  className="h-full rounded-full bg-[#A8C5DA]"
                  style={{ width: `${item?.revenue}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueLocation;
