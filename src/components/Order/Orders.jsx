import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiPlus, PiFunnelSimple, PiArrowsDownUp } from "react-icons/pi";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import OrderTable from "./OrderTable";

const Orders = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [state, setState] = useState({
    searchedOrder: "",
    isSortByStatus: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handleSearchedOrder = (e) =>
    setState((prev) => ({ ...prev, searchedOrder: e.target.value }));

  const handleSortByStatus = () =>
    setState((prev) => ({ ...prev, isSortByStatus: !prev.isSortByStatus }));

  return (
    <div className="grid gap-y-5 p-4 animate-fade">
      <h2
        className={`text-sm font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Order List
      </h2>

      {/* Toolbar */}
      <div
        className={`${
          theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
        } flex flex-col md:flex-row items-center justify-between p-2 rounded-lg gap-3`}
      >
        <div className="flex items-center gap-4">
          {[PiPlus, PiFunnelSimple, PiArrowsDownUp].map((Icon, idx) => (
            <Icon
              key={idx}
              size={24}
              strokeWidth={1.5}
              className={`${
                theme
                  ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                  : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
              } p-1 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out`}
              onClick={idx === 2 ? handleSortByStatus : undefined}
            />
          ))}
        </div>

        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-lg border-[1px] ${
            theme
              ? "bg-[#1C1C1C66] border-[#FFFFFF33]"
              : "bg-[#FFFFFF] border-[#1C1C1C1A]"
          }`}
        >
          <CiSearch
            size={20}
            className={`${theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"}`}
          />
          <input
            type="text"
            value={state.searchedOrder}
            placeholder="Search"
            onChange={handleSearchedOrder}
            className={`border-none outline-none bg-transparent w-[100px] text-xs
              ${
                theme
                  ? "text-[#FFFFFF33] placeholder:text-[#FFFFFF33]"
                  : "text-[#1C1C1C33] placeholder:text-[#1C1C1C33]"
              }`}
          />
        </div>
      </div>

      {/* Table */}
      <OrderTable
        searchedOrder={state.searchedOrder}
        isSortByStatus={state.isSortByStatus}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Pagination */}
      <div className="flex items-center gap-2 justify-center md:justify-end mt-2">
        <LiaAngleLeftSolid
          size={24}
          strokeWidth={1.5}
          className={`${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : `cursor-pointer ${
                  theme ? "hover:bg-[#FFFFFF1A]" : "hover:bg-[#1C1C1C0D]"
                }`
          } p-1 rounded-md transition-transform hover:scale-105 duration-500 ease-in-out ${
            theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        />
        {[...Array(totalPages)].map((_, i) => (
          <p
            key={i}
            className={`cursor-pointer text-sm font-normal w-[24px] h-[24px] rounded-md flex items-center justify-center transition-transform hover:scale-105 duration-500 ease-in-out ${
              currentPage === i + 1
                ? theme
                  ? "bg-[#FFFFFF1A]"
                  : "bg-[#1C1C1C0D]"
                : ""
            } ${
              theme
                ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </p>
        ))}
        <LiaAngleRightSolid
          size={24}
          strokeWidth={1.5}
          className={`${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : `cursor-pointer ${
                  theme ? "hover:bg-[#FFFFFF1A]" : "hover:bg-[#1C1C1C0D]"
                }`
          } p-1 rounded-md transition-transform hover:scale-105 duration-500 ease-in-out ${
            theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        />
      </div>
    </div>
  );
};

export default Orders;
