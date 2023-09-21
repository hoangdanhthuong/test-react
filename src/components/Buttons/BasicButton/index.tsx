interface Props {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const BasicButton: React.FC<Props> = ({ label }) => {
  return <button className="bg-primary text-light rounded leading-[26px] text-lg py-[15px] w-[296px]">{label}</button>;
};

export default BasicButton;
