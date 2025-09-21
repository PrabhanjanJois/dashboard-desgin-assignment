import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegIdBadge } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import {
  PiChartPieSliceLight,
  PiShoppingBagOpen,
  PiFolder,
  PiBookOpenDuotone,
  PiUsersThreeDuotone,
  PiNotebookDuotone,
  PiChatsTeardropDuotone,
  PiListBullets,
} from "react-icons/pi";
import { LiaAngleRightSolid } from "react-icons/lia";
import MenuItem from "./MenuItem";
import userProfile from "../../assets/userProfile.png";

import UserDropdown from "./UserDropdown";

const LeftSideBar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [activeTab, setActiveTab] = useState("Default");
  const navigate = useNavigate();

  let tabs = [
    {
      name: "Favorites",
      color: theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]",
    },
    {
      name: "Recently",
      color: theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]",
    },
  ];

  let items = [
    {
      name: "Overview",
    },
    {
      name: "Projects",
    },
  ];

  let dashboards = [
    { label: "Default", icon: PiChartPieSliceLight, path: "" },
    { label: "Orders", icon: PiListBullets, path: "orders" },
    { label: "eCommerce", icon: PiShoppingBagOpen, path: "ecommerce" },
    { label: "Projects", icon: PiFolder, path: "projects" },
    {
      label: "Online Courses",
      icon: PiBookOpenDuotone,
      path: "online-courses",
    },
  ];

  const pages = {
    children: [
      {
        name: "User Profile",
        icon: FaRegIdBadge,
        children: [
          {
            name: "Overview",
          },
          {
            name: "Projects",
          },
          {
            name: "Campaigns",
          },
          {
            name: "Documents",
          },
          {
            name: "Followers",
          },
        ],
      },
      {
        name: "Account",
        icon: HiOutlineIdentification,
        children: [],
      },
      {
        name: "Corporate",
        icon: PiUsersThreeDuotone,
        children: [],
      },
      {
        name: "Blog",
        icon: PiNotebookDuotone,
        children: [],
      },
      {
        name: "Social",
        icon: PiChatsTeardropDuotone,
        children: [],
      },
    ],
  };

  return (
    <section className="hidden md:col-span-2 py-5 px-4 xl:grid gap-y-4 animate-fade">
      <UserDropdown userProfile={userProfile} theme={theme} />
      <div className="">
        <div className="flex items-center gap-2">
          {tabs?.map((d, i) => (
            <p
              key={i}
              data-testid={`tab-${d.name}`}
              className={`flex justify-center text-sm font-normal ${d.color} cursor-pointer hover:bg-[#1C1C1C0D] rounded-lg p-1 px-2`}
            >
              {d.name}
            </p>
          ))}
        </div>
        <div className="">
          {items?.map((d, i) => (
            <div key={i} className="flex items-center p-1 px-2  cursor-pointer">
              <div
                className={`w-[5px] h-[5px] rounded-full ${
                  theme ? "bg-[#FFFFFF66]" : "bg-[#1C1C1C33]"
                }`}
              ></div>
              <p
                className={`flex justify-center text-sm font-normal pl-2 ${
                  theme ? "text-[#FFFFFF]" : "[#1C1C1C]"
                }`}
              >
                {d.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h6
          className={`text-sm font-normal px-2 mb-1 ${
            theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
          }`}
        >
          Dashboards
        </h6>
        <>
          {dashboards?.map((d, i) => (
            <div
              key={i}
              data-testid={`dashboard-${d.label}`}
              onClick={() => {
                setActiveTab(d.label);
                navigate(`/${d.path}`);
              }}
              className={`${
                theme ? "hover:bg-[#FFFFFF1A]" : "hover:bg-[#1C1C1C0D]"
              } ${
                activeTab === d.label
                  ? theme
                    ? "active-tab-dark"
                    : "active-tab"
                  : ""
              } group relative flex items-center py-[2px] rounded-[8px] cursor-pointer mb-1 transition-transform hover:scale-105 duration-500 ease-in-out`}
            >
              <div className="flex items-center pl-4">
                <LiaAngleRightSolid
                  className={`text-sm ${
                    theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"
                  } ${d?.label === activeTab ? "invisible" : ""}`}
                />
                <p
                  className={`text-sm font-normal pl-1 ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  <d.icon size={16} className="inline-block mr-2" />
                  {d?.label}
                </p>
              </div>
            </div>
          ))}
        </>
      </div>
      <div>
        <h6
          className={`text-sm font-normal px-2 mb-1 ${
            theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
          }`}
        >
          Pages
        </h6>
        <div>
          {pages?.children?.map((page, index) => (
            <MenuItem
              key={index}
              page={page}
              index={index}
              data-testid={`page-${page.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
