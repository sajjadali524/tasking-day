import { Link } from "react-router-dom";
import Bars from "../../assets/images/bars.png";
import Search from "../../assets/images/search.png";

const Header = ({ openSidebar }) => {
  return (
    <div className="flex items-center justify-between rounded-lg w-full py-3 bg-[#fff] px-5">
      <div className="flex items-center gap-2 md:gap-5">
        <img
          onClick={openSidebar}
          className="cursor-pointer flex md:hidden"
          src={Bars}
          alt="bars"
          width="25px"
        />
        <div className="relative w-[150px] md:[200px] lg:w-[300px]">
          <input
            className="pl-5 pr-4 py-2 w-[100%] border rounded-full bg-[#EFF3F4] focus:outline-none transition"
            type="text"
            placeholder="Search"
          />
          <div className="hidden absolute inset-y-0 right-0 pr-3 pt-1 md:flex items-center pointer-events-none">
            <img className="h-5 w-5" src={Search} alt="search" />
          </div>
        </div>

        <div className="opacity-[80%]">
          <select className="cursor-pointer outline-none">
            <option>Monday, 6th March</option>
            <option>Monday, 6th March</option>
            <option>Monday, 6th March</option>
            <option>Monday, 6th March</option>
          </select>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-[#EFF3F4] rounded-full">
        <div className="flex items-center gap-3 bg-[#ffe2e2] rounded-full py-3 px-5">
          <img className="h-5 w-5" alt="" src={Bars} />
          <Link to="">Card</Link>
        </div>
        <div className="flex items-center gap-3 py-3 px-5">
          <img className="h-5 w-5" alt="" src={Bars} />
          <Link to="">List</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
