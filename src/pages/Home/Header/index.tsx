import getAuthorNames from "@/components/helper/authors";
import {mainArticle} from "@/components/helper/newsData";
import {secondsToAgo} from "@/components/helper/secondsToAgo";
import getAuthorPicture from "@/components/helper/writersData";

const firstArticle = mainArticle[0];

const HomeHeader = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-20 w-100 h-80">
      <div
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        style={{"--image-url": `url(${firstArticle.main_image})`}}
        className="w-full h-full bg-[image:var(--image-url)] bg-cover bg-bottom rounded-2xl"
      />
      <div className="flex flex-col justify-evenly py-4 h-full w-full">
        <div className="flex flex-row gap-3 items-center text-gray-700 text-lg">
          <div className="flex flex-row items-center gap-2">
            <div
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore: Unreachable code error
              style={{"--image-url": `url(${getAuthorPicture(firstArticle.author)})`}}
              className="aspect-square h-8 w-8 bg-[image:var(--image-url)] bg-cover rounded-full bg-no-repeat bg-center"
            ></div>
            <p>{getAuthorNames(firstArticle.author)}</p>
          </div>
          <p className="flex flex-row items-center">•</p>
          <p>{secondsToAgo(firstArticle.date.seconds)}</p>
        </div>
        <h1 className="text-4xl capitalize">{firstArticle.title}</h1>
        <p className="text-lg text-gray-700">{firstArticle.description}</p>
        <div className="flex flex-row gap-3 text-lg">
          <div className="flex flex-row items-center gap-3">
            <p className="text-blue-700">{firstArticle.category}</p>
            <p className="flex flex-row items-center">•</p>
            <p>{Math.ceil(firstArticle.blogText.length / 1000)} minute read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
