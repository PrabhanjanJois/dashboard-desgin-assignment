import React from "react";
import { useSelector } from "react-redux";
import { totalSales } from "../../utils/data";
import { GoDotFill } from "react-icons/go";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const TotalSales = () => {
  const theme = useSelector((state) => state.theme.theme);

  const totalValue = totalSales?.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      className={`md:col-span-1 rounded-2xl p-5 h-fit ${
        theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
      } animate-fade`}
    >
      {" "}
      <h6
        className={`text-sm font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Total Sales
      </h6>
      <div className="mt-2">
        <div className="w-full h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                formatter={(value, name, props) => [
                  `${((value / totalValue) * 100).toFixed(2)}%`,
                  props?.payload?.item || name,
                ]}
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  background: `${theme ? "#1C1C1C" : "#f7f9fb"}`,
                  color: `${theme ? "#FFFFFF" : "#1C1C1C"}`,
                  fontFamily: "var(--inter-font)",
                }}
                itemStyle={{
                  fontFamily: "var(--inter-font)",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: `${theme ? "#FFFFFF" : "#1C1C1C"}`,
                }}
                wrapperStyle={{
                  background: "#1C1C1C",
                  color: `${theme ? "#FFFFFF" : "#1C1C1C"}`,
                  borderRadius: "10px",
                }}
              />
              <Pie
                data={totalSales}
                cx="50%"
                cy="50%"
                startAngle={30}
                endAngle={-330}
                innerRadius={37}
                outerRadius={60}
                dataKey="price"
                strokeWidth={4}
                paddingAngle={-10}
                cornerRadius={12}
                stroke={`${theme ? "#333333" : "#FFFFFF"}`}
              >
                {totalSales.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={theme ? entry.darkColor : entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {totalSales?.map((item, index) => (
          <div
            className="flex justify-between items-center py-2 last:pb-0"
            key={index}
          >
            <div className="flex items-center gap-1">
              <GoDotFill
                size={14}
                strokeWidth={1.5}
                style={{ color: theme ? item?.darkColor : item?.color }}
                data-testid={`dot-${index}`}
              />
              <p
                className={`text-xs font-normal ${
                  theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                }`}
              >
                {item?.item}
              </p>
            </div>
            <p
              className={`text-xs font-normal ${
                theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              {`$${item?.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
