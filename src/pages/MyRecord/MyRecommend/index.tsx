import RecommendCard from "@/components/Card/Recommend";

const RECOMMEND = [
  {
    label: "BODY RECORD",
    link: "?type=body-record",
    description: "自分のカラダの記録",
    image: "/images/recommend/1.jpg",
  },
  {
    label: "MY EXERCISE",
    link: "?type=my-exercise",
    description: "自分の運動の記録",
    image: "/images/recommend/2.jpg",
  },
  {
    label: "MY DIARY",
    link: "?type=my-diary",
    description: "自分の日記",
    image: "/images/recommend/3.jpg",
  },
];

const MyRecommend: React.FC = () => {
  return (
    <div className="flex justify-between py-14 gap-4">
      {RECOMMEND.map((item) => (
        <RecommendCard key={item.image} {...item} />
      ))}
    </div>
  );
};

export default MyRecommend;
