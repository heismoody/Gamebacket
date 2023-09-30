import PageHeader from "../pageHeader";
import CategoryCard from "./accessoryCategorycard";

export default function Accessories() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/newsbg.jpg"
        title="Accessories"
        description="At Game Point, we know that the right gaming accessories can make all the difference in your gaming experience. That's why we offer a wide range of high-quality accessories from top brands, all designed to help you take your gaming to the next level."
      />
      <div className="w-[1161px]">
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 py-8">
            <CategoryCard
                image="dummypost8.jpg"
                name="CONTROLLERS"
                tags="pads, joystick, mouse"
            />
            <CategoryCard
                image="dummypost7.jpg"
                name="CONSOLES"
                tags="xbox, ps4, gamingPC"
            />
            <CategoryCard
                image="dummypost5.jpg"
                name="SOUNDS"
                tags="Headset, speakers"
            />
            <CategoryCard
                image="dummypost6.jpg"
                name="DECORATIONS"
                tags="mats, lights, stickers"
            />
            <CategoryCard
                image="dummypost7.jpg"
                name="DISPLAY"
                tags="4k, monitor"
            />
            <CategoryCard
                image="dummypost4.jpg"
                name="SOUNDS"
                tags="Headset, speakers"
            />
        </div>
      </div>
    </section>
  );
}
