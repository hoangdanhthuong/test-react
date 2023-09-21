import { NavLink } from "react-router-dom";

export interface Props {
  label: string; // The label or text to display for the navigation item
  link: string; // The URL or route to navigate to when the item is clicked
  icon?: string; // Optional icon to display alongside the label (e.g., for icons like Font Awesome or Material Icons)
  isActive?: boolean; // Optional flag to indicate if the item is currently active or selected
  badge?: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<Props> = ({ icon, link, label, badge }) => {
  return (
    <NavLink className="flex items-center text-light w-[160px]" to={link}>
      <span className="relative">
        <img src={icon} alt="" className="px-[4.5px] py-[1px]" />
        {badge}
      </span>
      <span className="pl-2">{label}</span>
    </NavLink>
  );
};

export default NavItem;
