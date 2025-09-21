import React from "react";
import { PiStarLight, PiStarFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleStar } from "../../store/starredPagesSlice";

const PageStar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const starredPages = useSelector((state) => state.starredPages);

  const currentPage = location.pathname;
  const isFilled = starredPages[currentPage];

  const handleToggle = () => {
    dispatch(toggleStar(currentPage));
  };

  return (
    <Tooltip title={isFilled ? "Unfavorite" : "Favorite"} placement="left">
      <div
        onClick={handleToggle}
        className="cursor-pointer inline-block"
        data-testid="page-star"
      >
        {isFilled ? (
          <PiStarFill
            size={24}
            strokeWidth={1.5}
            className="text-yellow-400 p-0.5 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-125"
          />
        ) : (
          <PiStarLight
            size={24}
            strokeWidth={1.5}
            className="p-0.5 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-125 text-gray-500 hover:text-gray-400"
          />
        )}
      </div>
    </Tooltip>
  );
};

export default PageStar;
