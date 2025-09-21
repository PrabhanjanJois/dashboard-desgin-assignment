import React from "react";
import { notifications } from "../../utils/data";
import { useSelector } from "react-redux";

const Notifications = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="text-start ">
      <div
        className={`text-sm mb-3 font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Notifications
      </div>
      {notifications?.map((note, index) => (
        <div
          className="grid grid-cols-6 gap-2 mb-4 last:mb-0 items-start"
          key={index}
          data-testid={`notification-${index}`}
        >
          <figure
            className={`w-[24px] h-[24px] flex items-center justify-center p-[4px] rounded-md ${note?.color}`}
          >
            <note.icon size={16} strokeWidth={1.5} className="text-[#1C1C1C]" />
          </figure>
          <div className="text-start col-span-5">
            <p
              className={`text-sm line-clamp-1 ${
                theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              {note?.message}
            </p>
            {note?.time && (
              <p
                className={`text-xs line-clamp-1 ${
                  theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                }`}
              >
                {note?.time}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
