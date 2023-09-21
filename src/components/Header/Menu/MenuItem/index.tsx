import { Link } from "react-router-dom";

interface Props {
  label: string;
  link: string;
}

const MenuItem: React.FC<Props> = ({ label, link }) => {
  return (
    <li>
      <Link
        to={link}
        className="flex bg-gray-400 border-t hover:bg-primary-300 border-t-light/15 text-light ext-left pl-8 py-[23px] cursor-pointer border-b border-b-dark-600/25"
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
