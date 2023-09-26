import SectionHeader from "../../../components/sectionHeader";
import NewsCard from "./newsCard";

const LatestNews = () => {
  return (
    <section className="flex justify-center items-center w-full bg-[url('blur-bg2.png')] bg-cover">
      <div className="w-[1161px]">
        <SectionHeader
          name="NEWS"
          title="Our Latest News"
          description="Stay Updated with the Hottest Gaming Buzz and Exclusive Releases!"
          url=""
        />
        <div className="py-[70px] flex flex-row justify-between">
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
      </div>
    </section>
  );
};

export default LatestNews;
