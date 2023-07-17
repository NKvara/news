import {SlNote} from "react-icons/sl";
import {VscBell} from "react-icons/vsc";

const Navbar = () => {
  
  return (
    <div className="flex justify-center h-32 w-100">
      <div className="flex flex-row justify-between w-full max-w-[80rem]">
        <div className="flex items-center flex-row gap-10">
          <p className="text-blue-600 font-bold text-4xl">Vertex</p>
          <div className="bg-black w-[2px] h-8" />
          <p>Stories</p>
          <p>Creator</p>
          <p>Community</p>
          <p>Subscribe</p>
        </div>
        <div className="flex items-center flex-row gap-10">
          <div className="flex items-center gap-2">
            <SlNote size={20} />
            <p className="text-black text-xl">Write</p>
          </div>
          <VscBell size={24} />
          <div className="h-10 w-10 bg-black border-rad rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
