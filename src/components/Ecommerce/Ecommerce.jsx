import React from "react";
import { useSelector } from "react-redux";
import Metrics from "./Metrics";
import RevenueChart from "./RevenueChart";
import RevenueLocation from "./RevenueLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";

const Ecommerce = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="grid gap-y-5">
      <h2
        className={`text-sm font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        eCommerce
      </h2>
      <Metrics />
      <main className="grid gap-5 grid-cols-1 md:grid-cols-4">
        <RevenueChart />
        <RevenueLocation />
      </main>
      <main className="grid gap-5 grid-cols-1 md:grid-cols-4">
        <TopSellingProducts />
        <TotalSales />
      </main>
    </div>
  );
};

export default Ecommerce;
