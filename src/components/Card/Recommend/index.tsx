import { Link } from "react-router-dom";

interface RecommendCardProps {
  label: string;
  description: string;
  link: string;
  image: string;
}

const RecommendCard: React.FC<RecommendCardProps> = ({ label, description, image, link }) => {
  return (
    <Link to={link} className="relative w-[288px] border-primary-300 border-[24px] ">
      <div className="relative">
        <img
          src={image}
          alt=""
          height="100%"
          width="100%"
          style={{ filter: "grayscale(100%)" }}
          className="object-cover object-left bg-blend-luminosity"
        />
        <div className="absolute inset-0 bg-black/40 bg-blend-luminosity">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <h2 className="uppercase text-[25px] leading-[25px] text-primary-300 mb-2 font-normal font-Inter">
              {label}
            </h2>
            <p className="bg-primary-400 text-light w-40 text-center leading-5 text-sm pb-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendCard;
