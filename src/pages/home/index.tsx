import Footer from "../../components/footer/footer";
import NavigationBar from "../../components/navigation/navigationBar";
import { LandingPage } from "./landingPage";
import NewRelease from "./newRelease";
import { PreOrders } from "./preOrders";
import LatestNews from "./latestNews";
import Testimonials from "./testimonials";
import GetNow from "./getNow";
import WeeklyDeals from "./weeklyDeals";
import MostPopular from "./mostPopular";
import Categories from "./categories";
import ExploreCatalog from "./exploreCatalog";
import Trending from "./trending";


const Homepage = () => {
  return (
    <>
      <section className="flex flex-col items-start justify-center bg-background">
        <div className="w-full bg-[url('/hero-home.jpg')] bg-cover bg-no-repeat relative">
          <div className="absolute w-full h-full top-0 bg-black/50"/>
          <NavigationBar/>
          <LandingPage/>
        </div>
        <Trending/>
        <MostPopular/>
        <ExploreCatalog/>
        <Categories/>
        <WeeklyDeals/>
        <NewRelease/>
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
