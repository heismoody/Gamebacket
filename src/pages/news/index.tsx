import PageHeader from "../pageHeader";
import NewsCard from "../home/latestNews/newsCard";

export default function News() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/hero-news2.jpg"
        title="Our Latest News"
        description="Stay up-to-date on the latest news, including new releases, event updates, and exclusive offers. We've got you covered with everything, from the latest game reviews to the hottest new trends. Whether you're a casual gamer or a hardcore enthusiast, we've got something for everyone."
      />
      <div className="w-[1161px] mobile:w-[90%]">
        <div className="grid grid-cols-3 mobile:grid-cols-1 gap-x-6 gap-y-10 py-8">
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
