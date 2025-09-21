import React, { useEffect, useState } from "react";
import {
  statusCard as initialStatusCard,
  BarData as initialBarData,
} from "../../utils/data";
import { PiTrendUpFill, PiTrendDownFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Metrics = ({ refreshKey }) => {
  const theme = useSelector((state) => state.theme.theme);
  const navigate = useNavigate();

  const [statusData, setStatusData] = useState(initialStatusCard);
  const [barData, setBarData] = useState(initialBarData);

  useEffect(() => {
    if (refreshKey === 0) return;

    const newStatus = initialStatusCard.map((card) => ({
      ...card,
      value: Math.floor(Math.random() * 5000 + 100),
      increasedBy: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null,
      decreasedBy: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null,
    }));

    const newBarData = initialBarData.map((item) => ({
      ...item,
      actual: Math.floor(Math.random() * 30),
      projection: Math.floor(Math.random() * 30),
    }));
    setStatusData(newStatus);
    setBarData(newBarData);
  }, [refreshKey]);

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {/* Status Cards */}
      <div
        key={refreshKey}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade"
      >
        {statusData?.map((card, index) => (
          <div
            key={index}
            onClick={() => {
              if (card?.title === "Orders") {
                navigate("/orders");
              }
            }}
            className={`${
              theme ? card?.darkBg : card?.bg
            } cursor-pointer rounded-2xl gap-2 p-6 flex justify-around flex-col`}
          >
            <h6
              className={`${
                theme ? card?.darkTextColor : card?.textColor
              } text-sm font-semibold rounded-md mb-1 hover:bg-[#1C1C1C0D] `}
            >
              {card?.title}
            </h6>
            <div className="flex items-center justify-between hover:bg-[#1C1C1C0D] rounded-md hover:flex-row-reverse">
              <h6
                className={`text-2xl font-semibold ${
                  theme ? card?.darkTextColor : card?.textColor
                }`}
              >
                {card?.value}
              </h6>
              <div className="flex items-center gap-2">
                <p
                  className={`text-xs font-normal ${
                    theme ? card?.darkTextColor : card?.textColor
                  }`}
                >
                  {card?.increasedBy
                    ? `+${card?.increasedBy}`
                    : `-${card?.decreasedBy}`}
                </p>
                {card.increasedBy ? (
                  <PiTrendUpFill
                    size={14}
                    strokeWidth={1.5}
                    className={`${
                      theme ? card?.darkTextColor : card?.textColor
                    }`}
                  />
                ) : (
                  <PiTrendDownFill
                    size={14}
                    strokeWidth={1.5}
                    className={`${
                      theme ? card?.darkTextColor : card?.textColor
                    }`}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div
        className={`${
          theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
        } rounded-2xl p-5 animate-fade`}
      >
        <h6
          className={`text-sm font-semibold ${
            theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
          }`}
        >
          Projections vs Actual
        </h6>
        <div className="h-[90%] w-full mt-4">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart width={"100%"} height={180} data={barData}>
              <CartesianGrid
                stroke={`${theme ? "#FFFFFF66" : "#1C1C1C66"}`}
                strokeOpacity={0.2}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickFormatter={(date) => moment(date).format("MMM")}
                tick={{
                  fontSize: 12,
                  fill: `${theme ? "#FFFFFF66" : "#1C1C1C66"}`,
                }}
                padding={{ left: 20 }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 30]}
                axisLine={false}
                fontSize={12}
                ticks={[0, 10, 20, 30]}
                tick={{
                  fontSize: 12,
                  fill: `${theme ? "#FFFFFF66" : "#1C1C1C66"}`,
                }}
                tickFormatter={(value) => `${value}M`}
                tickLine={false}
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
              <Bar
                dataKey="actual"
                fill="#A8C5DA"
                name="Actual"
                stackId="a"
                barSize={20}
              />
              <Bar
                dataKey="projection"
                radius={[6, 6, 0, 0]}
                fill="#A8C5DA"
                name="Projection"
                stackId="a"
                barSize={20}
                style={{ opacity: "0.5" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
