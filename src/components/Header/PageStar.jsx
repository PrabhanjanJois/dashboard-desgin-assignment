import React, { useState, useEffect } from "react";
import { PiStarLight, PiStarFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { Tooltip } from "antd";

const PageStar = () => {
  const location = useLocation();
  const [starredPages, setStarredPages] = useState({});

  const currentPage = location.pathname;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("starredPages") || "{}");
    setStarredPages(stored);
  }, []);

  const toggleStar = () => {
    const updated = {
      ...starredPages,
      [currentPage]: !starredPages[currentPage],
    };
    setStarredPages(updated);
    localStorage.setItem("starredPages", JSON.stringify(updated));
  };

  const isFilled = starredPages[currentPage];

  return (
    <Tooltip title={isFilled ? "Unfavorite" : "Favorite"} placement="left">
      <div
        onClick={toggleStar}
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
