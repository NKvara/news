import {latestNewsArticle} from "@/components/helper/newsData";
import MediumContainer from "@/pages/Home/components/mediumContainer";

const LatestNews = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl font-bold">Latest News</h1>
        <h1 className="text-xl font-semibold text-blue-600">See More ➜</h1>
      </div>
      <div className="flex flex-row gap-6">
        {latestNewsArticle.map((o) => (
          <MediumContainer
            key={o.date}
            title={o.title}
            main_image={o.main_image}
            category={o.category}
            date={o.date}
            description={o.description}
            blogText={o.blogText}
            author={o.author}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
