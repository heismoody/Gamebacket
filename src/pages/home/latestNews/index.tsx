import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader";
import NewsCard from "./newsCard";
import ViewAllBtn from "../../../components/buttons/viewAllBtn";

const LatestNews = () => {
  return (
    <section className="flex justify-center items-center w-full bg-[url('blur-bg2.png')] bg-cover">
      <div className="w-[1161px] mobile:w-[90%] flex flex-col items-center mobile:py-10">
        <SectionHeader
          name="NEWS"
          title="Our Latest News"
          description="Stay Updated with the Hottest Gaming Buzz and Exclusive Releases!"
          url="/news"
          cta
        />
        <div className="py-[70px] flex justify-between items-center w-full mobile:gap-y-5 mobile:flex-col mobile:py-10">
          <NewsCard
            imageURl="dummypost1.jpg"
            description="September, 2023 No Comments"
            title="Breaking: Exciting Game Releases Unveiled!"
          />
          <NewsCard
            imageURl="dummypost2.jpg"
            description="September 16, 2023 No Comments"
            title="Pro Tips: Master the Art of Gaming Strategy"
          />
          <NewsCard
            imageURl="dummypost3.jpg"
            description="September 16, 2023 No Comments"
            title="Community Spotlight: Meet Our Top Gamers!"
          />
        </div>
        <Link to="/news">
          <span className="hidden mobile:block">
            <ViewAllBtn name="View All" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;
