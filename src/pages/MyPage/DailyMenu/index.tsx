import BasicButton from "@/components/Buttons/BasicButton";
import DailyMenuCard from "@/components/Card/DailyMenu";

import data from "./dummy";

const DailyMenu: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 mb-[28px]">
        {data.map((item) => (
          <DailyMenuCard key={item.image} {...item} />
        ))}
      </div>
      <div className="text-center mb-16">
        <BasicButton label="記録をもっと見る" onClick={() => {}} />
      </div>
    </>
  );
};

export default DailyMenu;
