interface Props {
  count: number; // The count or number to display in the badge
}

const NotifyBadge: React.FC<Props> = ({ count }) => {
  return (
    <div className="absolute w-4 h-4 rounded-full -right-2 -top-0.5 text-center bg-primary-500 text-white text-[10px]">
      {count}
    </div>
  );
};

export default NotifyBadge;
