import { Outlet } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import RightSideBar from "../RightSideBar/RightSideBar";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);

  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  return (
    <section
      className={`min-h-screen w-full font-Inter scroll-smooth grid grid-cols-12 items-start animate-fade ${
        theme ? "bg-[#1C1C1C]" : "bg-[#FFFFFF]"
      }`}
    >
      {/* LEFT SIDEBAR */}
      {showLeft && <LeftSideBar />}

      <div
        className={`
    col-span-12
    ${
      showLeft && showRight
        ? "xl:col-span-8"
        : showLeft || showRight
        ? "xl:col-span-10"
        : "xl:col-span-12"
    }
    border-x-[1px] ${theme ? "border-x-[#FFFFFF33]" : "border-x-[#1C1C1C1A]"}
    min-h-screen
  `}
      >
        {/* Pass toggle handlers into Header */}
        <Header
          onToggleLeft={() => setShowLeft((p) => !p)}
          onToggleRight={() => setShowRight((p) => !p)}
        />
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      {showRight && <RightSideBar />}

      <ToastContainer />
    </section>
  );
};

export default Layout;
