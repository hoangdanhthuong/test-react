import { ChartData, LineOptions } from "chart.js";
import { Line } from "react-chartjs-2";

interface Props {
  width?: string | number;
  height?: string | number;
  data: ChartData<"line">;
  options: Partial<LineOptions>;
  title?: string;
  className?: string;
}

const LineChartWithColumn: React.FC<Props> = ({ className = "", width = 400, height = 400, data, options, title }) => {
  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      <div className="w-full h-full">
        <Line data={data} options={options} width={width} height={height} />
      </div>
    </div>
  );
};

export default LineChartWithColumn;
