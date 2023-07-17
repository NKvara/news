import {featuredArticle} from "@/components/helper/newsData";
import BigContainer from "@/pages/Home/components/bigContainer";
import MediumContainer from "@/pages/Home/components/mediumContainer";

const bigArticle = featuredArticle[0];
featuredArticle.shift();
const smallArticle = featuredArticle;

const Featured = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl font-bold">Featured Gems</h1>
        <h1 className="text-xl font-semibold text-blue-600">See More ➜</h1>
      </div>
      <BigContainer
        title={bigArticle.title}
        main_image={bigArticle.main_image}
        category={bigArticle.category}
        date={bigArticle.date}
        description={bigArticle.description}
        blogText={bigArticle.blogText}
        author={bigArticle.author}
      />
      <div className="flex flex-row gap-6">
        {smallArticle.map((o) => (
          <MediumContainer
            key={o.date}
            title={o.title}
            main_image={o.main_image}
            category={o.category}
            date={o.date}
            description={o.description}
            blogText={o.blogText}
            author={o.author}
            minified
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
