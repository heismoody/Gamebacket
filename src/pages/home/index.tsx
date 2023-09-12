import Footer from "../../components/footer/footer";
import NavigationBar from "../../components/navigation/navigationBar";
import ConnectWithUs from "./connectWithUs/connectWithUs";
import { LandingPage } from "./landingPage";
import NewRelease from "./newRelease";
import { PreOrders } from "./preOrders";
import ShopByFormat from "./shopByFormat/shopByFormat";


const Homepage = () => {
  return (
    <>
    <NavigationBar/>
      <section className="flex flex-col items-start justify-center bg-slate-500">
        <div className="bg-[url('https://w.wallhaven.cc/full/xl/wallhaven-xlq5k3.jpg')] bg-cover relative">
          <LandingPage/>
          <PreOrders/>
        </div>
        <NewRelease/>
        <ShopByFormat/>
        <ConnectWithUs/>
      </section>
    <Footer/>
    </>
  );
};

export default Homepage;
