import Footer from "../../components/footer/footer";
import NavigationBar from "../../components/navigation/navigationBar";
import { LandingPage } from "./landingPage";
import NewRelease from "./newRelease";
import { PreOrders } from "./preOrders";
import ShopByFormat from "./shopByFormat/shopByFormat";
import LatestNews from "./latestNews";
import Testimonials from "./testimonials";
import GetNow from "./getNow";


const Homepage = () => {
  return (
    <>
    <NavigationBar/>
      <section className="flex flex-col items-start justify-center bg-background">
        <div className="bg-[url('https://w.wallhaven.cc/full/xl/wallhaven-xlq5k3.jpg')] bg-cover relative">
          <LandingPage/>
        </div>
        <div className="w-full h-[60vh] overflow-hidden relative">
          <video
            src='https://media.contentapi.ea.com/content/dam/need-for-speed/videos/2017/09/nfsp-world-environment-city-sc02-sh030-mp4.mp4'
            autoPlay
            loop
            muted
            className="w-full object-cover h-[60vh] absolute"
          />
          <div className="w-full h-full bg-black opacity-90 absolute"/>
          <NewRelease/>
        </div>
        <ShopByFormat/>
        <GetNow/>
        <PreOrders/>
        <Testimonials/>
        <LatestNews/>
      </section>
    <Footer/>
    </>
  );
};

export default Homepage;
