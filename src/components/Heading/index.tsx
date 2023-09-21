interface HeadingProps {
  label: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ label, description }) => {
  return (
    <div className="flex items-center text-light font-Inter font-normal">
      <h2 className="w-24 uppercase text-[15px]">{label}</h2>
      <p className="text-[22px] leading-[27px]">{description}</p>
    </div>
  );
};

export default Heading;
