import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../homeComponents/addToCartCard";

const NewRelease = () => {
  return (
    <section className="w-full flex justify-center items-center py-24">
      <div className="w-[1161px]">
        <SectionHeader
          name="NEW GAME"
          title="New Releases"
          description="Stay Ahead with Latest and Greatest Games - Explore Releases Now!"
          url=""
        />
        <div className="grid grid-cols-6 gap-x-[26px] gap-y-8 pt-20">
          <AddToCartCard
            imageurl="product-flights.jpg"
            name="Plane Simulation"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-racing.jpg"
            name="F2 Championship"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-fife.jpg"
            name="FIFA 23"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-bussimulation.jpg"
            name="Bus Simulator 24"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-warlord-1.jpg"
            name="Call of Duty"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-basketb.jpg"
            name="Basketball 2k2"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-snowball.jpg"
            name="Snowball"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-romans.jpg"
            name="The Romans"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-kungfumaster.jpg"
            name="Kungfu Master"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product1.jpg"
            name="Evil Insider"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="trend1.jpg"
            name="Hello Friend 4"
            actualprice = {40000}
          />
          <AddToCartCard
            imageurl="product-vikings.jpg"
            name="The Vikings"
            actualprice = {40000}
          />
        </div>
      </div>
    </section>
  );
};

export default NewRelease;
