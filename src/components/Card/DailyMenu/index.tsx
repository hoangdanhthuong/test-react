import { formatDateToMMYY } from "@/utils/general";

interface Props {
  image: string;
  date: Date;
  label: string;
}
const DailyMenuCard: React.FC<Props> = ({ image, date, label }) => {
  return (
    <div>
      <div className="relative h-100">
        <img src={image} alt="" width={234} height={234} className="h-[234px] object-cover" />
        <div className="absolute bottom-0 left-0 text-light bg-primary-300 py-[7px] px-[9px]">
          <p>{`${formatDateToMMYY(date)}.${label}`}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyMenuCard;
