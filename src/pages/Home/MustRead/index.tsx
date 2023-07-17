import {mustReadArticle} from "@/components/helper/newsData";
import BigContainer from "@/pages/Home/components/bigContainer";
import MediumContainer from "@/pages/Home/components/mediumContainer";

const MustRead = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl font-bold">Must Read</h1>
        <h1 className="text-xl font-semibold text-blue-600">See More ➜</h1>
      </div>
      <div className="flex flex-row gap-6">
        {mustReadArticle.map((o, i) => (
          <>
            {i % 2 === 0 ? (
              <>
                <MediumContainer
                  title={o.title}
                  main_image={o.main_image}
                  category={o.category}
                  date={o.date}
                  description={o.description}
                  blogText={o.blogText}
                  author={o.author}
                />
              </>
            ) : (
              <>
                <BigContainer
                  title={o.title}
                  main_image={o.main_image}
                  category={o.category}
                  date={o.date}
                  description={o.description}
                  blogText={o.blogText}
                  author={o.author}
                  minified
                />
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MustRead;
