import Heading from "@/components/Heading";
import { formatDate } from "@/utils/general";

import data from "./dummy";
import LineItem from "./LineItem";

const Exercise: React.FC = () => {
  return (
    <div className="mb-14">
      <div className="w-full bg-dark-600 p-6">
        <Heading label="My Exercise" description={formatDate(new Date())} />
        <div className="h-[192px] overflow-y-auto">
          <div className="grid grid-cols-2 mt-2 gap-x-10 gap-y-0">
            {data.map((item, index) => (
              <LineItem {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
