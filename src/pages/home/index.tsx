import { LandingPage } from "./landingPage";
import { PreOrders } from "./preOrders";
import LatestNews from "./latestNews";
import Testimonials from "./testimonials";
import WeeklyDeals from "./weeklyDeals";
import MostPopular from "./mostPopular";
import Trending from "./trending";
import AccessoriesSection from "./accessories";

const Homepage = () => {
  return (
    <section className="flex flex-col items-start justify-center bg-background">
      <LandingPage />
      <Trending />
      <AccessoriesSection/>
      <MostPopular />
      <WeeklyDeals />
      <PreOrders />
      <Testimonials />
      <LatestNews />
    </section>
  );
};

export default Homepage;
