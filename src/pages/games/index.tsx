import CategoryCard from "../home/categories/categoryCard";
import PageHeader from "../pageHeader";

export default function Games() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/hero-news2.jpg"
        title="Games"
        description="At Game Point, we know that the right gaming accessories can make all the difference in your gaming experience. That's why we offer a wide range of high-quality accessories from top brands, all designed to help you take your gaming to the next level."
      />
      <div className="w-[1161px] mobile:w-[90%]">
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 py-8 mobile:grid-cols-1">
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
          <CategoryCard imageURL="trend2.jpg" categoryname="Puzzle" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Casual" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Multiplayer" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Educational" />
            <CategoryCard imageURL="trend2.jpg" categoryname="Card" />
        </div>
      </div>
    </section>
  );
}
