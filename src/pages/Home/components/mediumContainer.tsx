import {secondsToAgo} from "@/components/helper/secondsToAgo";
import {newsCollection} from "@/components/helper/types";
import getAuthorNames from '@/components/helper/authors';
import getAuthorPicture from "@/components/helper/writersData";

const MediumContainer = ({
  title,
  author,
  date,
  main_image,
  description,
  blogText,
  category,
  minified = false
}: newsCollection) => {
  return (
    <div className="flex flex-1 flex-col gap-4 basis-1/4">
      <div
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        style={{"--image-url": `url(${main_image})`}}
        className="aspect-[1/1] bg-[image:var(--image-url)] bg-cover bg-bottom rounded-2xl"
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row gap-2 items-center text-gray-700">
          <div className="flex flex-row items-center gap-2">
          <div
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore: Unreachable code error
              style={{"--image-url": `url(${getAuthorPicture(author)})`}}
              className="aspect-square h-8 w-8 bg-[image:var(--image-url)] bg-cover rounded-full bg-no-repeat bg-center"
            ></div>
            <p>{getAuthorNames(author)}</p>
          </div>
          <p className="flex flex-row items-center">•</p>
          <p>{secondsToAgo(date.seconds)}</p>
        </div>
        <h1 className="text-xl capitalize text-start font-bold line-clamp-3 h-20">
          {title}
        </h1>
        {!minified && (
          <p className="text-gray-70 line-clamp-4 h-24 text-gray-700">
            {description}
          </p>
        )}
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-3">
            <p className="text-blue-700 justify-self-end">{category}</p>
            <p className="flex flex-row items-center">•</p>
            <p>{Math.ceil(blogText.length / 1000)} minute read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumContainer;
