import cx from "classnames";

interface PeriodButtonProps {
  label: string;
  active: boolean;
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PeriodButton: React.FC<PeriodButtonProps> = ({ label, value, active, onClick }) => {
  return (
    <button
      value={value}
      className={cx([
        "hover:text-light hover:bg-primary-300 w-14 text-[15px] leading-[22px] rounded-full ",
        {
          "text-light bg-primary-300": active,
          "text-primary-300 bg-light": !active,
        },
      ])}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PeriodButton;
