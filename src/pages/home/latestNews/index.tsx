import SectionHeader from "../homeComponents/sectionHeader";
import NewsCard from "./newsCard";

const LatestNews = () => {
  return (
    <section className="flex justify-center items-center w-full bg-[url('blur-bg2.png')] bg-cover">
      <div className="w-[85%]">
        <SectionHeader
          name="NEWS"
          title="Our Latest News"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <div className="py-[70px] flex flex-row justify-between">
          <NewsCard
            imageURl="dummypost1.jpg"
            description="October 16, 2022 No Comments"
            title="Velit dapibus sollicitudin sit iaculis"
          />
          <NewsCard
            imageURl="dummypost2.jpg"
            description="October 16, 2022 No Comments"
            title="Velit dapibus sollicitudin sit iaculis"
          />
          <NewsCard
            imageURl="dummypost3.jpg"
            description="October 16, 2022 No Comments"
            title="Velit dapibus sollicitudin sit iaculis"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
