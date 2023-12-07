import React from "react";
import Profile from "../assets/images/profile.jpg";

const PagesTable = ({ title, hideContent }) => {
  // tabel static Data
  const tableData = [
    {
      name: "clientOnboarding - circle",
      image: Profile,
      profileName: "Samanta.J",
      members: 3,
      status: "In progress",
      runTime: "6 hours",
      finishDate: "6 Mon",
    },
    {
      name: "clientOnboarding - circle",
      image: Profile,
      profileName: "Samanta.J",
      members: 3,
      status: "In progress",
      runTime: "6 hours",
      finishDate: "6 Mon",
    },
    {
      name: "clientOnboarding - circle",
      image: Profile,
      profileName: "Samanta.J",
      members: 3,
      status: "In progress",
      runTime: "6 hours",
      finishDate: "6 Mon",
    },
    {
      name: "clientOnboarding - circle",
      image: Profile,
      profileName: "Samanta.J",
      members: 3,
      status: "In progress",
      runTime: "6 hours",
      finishDate: "6 Mon",
    },
  ];
  return (
    <div className="bg-[#fff] px-5 rounded-lg">
      <div className="flex justify-between">
        <div className="space-y-1">
          <h1 className="font-bold text-[20px] md:text-[30px]">{title}</h1>
          {!hideContent && (
            <p className="font-semibold text-[12px] md:text-[18px]">
              117 total,
              <span className="font-normal opacity-[70%] text-[12px] md:text-[15px]">
                process to resolve them
              </span>
            </p>
          )}
        </div>
        {!hideContent && (
          <div className="flex items-center gap-3 md:gap-7">
            <div className="space-y-1">
              <h1 className="font-bold text-[20px] md:text-[30px] text-center">
                94
              </h1>
              <p className="opacity-[70%]">Done</p>
            </div>
            <span className="bg-[#EFF3F4] h-10 w-[1px]"></span>
            <div className="space-y-1">
              <h1 className="font-bold text-[20px] md:text-[30px] text-center">
                23
              </h1>
              <p className="opacity-[70%]">In progress</p>
            </div>
          </div>
        )}
      </div>
      <div className="overflow-scroll lg:overflow-hidden md:overflow-scroll">
        <table className="table w-[220%] lg:w-full md:w-[150%] mt-5">
          <thead className="border-t-[1px] border-b-[1px] text-left">
            <tr>
              <th className="py-5 opacity-[70%] font-normal flex items-center">
                <input className="w-5 h-5" type="checkbox" />
              </th>
              <th className="opacity-[70%] font-normal">Name</th>
              <th className="opacity-[70%] font-normal">Admin</th>
              <th className="opacity-[70%] font-normal">Members</th>
              <th className="opacity-[70%] font-normal">Status</th>
              <th className="opacity-[70%] font-normal">Run time</th>
              <th className="opacity-[70%] font-normal">Finish date</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((val, ind) => {
              return (
                <tr key={ind}>
                  <td className="py-2">
                    <input className="w-5 h-5 mt-2" type="checkbox" />
                  </td>
                  <td>{val.name}</td>
                  <div className="flex gap-3 items-center py-3">
                    <td>
                      <img
                        className="w-8 h-8 rounded-full"
                        src={val.image}
                        alt="adminImage"
                      />
                    </td>
                    <td>{val.profileName}</td>
                  </div>
                  <td>{val.members}</td>
                  <td>{val.status}</td>
                  <td>{val.runTime}</td>
                  <td>{val.finishDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagesTable;
