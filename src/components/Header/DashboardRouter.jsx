import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardRouter = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();
  const currentPath = location.pathname
    ?.split("/")
    .filter((path) => path !== "");

  return (
    <>
      <div className="hidden md:flex items-center gap-3">
        <p
          onClick={() => navigate("/")}
          className={`cursor-pointer rounded-md p-0.5 text-sm ${
            theme
              ? "text-[#FFFFFF66] hover:bg-[#FFFFFF1A]"
              : "text-[#1C1C1C66] hover:bg-[#1C1C1C0D]"
          }`}
        >
          Dashboards
        </p>
        <p
          className={`text-sm  ${
            theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C66]"
          }`}
        >
          /
        </p>
        <p
          className={`text-sm rounded-md p-0.5 capitalize line-clamp-1 ${
            theme
              ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
              : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
          }`}
        >
          {currentPath[0] || "Default"}
        </p>
      </div>
      <div className="flex md:hidden items-center gap-2">
        <p
          className={`cursor-pointer text-xs rounded-full px-2 py-1 ${
            currentPath[0] === undefined ? "bg-[#a8c5da]" : "bg-[#cfdfea]"
          }`}
          onClick={() => navigate("/")}
        >
          Dashboards
        </p>
        <p
          className={`cursor-pointer text-xs rounded-full px-2 py-1 ${
            currentPath[0] === "orders" ? "bg-[#a8c5da]" : "bg-[#cfdfea]"
          }`}
          onClick={() => navigate("/orders")}
        >
          Order List
        </p>
      </div>
    </>
  );
};

export default DashboardRouter;
