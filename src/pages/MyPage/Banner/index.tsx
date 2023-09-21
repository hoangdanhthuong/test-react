import { LineChart } from "@/components/Chart";

import { chartData } from "./dummy";

const Banner: React.FC = () => {
  return (
    <div className="flex h-[312px]">
      <div className="min-w-[540px] flex">
        <img src="/images/food/d01.jpg" width="100%" height={312} className="object-cover bg-center" alt="" />
      </div>
      <div className="w-full bg-dark-600 pr-20">
        <LineChart {...chartData} height={293.69} className="chart-container py-3 pl-[53px]" />
      </div>
    </div>
  );
};

export default Banner;
