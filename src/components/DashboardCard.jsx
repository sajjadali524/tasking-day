import Profile from "../assets/images/profile.jpg";
import Comment from "../assets/images/message-icon.png";

export const Card = () => {
  return (
    <div className="flex flex-col w-full lg:w-[90%] rounded-xl px-3 py-5 bg-white my-5">
      <div className="flex justify-center text-[13px] md:text-[15px] gap-2 md:gap-5">
        <span className="px-3 py-1 bg-green-100 rounded-md text-blue-500">
          Feedback
        </span>
        <span className="px-3 py-1 bg-blue-100 rounded-md text-green-500">
          Bug
        </span>
        <span className="px-3 py-1 bg-pink-100 rounded-md text-purple-500">
          Design System
        </span>
      </div>

      <span className="font-semibold text-[18px] pt-5 pb-1">
        Improve cards readability
      </span>
      <span className="opacity-50 font-medium">21,03,22</span>

      <div className="flex items-center justify-between pt-10">
        <div className="flex">
          <img className="w-5 h-5 rounded-full" src={Profile} alt="" />
          <img className="w-5 h-5 rounded-full" src={Profile} alt="" />
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-[10px]">
            +8
          </span>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src={Comment} alt="" />
            <span className="opacity-50 text-[13px]">12 comments</span>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src={Comment} alt="" />
            <span className="opacity-50 text-[13px]">0 files</span>
          </div>
        </div>
      </div>
    </div>
  );
};
