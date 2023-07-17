import HomeHeader from "@/pages/Home/Header";
import LatestNews from "@/pages/Home/LastestNews";
import MustRead from "@/pages/Home/MustRead";
import Featured from "@/pages/Home/Featured";
import AuthorBar from "@/pages/Home/AuthorBar";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-16 w-full max-w-[80rem]">
        <AuthorBar />
        <HomeHeader />
        <LatestNews />
        <MustRead />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
