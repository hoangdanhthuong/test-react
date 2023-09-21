import cx from "classnames";
import { Link } from "react-router-dom";

interface HexButtonProps {
  className?: string;
  label: string;
  icon?: string;
  link: string;
}

const HexButton: React.FC<HexButtonProps> = ({ className, label, icon, link }) => {
  return (
    <Link
      className={cx(
        "relative m-5 w-[116px] flex items-center justify-center flex-col h-[134px] bg-primary hex-button",
        className,
      )}
      to={link}
    >
      {icon && <img src={icon} alt="" />}
      <span className="text-xl text-light text-normal">{label}</span>
    </Link>
  );
};

export default HexButton;
