interface ColumnRecommendProps {
  title: string;
  description: string;
}

const ColumnRecommendCard: React.FC<ColumnRecommendProps> = ({ title, description }) => {
  return (
    <div className="w-[216px] h-[144px] bg-dark-600 flex items-center">
      <div className="text-center">
        <h2 className="text-[22px] leading-[27px] font-Inter font-normal mb-2 text-primary-300">{title}</h2>
        <hr className="w-14 border-light mx-auto" />
        <p className="text-light text-lg leading-[26px]">{description}</p>
      </div>
    </div>
  );
};

export default ColumnRecommendCard;
