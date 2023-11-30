import Overview from "./components/overview";
import SalesStatistics from "./components/salesStatistics";
import TopProduct from "./components/topProduct";
import UsersStats from "./components/usersStats";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between w-[95%] py-3">
        <div className="w-[60%]">
          <Overview />
          <SalesStatistics/>
        </div>
        <div className="w-[38%] flex flex-col gap-5">
          <TopProduct />
          <UsersStats/>
        </div>
      </div>
    </div>
  );
}
