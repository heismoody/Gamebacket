import SectionHeader from "../../components/sectionHeader";
import NewsCard from "../home/latestNews/newsCard";

export default function News() {
  return (
    <section className="bg-background flex justify-center items-center pt-40">
      <div className="w-[1161px]">
        <SectionHeader name="NEWS" title="Our Latest News" description="" />
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 py-14">
          <NewsCard
            imageURl="dummypost4.jpg"
            description="September, 2023 No Comments"
            title="Breaking: Exciting Game Releases Unveiled!"
          />
          <NewsCard
            imageURl="dummypost5.jpg"
            description="September 16, 2023 No Comments"
            title="Pro Tips: Master the Art of Gaming Strategy"
          />
          <NewsCard
            imageURl="dummypost6.jpg"
            description="September 16, 2023 No Comments"
            title="Community Spotlight: Meet Our Top Gamers!"
          />
          <NewsCard
            imageURl="dummypost1.jpg"
            description="September, 2023 No Comments"
            title="Breaking: Exciting Game Releases Unveiled!"
          />
          <NewsCard
            imageURl="dummypost7.jpg"
            description="September 16, 2023 No Comments"
            title="Pro Tips: Master the Art of Gaming Strategy"
          />
          <NewsCard
            imageURl="dummypost3.jpg"
            description="September 16, 2023 No Comments"
            title="Community Spotlight: Meet Our Top Gamers!"
          />
          <NewsCard
            imageURl="dummypost8.jpg"
            description="September, 2023 No Comments"
            title="Breaking: Exciting Game Releases Unveiled!"
          />
          <NewsCard
            imageURl="dummypost2.jpg"
            description="September 16, 2023 No Comments"
            title="Pro Tips: Master the Art of Gaming Strategy"
          />
          <NewsCard
            imageURl="dummypost9.jpg"
            description="September 16, 2023 No Comments"
            title="Community Spotlight: Meet Our Top Gamers!"
          />
        </div>
      </div>
    </section>
  );
}
