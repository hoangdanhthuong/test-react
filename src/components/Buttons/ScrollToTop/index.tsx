import cx from "classnames";
import React, { useEffect, useState } from "react";

import { ReactComponent as ArrowTop } from "@/assets/svg/arrow-top.svg";
import { ReactComponent as ArrowTopWhite } from "@/assets/svg/arrow-top-white.svg";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={cx(
        `fixed bottom-1/2 right-4 p-3 flex items-center hover btn-scroll-to-top justify-center rounded-full border hover:border-primary-500 hover:bg-primary-500 border-gray-400 text-gray-400 w-12 h-12 text-white transition-opacity`,
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        },
      )}
      onClick={scrollToTop}
    >
      <ArrowTop className="arrow-gray" />
      <ArrowTopWhite className="arrow-white hidden" />
    </button>
  );
};

export default ScrollToTopButton;
