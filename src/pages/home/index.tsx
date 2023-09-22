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
    <section className="flex flex-col items-start justify-center bg-background">
      <LandingPage />
      <Trending />
      <MostPopular />
      <ExploreCatalog />
      <Categories />
      <WeeklyDeals />
      <NewRelease />
      <GetNow />
      <PreOrders />
      <Testimonials />
      <LatestNews />
    </section>
  );
};

export default Homepage;
