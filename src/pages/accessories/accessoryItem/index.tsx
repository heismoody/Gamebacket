import AddToCartCard from "../../home/homeComponents/addToCartCard";
import PageHeader from "../../pageHeader";

export default function AccessoryItem() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/newsbg.jpg"
        title="Controllers"
        description="At Game Point, we know that the right gaming accessories can make all the difference in your gaming experience. That's why we offer a wide range of high-quality accessories from top brands, all designed to help you take your gaming to the next level."
      />
      <div className="w-[1161px] mobile:w-[90%]">
        <div className="grid grid-cols-6 gap-x-6 gap-y-10 py-8 mobile:grid-cols-2">
          <AddToCartCard
            imageurl="/product-racing.jpg"
            name="PS4 PAD"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="/product1.jpg"
            name="TWIN PAD"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="/product-flights.jpg"
            name="PC XBOX"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="/product-kungfumaster.jpg"
            name="GAMING MOUSE"
            actualprice="40,000 Tsh"
          />
        </div>
      </div>
    </section>
  );
}
