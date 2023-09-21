import { HexButton } from "@/components/Buttons";

const FILTER = [
  {
    link: "/?type=morning",
    icon: "/images/icons/knife.png",
    label: "Morning",
  },
  {
    link: "/?type=lunch",
    icon: "/images/icons/knife.png",
    label: "Lunch",
  },
  {
    link: "/?type=dinner",
    icon: "/images/icons/knife.png",
    label: "Dinner",
  },
  {
    link: "/?type=snack",
    icon: "/images/icons/cup.png",
    label: "Snack",
  },
];

const Filters: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4">
        {FILTER.map(({ label, icon, link }) => (
          <HexButton key={link} label={label} className="hex-button" icon={icon} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
