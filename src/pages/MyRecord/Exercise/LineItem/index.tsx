interface LineItemProps {
  label: string;
  kcal: number;
  duration: number;
}
const LineItem: React.FC<LineItemProps> = ({ label, kcal, duration }) => {
  return (
    <div className="flex justify-between border-b border-dark-500 pt-2 pb-1">
      <div className="text-light flex">
        <p className="text-[5px] mr-2 mt-2">●</p>
        <div>
          <h3 className="text-[15px]">{label}</h3>
          <p className="font-Inter text-primary-300">{`${kcal}kcal`}</p>
        </div>
      </div>
      <p className="font-Inter text-primary-300 text-lg leading-[22px]">{`${duration} Minutes`}</p>
    </div>
  );
};

export default LineItem;
