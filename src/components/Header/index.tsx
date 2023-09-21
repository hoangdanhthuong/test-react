import Menu from "./Menu";
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import Notify from "./Notify";

const MENU = [
  {
    label: "自分の記録",
    link: "/my-record",
    icon: "/images/icons/memo.png",
  },
  {
    label: "チャレンジ",
    link: "/challegen",
    icon: "/images/icons/challenge.png",
  },
  //   {
  //     label: "自分の記録",
  //     link: "/notify",
  //     icon: "/images/icons/notify.png",
  //   },
];

const Header: React.FC = () => {
  return (
    <header className="py-2 bg-dark-500">
      <nav className="flex items-center container justify-between">
        <NavBrand />
        <ul className="flex items-center">
          {MENU.map((item) => (
            <NavItem key={item.link} {...item} />
          ))}
          <Notify />
          <li>
            <Menu />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
