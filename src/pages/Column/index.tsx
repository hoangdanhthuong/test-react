import MainLayout from "@/layouts/MainLayout";

import Product from "./Product";
import ColumnRecommend from "./Recommend";

const ColumnPage: React.FC = () => {
  return (
    <MainLayout className="container">
      <ColumnRecommend />
      <Product />
    </MainLayout>
  );
};

export default ColumnPage;
