import { useEffect, useState } from "react";

import BasicButton from "@/components/Buttons/BasicButton";
import ProductCard from "@/components/Card/Product";
import Loading from "@/components/Loading";

import products from "./dummy";

const useGetProducts = () => {
  const [data, setData] = useState<typeof products | null>(null);

  useEffect(() => {
    (async () => {
      const resp: typeof products = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
      setData(resp);
    })();
  }, []);
  return data;
};

const Product: React.FC = () => {
  const data = useGetProducts();

  return (
    <div>
      {!data ? (
        <>
          <Loading height={200} className="mb-2" />
          <Loading height={200} className="mb-2" />
        </>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-2 mb-14">
            {data.map((item) => (
              <ProductCard key={item.image} {...item} />
            ))}
          </div>
          <div className="text-center mb-14">
            <BasicButton label="コラムをもっと見る" />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
