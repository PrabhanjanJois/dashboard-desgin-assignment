import React, { Suspense, memo } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";

const Metrics = React.lazy(() => import("./Metrics"));
const RevenueChart = React.lazy(() => import("./RevenueChart"));
const RevenueLocation = React.lazy(() => import("./RevenueLocation"));
const TopSellingProducts = React.lazy(() => import("./TopSellingProducts"));
const TotalSales = React.lazy(() => import("./TotalSales"));

const ChartSkeleton = () => (
  <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
    <Skeleton.Input
      active
      size="large"
      className="md:col-span-3 h-56 rounded-2xl"
      block
    />
    <Skeleton.Input active size="large" className="h-56 rounded-2xl" block />
  </div>
);

const ProductSkeleton = () => (
  <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
    <Skeleton.Input active size="large" className="h-56 rounded-2xl" block />
    <Skeleton.Input active size="large" className="h-56 rounded-2xl" block />
  </div>
);

const Ecommerce = () => {
  const theme = useSelector((state) => state.theme.theme);
  const refreshKey = useSelector((state) => state.refresh.key);

  const textColor = theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]";

  return (
    <div className="grid gap-y-5">
      <h2 className={`text-sm font-semibold ${textColor}`}>eCommerce</h2>

      {/* Metrics Section */}
      <Metrics refreshKey={refreshKey} />

      {/* Charts Section */}
      <Suspense fallback={<ChartSkeleton />}>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
          <RevenueChart refreshKey={refreshKey} />
          <RevenueLocation refreshKey={refreshKey} />
        </div>
      </Suspense>

      {/* Products / Sales Section */}
      <Suspense fallback={<ProductSkeleton />}>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
          <TopSellingProducts />
          <TotalSales />
        </div>
      </Suspense>
    </div>
  );
};

export default memo(Ecommerce);
