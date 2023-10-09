import AddToCartCard from "../home/homeComponents/addToCartCard";
import PageHeader from "../pageHeader";

export default function CategoryPage() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="https://c4.wallpaperflare.com/wallpaper/741/914/473/machine-race-the-game-nfs-need-for-speed-heat-hd-wallpaper-preview.jpg"
        title="Racing"
        description="Fuel your adrenaline rush with the hottest racing games on the market!

        Experience the thrill of the race with stunning visuals, realistic physics, and pulse-pounding action. From high-octane supercars to off-road rally machines, we have the perfect racing game for everyone. Whether you're a seasoned pro or a casual gamer, our racing games will keep you coming back for more. So get ready to fire up your engines and hit the track!"
      />
      <div className="flex flex-col w-[1161px] mobile:w-[90%] gap-y-10 pt-8">
        <div className="grid grid-cols-6 mobile:grid-cols-2  gap-x-[26px] gap-y-8 ">
          <AddToCartCard
            imageurl="product-flights.jpg"
            name="Plane Simulation"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-racing.jpg"
            name="F2 Championship"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-fife.jpg"
            name="FIFA 23"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-bussimulation.jpg"
            name="Bus Simulator 24"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-warlord-1.jpg"
            name="Call of Duty"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-basketb.jpg"
            name="Basketball 2k2"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-snowball.jpg"
            name="Snowball"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-romans.jpg"
            name="The Romans"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-kungfumaster.jpg"
            name="Kungfu Master"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product1.jpg"
            name="Evil Insider"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="trend1.jpg"
            name="Hello Friend 4"
            actualprice="40,000 Tsh"
          />
          <AddToCartCard
            imageurl="product-vikings.jpg"
            name="The Vikings"
            actualprice="40,000 Tsh"
          />
        </div>
      </div>
    </section>
  );
}
