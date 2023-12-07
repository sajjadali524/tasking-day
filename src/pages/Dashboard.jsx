import { React } from "react";
import PagesTable from "../shared/PagesTable";
import { Card } from "../components/DashboardCard";

// import chart libraries
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
  // making a charts
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [1, 2, 1.5, 2.5, 2.5, 3.3, 2.9, 2.9, 3.5, 3, 2.8, 2, 2.1, 2.5],
        backgroundColor: "transparent",
        borderColor: "rgba(33, 150, 243, 0.8)",
        pointBorderColor: "transparent",
        tension: 0.5,
      },
      {
        data: [2, 1.5, 2.5, 2.5, 3.3, 2.9, 1, 1.5],
        backgroundColor: "transparent",
        borderColor: "rgba(74, 5, 102, 0.8)",
        pointBorderColor: "transparent",
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          callback: (value) => value,
        },
      },
    },
  };

  return (
    <div className=" w-full py-5">
      {/* table start */}
      <PagesTable title="Dashboard" />
      {/* table end */}

      {/* chart start */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-5">
        <div className="w-1/1 bg-[#fff] px-5 rounded-lg">
          <div className="flex justify-between items-center py-5">
            <h1 className="text-[22px] font-semibold">Productivity</h1>
            <select className="outline-none bg-[#EFF3F4] rounded-full px-2 py-1 opacity-[70%] cursor-pointer">
              <option>01-07 May</option>
              <option>01-07 May</option>
              <option>01-07 May</option>
              <option>01-07 May</option>
              <option>01-07 May</option>
              <option>01-07 May</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <h1>Research</h1>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-900"></span>
                <h1>Research</h1>
              </div>
            </div>
            <span className="opacity-70">Data updates every 3 hourse</span>
          </div>

          <Line className="mt-8" data={data} options={options} />
        </div>

        {/* chart end */}

        {/* card slide start */}
        <div className="bg-[#071224] w-full py-5 px-2 rounded-lg shadow-md">
          <span className="font-semibold text-[20px] text-white">
            Projects in progress:
          </span>
          <Swiper>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* card slide end */}
      </div>
    </div>
  );
};

export default Dashboard;
