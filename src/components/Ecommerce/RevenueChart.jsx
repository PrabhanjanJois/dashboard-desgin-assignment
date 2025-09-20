import React from "react";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import moment from "moment";
import { LineData } from "../../utils/data";

const RevenueChart = () => {
  const theme = useSelector((state) => state.theme.theme);

  const revenueData = [
    {
      label: "Current Week",
      value: "$58,211",
      color: "text-[#1C1C1C]",
      darkColor: "text-[#C6C7F8]",
    },
    {
      label: "Previous Week",
      value: "$68,768",
      color: "text-[#A8C5DA]",
      darkColor: "text-[#A8C5DA]",
    },
  ];

  return (
    <div
      className={`col-span-full md:col-span-3 ${
        theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
      } rounded-2xl p-6 animate-fade`}
    >
      <div className="block md:flex items-center">
        <h6
          className={`text-sm font-semibold ${
            theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
          } flex`}
        >
          Revenue{" "}
          <span
            className={`${
              theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"
            } mx-4 hidden md:flex`}
          >
            |
          </span>{" "}
        </h6>
        <div className="block md:flex items-center gap-4 mt-1 md:m-0">
          {revenueData?.map((d, i) => (
            <div key={i} className="flex items-center ">
              <GoDotFill
                size={14}
                strokeWidth={1.5}
                className={`${theme ? d?.darkColor : d?.color}`}
              />
              <p
                className={`text-xs font-normal p-0.5 ${
                  theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                }`}
              >
                {d?.label} <b className="p-1">{d?.value}</b>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[90%] w-full mt-4">
        <ResponsiveContainer width="100%" height={232}>
          <LineChart width={"100%"} height={232} data={LineData}>
            <CartesianGrid
              stroke={`${theme ? "#FFFFFF66" : "#1C1C1C66"}`}
              vertical={false}
              strokeOpacity={0.2}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 40 }}
              tickMargin={10}
              tick={{
                fontSize: 12,
                fill: `${theme ? "#FFFFFF66" : "#1C1C1C66"}`,
              }}
              tickFormatter={(date) => moment(date).format("MMM")}
            />
            <YAxis
              domain={[0, 30]}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              padding={{ left: 40 }}
              ticks={[0, 10, 20, 30]}
              tick={{
                fontSize: 12,
                fill: `${theme ? "#FFFFFF66" : "#1C1C1C66"}`,
              }}
              tickFormatter={(value) => `${value}M`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                background: `${theme ? "#1C1C1C" : "#f7f9fb"}`,
                fontFamily: "var(--inter-font)",
              }}
              itemStyle={{
                fontFamily: "var(--inter-font)",
                fontSize: "12px",
                fontWeight: "400",
              }}
              wrapperStyle={{
                background: "#1C1C1C",
                color: `${theme ? "#FFFFFF" : "#1C1C1C"}`,
                borderRadius: "10px",
              }}
            />
            <Line
              type="basis"
              dataKey="currentActual"
              stroke={theme ? "#C6C7F8" : "#1C1C1C"}
              dot={false}
              strokeWidth={3}
              name="Current Week"
            />
            <Line
              type="basis"
              dataKey="currentPredicted"
              stroke={theme ? "#C6C7F8" : "#1C1C1C"}
              dot={false}
              strokeDasharray="6 6"
              strokeWidth={3}
              name="Predicted"
            />
            <Line
              type="basis"
              dataKey="previous"
              stroke="#A8C5DA"
              dot={false}
              strokeWidth={3}
              name="Previous Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
