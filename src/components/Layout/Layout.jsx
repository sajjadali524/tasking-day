import { useState } from "react";
import Routers from "../../router/Routers";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex bg-[#B5C2CA] w-full">
      <Sidebar isopen={isOpen} />
      <div className="flex flex-col w-full px-0 md:px-5 ml-0 md:ml-[200px] lg:ml-[250px]">
        <Header openSidebar={openSidebar} />
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
