import React from "react";
import { useSelector } from "react-redux";
import { tableData } from "../../utils/data";

const TopSellingProducts = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`md:col-span-3 ${
        theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
      } rounded-2xl p-6 animate-fade`}
    >
      <h6
        className={`text-sm font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Top Selling Products
      </h6>
      <div className="mt-2">
        <table className={`w-full text-sm text-left rtl:text-right`}>
          <thead>
            <tr
              className={`p-3 border-b-[1px] ${
                theme ? "border-b-[#FFFFFF66]" : "border-b-[#1C1C1C66]"
              }`}
            >
              <th
                className={`text-start text-xs py-2 font-normal ${
                  theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                }`}
              >
                Name
              </th>
              <th
                className={`text-start text-xs py-2 font-normal ${
                  theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                }`}
              >
                Price
              </th>
              <th
                className={`text-start text-xs py-2 font-normal ${
                  theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                }`}
              >
                Quantity
              </th>
              <th
                className={`text-start text-xs py-2 font-normal ${
                  theme ? "text-[#FFFFFF66]" : "text-[#1C1C1C66]"
                }`}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, index) => (
              <tr className="" key={index}>
                <td
                  className={`pr-6 py-3 text-start font-normal text-xs whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                  data-testid={`name-${index}`}
                >
                  {item.name}
                </td>
                <td
                  className={`pr-6 py-3 text-start font-normal text-xs whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                  data-testid={`price-${index}`}
                >
                  {item.price}
                </td>
                <td
                  className={`pr-6 py-3 text-start font-normal text-xs whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                  data-testid={`quantity-${index}`}
                >
                  {item.quantity}
                </td>
                <td
                  className={`pr-6 py-3 text-start font-normal text-xs whitespace-nowrap ${
                    theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                  data-testid={`amount-${index}`}
                >
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
