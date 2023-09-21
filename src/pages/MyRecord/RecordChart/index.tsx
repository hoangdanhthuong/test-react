import qs from "qs";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";

import { LineChart } from "@/components/Chart";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import { formatDate } from "@/utils/general";

import { chartData } from "./dummy";
import Period from "./Period";

const useGetRecordChartData = () => {
  const [data, setData] = useState<typeof chartData | null>(null);
  const { search } = useLocation();

  const { type = "record" } = useMemo(() => qs.parse(search, { ignoreQueryPrefix: true }), [search]);

  useEffect(() => {
    if (type) {
      (async () => {
        const resp = (await new Promise((resolve) => {
          setTimeout(() => {
            resolve(chartData);
          }, 300);
        })) as typeof chartData;
        setData(resp);
      })();
    }
  }, [type]);
  return data;
};

const RecordChart: React.FC = () => {
  const data = useGetRecordChartData();
  return (
    <div className="mb-14">
      {!data ? (
        <Loading height={304} />
      ) : (
        <div className="w-full bg-dark-600 p-6">
          <Heading label={data.label} description={formatDate(data.date)} />
          <LineChart {...chartData} height={293.69} className="chart-container py-3 pl-[53px]" />
          <Period />
        </div>
      )}
    </div>
  );
};

export default RecordChart;
