import React, { useCallback, useEffect, useRef, useState } from "react";

import MenuItem from "./MenuItem";

const MENU = [
  {
    label: "自分の記録",
    link: "/my-record",
  },
  {
    label: "体重グラフ",
    link: "#",
  },
  {
    label: "目標",
    link: "#",
  },
  {
    label: "選択中のコース",
    link: "#",
  },
  {
    label: "コラム一覧",
    link: "/column",
  },
  {
    label: "設定",
    link: "#",
  },
];
const Menu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((e: globalThis.MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button onClick={handleToggle} type="button">
          {isDropdownOpen ? <img src="/images/icons/close.png" alt="" /> : <img src="/images/icons/menu.png" alt="" />}
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white right-0">
          <ul className="py-1">
            {MENU.map((item) => (
              <MenuItem key={item.link} label={item.label} link={item.link} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
