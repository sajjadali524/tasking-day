import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "../../assets/images/dashboard-icon.png";
import Projects from "../../assets/images/projetc-icon.png";
import TaskList from "../../assets/images/list-icon.png";
import Services from "../../assets/images/services-icon.png";
import Chat from "../../assets/images/chat-icon.png";
import Logo from "../../assets/images/logo.png";
import Profile from "../../assets/images/profile.jpg";
import "../../index.css";

const Sidebar = ({ isopen }) => {
  const Navbar = [
    {
      image: Dashboard,
      title: "Dashboard",
      path: "/",
    },
    {
      image: Projects,
      title: "Projects",
      path: "/projects",
    },
    {
      image: TaskList,
      title: "Task List",
      path: "/task-list",
    },
    {
      image: Services,
      title: "Services",
      path: "/services",
    },
    {
      image: Chat,
      title: "Chat",
      path: "/chat",
    },
  ];
  return (
    <div
      className={
        isopen
          ? `absolute top-16 left-0 grid grid-cols-1 h-[100%] w-full bg-gray-50 z-50`
          : `fixed top-0 left-0 hidden md:flex flex-col h-screen gap-5 md:w-[200px] lg:w-[250px] bg-[#EFF3F4] py-5`
      }
    >
      <div className="flex justify-center items-end space-x-1">
        <img className="w-10" src={Logo} alt="logo" />
        <Link to="/">BRESS</Link>
      </div>
      <hr className="w-[80%] ml-[10%]" />

      <div className="grid grid-cols-1 space-y-3">
        {Navbar.map((nav, ind) => {
          return (
            <>
              <div
                className="flex items-center mx-5 p-2 space-x-3 hover:bg-[#fff] hover:py-2 hover:rounded-full"
              >
                <img src={nav.image} alt="logo" width="20px" />
                <NavLink activeclassname="active" to={nav.path}>
                  {nav.title}
                </NavLink>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex flex-col items-center mt-10">
        <img
          className="rounded-[100%] w-[30%] pb-5"
          src={Profile}
          alt="Profile"
        />
        <h1 className="text-[22px] font-semibold">Emily Jonson</h1>
        <p>jonson@bress.com</p>
      </div>
    </div>
  );
};

export default Sidebar;
