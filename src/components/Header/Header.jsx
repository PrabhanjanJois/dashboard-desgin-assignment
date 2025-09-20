import React, { useState } from "react";
import { GoSun } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import {
  PiSidebarLight,
  PiStarLight,
  PiSun,
  PiClockCounterClockwiseLight,
  PiBellLight,
} from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import DashboardRouter from "./DashboardRouter";
import userProfile from "../../assets/userProfile.png";
import { Tooltip } from "antd";

const Header = ({ onToggleLeft, onToggleRight }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    searchInput: "",
  });

  const handleSearchInput = (e) => {
    setState((prev) => {
      return {
        ...prev,
        searchInput: e.target.value,
      };
    });
  };

  return (
    <div
      className={`flex items-center justify-between border-b-[1px] ${
        theme
          ? "border-b-[#FFFFFF33] bg-[#1C1C1C]"
          : "border-b-[#1C1C1C1A] bg-[#FFFFFF]"
      } p-4 z-10 transition-transform duration-500`}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <figure className="flex items-center lg:hidden">
          <img
            src={userProfile}
            alt=""
            className="flex w-[20px] h-[20px] rounded-full object-cover"
          />
          <h1
            className={`text-sm font-normal ps-2 ${theme && "text-[#FFFFFF]"}`}
          >
            Jois Prabhanjan
          </h1>
        </figure>
        <Tooltip title="Toggle Left Sidebar" placement="bottom">
          <PiSidebarLight
            size={24}
            strokeWidth={1.5}
            onClick={onToggleLeft}
            className={`hidden md:flex p-0.5 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
              theme
                ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
            }`}
          />
        </Tooltip>
        <PiStarLight
          size={24}
          strokeWidth={1.5}
          className={`hidden md:flex p-0.5 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
            theme
              ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
              : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
          }`}
        />
        <DashboardRouter />
      </div>

      <div className="md:flex items-center gap-2 md:gap-4">
        <div
          className={`hidden md:flex flex items-center ${
            theme ? "bg-[#FFFFFF1A]" : "bg-[#1C1C1C0D]"
          } gap-1 px-2 py-1 rounded-lg`}
        >
          <CiSearch
            size={20}
            className={`${theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"}`}
          />
          <input
            type="text"
            value={state.searchInput}
            placeholder="Search"
            onChange={(e) => handleSearchInput(e)}
            className={`border-none outline-none bg-transparent w-[100px] text-xs
              ${
                theme
                  ? "text-[#FFFFFF33] placeholder:text-[#FFFFFF33]"
                  : "text-[#1C1C1C33] placeholder:text-[#1C1C1C33]"
              }`}
          />
          <p
            className={`${
              theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"
            } border-none outline-none bg-transparent text-xs`}
          >
            ⌘/
          </p>
        </div>
        <PiSun
          onClick={() => dispatch(toggleTheme())}
          size={24}
          strokeWidth={1.5}
          className={`p-0.5 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
            theme
              ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
              : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
          }`}
        />
        <PiClockCounterClockwiseLight
          size={24}
          strokeWidth={1.5}
          className={`hidden md:flex p-0.5 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
            theme
              ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
              : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
          }`}
        />
        <PiBellLight
          size={24}
          strokeWidth={1.5}
          className={`hidden md:flex p-0.5 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
            theme
              ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
              : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
          }`}
        />
        <Tooltip title="Toggle Right Sidebar" placement="bottom">
          <PiSidebarLight
            size={24}
            strokeWidth={1.5}
            onClick={onToggleRight}
            className={`hidden md:flex p-0.5 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
              theme
                ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
            }`}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
