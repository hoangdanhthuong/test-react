import { NavLink } from "react-router-dom";

const NavBrand: React.FC = () => {
  return (
    <NavLink to={"/"} className={"px-4 pt-2"}>
      <img alt="" src="logo.png" width={109} height={40} />
    </NavLink>
  );
};

export default NavBrand;
