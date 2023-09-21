import { Link } from "react-router-dom";

import { formatDateTime } from "@/utils/general";

interface ProductCardProps {
  title: string;
  image: string;
  tags: string[];
  link: string;
  created_at: Date;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, created_at, tags, link }) => {
  return (
    <Link to={link} className="mb-4">
      <div className="relative mb-1">
        <img alt="" src={image} />
        <p className="bg-primary-300 text-light text-[15px] h-6 w-[144px] text-center absolute bottom-0 left-0 font-normal font-Inter">
          {formatDateTime(created_at)}
        </p>
      </div>
      <div className="text-[15px] mb-1">{title}</div>
      {tags.length > 0 ? (
        <div className="leading-[22px] gap-1">
          {tags.map((item) => (
            <span key={item} className="text-primary-400 pr-2">
              {`#${item}`}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
};

export default ProductCard;
