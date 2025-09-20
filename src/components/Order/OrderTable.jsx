import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PiSquareLight,
  PiDotsThreeBold,
  PiCalendarBlank,
  PiClipboardText,
} from "react-icons/pi";
import { ordersList } from "../../utils/data";
import { GoDotFill } from "react-icons/go";
import { MdCheckBox } from "react-icons/md";
import { toast } from "react-toastify";

const OrderTable = ({
  searchedOrder,
  isSortByStatus,
  currentPage,
  setCurrentPage = () => {},
}) => {
  const theme = useSelector((state) => state.theme.theme);
  const [state, setState] = useState({
    checkedIDs: [],
    isAllChecked: false,
  });
  const [ordersData, setOrdersData] = useState(ordersList);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const itemsPerPage = 10;
  const totalPages = 5;

  const statusColor = {
    "In Progress": "#8A8CD9",
    Complete: "#4AA785",
    Pending: "#59A8D4",
    Approved: "#FFC555",
    Rejected: theme ? "#FFFFFF66" : "#1C1C1C66",
  };

  useEffect(() => {
    const visibleIDs = filteredOrders?.map((order) => order?.id);
    const areAllVisibleChecked =
      visibleIDs?.length > 0 &&
      visibleIDs?.every((id) => state?.checkedIDs?.includes(id));

    setState((prev) => ({
      ...prev,
      isAllChecked: areAllVisibleChecked,
    }));
  }, [filteredOrders, state?.checkedIDs]);

  const handleToggleAll = () => {
    const visibleIDs = filteredOrders?.map((order) => order?.id);
    const isAllSelected = visibleIDs?.every((id) =>
      state?.checkedIDs?.includes(id)
    );

    const updatedChecked = isAllSelected
      ? state?.checkedIDs?.filter((id) => !visibleIDs?.includes(id))
      : Array.from(new Set([...state?.checkedIDs, ...visibleIDs]));

    setState((prev) => ({
      ...prev,
      checkedIDs: updatedChecked,
    }));
  };

  const handleToggleSingle = (id) => {
    const updatedChecked = state?.checkedIDs?.includes(id)
      ? state?.checkedIDs?.filter((item) => item !== id)
      : [...state?.checkedIDs, id];

    setState((prev) => ({
      ...prev,
      checkedIDs: updatedChecked,
    }));
  };

  const handleCopyAddress = (a) => {
    navigator.clipboard.writeText(a);
    toast.success("Address Copied.");
  };

  useEffect(() => {
    const statusPriority = {
      Approved: 1,
      Pending: 2,
      "In Progress": 3,
      Complete: 4,
      Rejected: 5,
    };

    if (!searchedOrder) {
      if (isSortByStatus) {
        const sorted = [...ordersData]?.sort((a, b) => {
          return statusPriority[a.status] - statusPriority[b.status];
        });
        const sliced = [...sorted]?.slice(0, totalPages * itemsPerPage);

        const paginated = sliced?.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setFilteredOrders(paginated);
      } else {
        const sliced = [...ordersData]?.slice(0, totalPages * itemsPerPage);

        const paginated = sliced?.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setFilteredOrders(paginated);
      }
    } else {
      const filtered = ordersData?.filter(
        (order) =>
          order?.name?.toLowerCase().includes(searchedOrder.toLowerCase()) ||
          order?.project?.toLowerCase().includes(searchedOrder.toLowerCase()) ||
          order?.address?.toLowerCase().includes(searchedOrder.toLowerCase()) ||
          order?.status?.toLowerCase().includes(searchedOrder.toLowerCase())
      );
      if (isSortByStatus) {
        const sorted = filtered?.sort((a, b) => {
          return statusPriority[a.status] - statusPriority[b.status];
        });
        const sliced = [...sorted]?.slice(0, totalPages * itemsPerPage);

        const paginated = sliced?.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setFilteredOrders(paginated);
      } else {
        const sliced = [...filtered]?.slice(0, totalPages * itemsPerPage);

        const paginated = sliced?.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setFilteredOrders(paginated);
      }
    }
  }, [searchedOrder, ordersData, isSortByStatus, currentPage]);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead>
          <tr
            className={`border-b-[1px] p-3 ${
              theme ? "border-b-[#FFFFFF66]" : "border-b-[#1C1C1C33]"
            }`}
          >
            <th
              scope="col"
              className={`px-2 py-2 text-start font-normal ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              } text-xs`}
            >
              {state?.isAllChecked ? (
                <MdCheckBox
                  size={14}
                  className={`${
                    theme ? "text-[#C6C7F8]" : "text-[#1C1C1C]"
                  } cursor-pointer`}
                  onClick={handleToggleAll}
                />
              ) : (
                <PiSquareLight
                  size={14}
                  className={`${
                    theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C33]"
                  } cursor-pointer`}
                  onClick={handleToggleAll}
                />
              )}
            </th>
            <th
              scope="col"
              className={`pr-6 py-2 text-start font-normal text-xs ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              }`}
            >
              Order ID
            </th>
            <th
              scope="col"
              className={`px-6 py-2  text-start font-normal text-xs ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              }`}
            >
              User
            </th>
            <th
              scope="col"
              className={`px-6 py-2  text-start font-normal text-xs ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              }`}
            >
              Project
            </th>
            <th
              scope="col"
              className={`px-6 py-2  text-start font-normal text-xs ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              }`}
            >
              Address
            </th>
            <th
              scope="col"
              className={`px-6 py-2  text-start font-normal text-xs ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              }`}
            >
              Date
            </th>
            <th
              scope="col"
              className={`px-6 py-2  text-start font-normal text-xs ${
                theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
              }`}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders?.map((order, index) => {
            const isChecked = state?.checkedIDs?.includes(order?.id);
            return (
              <tr
                key={index}
                className={`group border-b-[1px] ${
                  theme
                    ? "border-b-[#FFFFFF0D] hover:bg-[#FFFFFF0D]"
                    : "border-b-[#F7F9FB] hover:bg-[#F7F9FB]"
                }`}
              >
                <th
                  scope="col"
                  className={`px-2 py-2  text-start font-normal text-xs ${
                    theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                  }`}
                >
                  {isChecked ? (
                    <MdCheckBox
                      size={14}
                      className={`${
                        theme ? "text-[#C6C7F8]" : "text-[#1C1C1C]"
                      } cursor-pointer`}
                      onClick={() => handleToggleSingle(order?.id)}
                    />
                  ) : (
                    <PiSquareLight
                      size={14}
                      className={`${
                        theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C33]"
                      } cursor-pointer`}
                      onClick={() => handleToggleSingle(order?.id)}
                    />
                  )}
                </th>
                <td
                  className={`pr-6 py-2 text-start font-normal text-xs ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  {order?.id}
                </td>
                <td
                  className={`px-6 py-2 text-start font-normal text-xs flex items-center gap-2 ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  <img
                    src={order?.image}
                    alt=""
                    className="w-[24px] h-[24px] rounded-full object-cover"
                  />
                  <p className="text-xs  whitespace-nowrap">{order?.name}</p>
                </td>
                <td
                  className={`px-6 py-2 text-start font-normal text-xs whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  {order?.project}
                </td>
                <td
                  className={`px-6 py-2 text-start font-normal text-xs relative whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <p className="text-xs whitespace-nowrap">
                      {order?.address}
                    </p>
                    <PiClipboardText
                      size={24}
                      className={`p-1 invisible group-hover:visible rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
                        theme
                          ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                          : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
                      }`}
                      onClick={() => handleCopyAddress(order?.address)}
                    />
                  </div>
                </td>
                <td
                  className={`px-6 py-2 text-start font-normal text-xs relative whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <PiCalendarBlank
                      size={14}
                      className={`${
                        theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                      }`}
                    />
                    <p className="text-xs whitespace-nowrap">{order?.date}</p>
                  </div>
                </td>
                <td
                  className={`pl-6 py-2 text-start font-normal text-xs whitespace-nowrap`}
                  style={{ color: statusColor[order?.status] }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <GoDotFill size={14} />
                      <p className="text-xs whitespace-nowrap line-clamp-1">
                        {order?.status}
                      </p>
                    </div>
                    <PiDotsThreeBold
                      size={24}
                      strokeWidth={1.5}
                      className={`m-0 md:mx-2 invisible group-hover:visible p-1 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out ${
                        theme
                          ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                          : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
                      }`}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
