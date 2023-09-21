import ColumnRecommendCard from "@/components/Card/ColumnRecommend";

import data from "./dummy";

const ColumnRecommend: React.FC = () => {
  return (
    <div className="my-14 grid grid-cols-4">
      {data.map((item) => (
        <ColumnRecommendCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ColumnRecommend;
