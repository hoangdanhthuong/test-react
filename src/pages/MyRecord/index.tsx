import MainLayout from "@/layouts/MainLayout";

import Exersie from "./Exercise";
import MyRecommend from "./MyRecommend";
import RecordChart from "./RecordChart";

const MyRecordPage: React.FC = () => {
  return (
    <MainLayout className="container">
      <MyRecommend />
      <RecordChart />
      <Exersie />
    </MainLayout>
  );
};

export default MyRecordPage;
