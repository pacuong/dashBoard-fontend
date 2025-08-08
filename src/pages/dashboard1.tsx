import { useState } from "react";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import CryptoCardList from "../components/CryptoCardList";
import MarketOverviewChart from "../components/MarketOverviewChart";
import CryptoStatistics from "../components/CryptoStatistics";
import QuickTransfer from "../components/QuickTransfer";

const Dashboard1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar cố định bên trái */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-col flex-1">
        {/* Header cố định */}
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Nội dung cuộn */}
        <div className=" overflow-y-auto bg-gray-30 p-10">
          <div className="pb-10">
            <CryptoCardList />
          </div>

          <div className="bg-white-100 rounded-lg">
            <MarketOverviewChart />
          </div>

          <div className="pt-10 w-full">
            <CryptoStatistics />
          </div>
          <div className="pt-10 w-full">
            <QuickTransfer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
