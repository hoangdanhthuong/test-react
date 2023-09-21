import NavItem from "../NavItem";
import NotifyBadge from "./Badge";

const Notify: React.FC = () => {
  const count = 1;
  return <NavItem link="#" icon="/images/icons/notify.png" label="自分の記録" badge={<NotifyBadge count={count} />} />;
};

export default Notify;
