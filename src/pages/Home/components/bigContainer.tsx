import getAuthorNames from "@/components/helper/authors";
import {secondsToAgo} from "@/components/helper/secondsToAgo";
import {newsCollection} from "@/components/helper/types";
import getAuthorPicture from "@/components/helper/writersData";

const BigContainer = ({
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
    <div className={"relative flex flex-1 flex-col gap-4 basis-1/2"}>
      <div
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        style={{"--image-url": `url(${main_image})`}}
        className="absolute h-full w-full top-0 bg-[image:var(--image-url)] bg-cover bg-bottom rounded-2xl z-0"
      />
      <div
        className={
          "flex flex-col justify-end gap-4 w-full z-10 text-gray-200 bg-black bg-opacity-20 p-6 rounded-2xl backdrop-blur-sm" +
          (minified ? " h-full" : " h-96")
        }
      >
        <div className="flex flex-row gap-2 items-center">
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
        <h1 className={"text-2xl capitalize text-start font-bold text-white"}>
          {title}
        </h1>
        <p className="text-gray-70">{description}</p>
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-3">
            <p className="justify-self-end">{category}</p>
            <p className="flex flex-row items-center">•</p>
            <p>{Math.ceil(blogText.length / 1000)} minute read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigContainer;
