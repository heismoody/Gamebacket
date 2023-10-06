import { useState } from "react";
import ViewAllBtn from "../../../components/buttons/viewAllBtn";
import CategoryCard from "./categoryCard";

export default function Categories() {
  const [viewall, setViewall] = useState(false);
  return (
    <section className="w-full flex justify-center items-center bg-[#1B1B2B] pb-24  pt-40 mobile:py-10">
      <div className="w-[1161px] mobile:w-[90%] flex flex-col items-center">
        <span className="introheading-2 text-[32px]">Categories</span>
        <div className="w-full grid grid-cols-5 mobile:grid-cols-2 mobile:gap-2 gap-y-6 gap-x-[25px] py-10">
          <CategoryCard imageURL="category-action.jpg" categoryname="Action" />
          <CategoryCard imageURL="category-adventure.jpg" categoryname="Adventure" />
          <CategoryCard imageURL="trend4.jpg" categoryname="Arcade" />
          <CategoryCard imageURL="category-fps.jpg" categoryname="RPG" />
          <CategoryCard imageURL="category-fight.jpg" categoryname="Fighting" />
          <CategoryCard imageURL="product-snowball.jpg" categoryname="Shooter" />
          <CategoryCard imageURL="product-racing.jpg" categoryname="Racing" />
          <CategoryCard imageURL="category-strategy.jpg" categoryname="Strategy" />
          <CategoryCard imageURL="product-flights.jpg" categoryname="Simulation" />
          <CategoryCard imageURL="trend2.jpg" categoryname="sport" />
          {viewall &&
          <>
            <CategoryCard imageURL="trend2.jpg" categoryname="Puzzle" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Casual" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Multiplayer" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Educational" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Card" />
          </>
          }
        </div>
        <span onClick={()=> setViewall(!viewall)}>
          <ViewAllBtn name={viewall ? 'View Less' : 'View All'} />
        </span>
      </div>
    </section>
  );
}
