import React from "react";
import { useSelector } from "react-redux";
import { contacts } from "../../utils/data";

const Contacts = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="text-start">
      <div
        className={`text-sm mb-3 font-semibold  pt-2 ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Contacts
      </div>
      {contacts?.map((contact, index) => (
        <div
          className="grid grid-cols-6 gap-2 mb-4 last:mb-0 items-center"
          key={index}
        >
          <figure className="col-span-1 flex items-center justify-center relative w-fit">
            <img
              src={contact?.image}
              alt={`user${index}`}
              className="w-[24px] h-[24px] rounded-full object-cover"
            />
          </figure>
          <div className="text-start col-span-5">
            <p
              className={`text-sm line-clamp-1 ${
                theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              {contact?.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
