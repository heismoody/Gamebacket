import ViewAllBtn from "../../../components/buttons/viewAllBtn";
import CategoryCard from "./categoryCard";

export default function Categories() {
  return (
    <section className="w-full flex justify-center items-center bg-[#1B1B2B] pb-24 pt-40">
      <div className="w-[1161px] flex flex-col items-center">
        <span className="introheading-2 text-[32px]">Categories</span>
        <div className="w-full grid grid-cols-5 gap-y-6 gap-x-[25px] py-10">
          <CategoryCard imageURL="category-action.jpg" categoryname="Action" />
          <CategoryCard imageURL="category-adventure.jpg" categoryname="Adventure" />
          <CategoryCard imageURL="trend4.jpg" categoryname="Arcade" />
          <CategoryCard imageURL="category-fps.jpg" categoryname="FPS" />
          <CategoryCard imageURL="category-fight.jpg" categoryname="Fighting" />
          <CategoryCard imageURL="product-snowball.jpg" categoryname="Kids" />
          <CategoryCard imageURL="product-racing.jpg" categoryname="Racing" />
          <CategoryCard imageURL="category-strategy.jpg" categoryname="Strategy" />
          <CategoryCard imageURL="product-flights.jpg" categoryname="Simulation" />
          <CategoryCard imageURL="trend2.jpg" categoryname="Sport" />
        </div>
        <ViewAllBtn />
      </div>
    </section>
  );
}
