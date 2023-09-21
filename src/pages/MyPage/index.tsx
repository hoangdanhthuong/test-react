import MainLayout from "@/layouts/MainLayout";

import Banner from "./Banner";
import DailyMenu from "./DailyMenu";
import Filters from "./Filters";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Banner />
      <div className="container">
        <Filters />
        <DailyMenu />
      </div>
    </MainLayout>
  );
};

export default HomePage;
