import PeriodButton from "@/components/Buttons/Period";

const PERIOD = [{ label: "日" }, { label: "週" }, { label: "月" }, { label: "年" }];

const Period: React.FC = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-4">
        {PERIOD.map((item) => (
          <PeriodButton label={item.label} active={false} key={item.label} onClick={() => {}} value="" />
        ))}
      </div>
    </div>
  );
};

export default Period;
