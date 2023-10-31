import DashboardHeader from "./components/dashboardHeader";
import Overview from "./components/overview";
import SalesStatistics from "./components/salesStatistics";
import TopProduct from "./components/topProduct";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center py-5">
      <DashboardHeader />
      <div className="flex justify-between w-[95%] py-4">
        <div className="w-[60%]">
          <Overview />
          <SalesStatistics/>
        </div>
        <TopProduct />
      </div>
    </div>
  );
}
