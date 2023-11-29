import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../homeComponents/addToCartCard";

export default function MostPopular() {
  return (
    <section className="w-full flex justify-center items-center bg-[url('/blur-bg1.png')] bg-no-repeat bg-cover">
        <div className="w-[1161px] mobile:w-[90%] py-24">
            <SectionHeader
                name="TOP GAMES"
                title="Most Popular"
                description="Most Popular Games, Loved by Gamers Worldwide, Right Here!"
                url=""
            />
            <div className="w-full grid grid-cols-6 gap-x-7 py-10 mobile:grid-cols-2 mobile:gap-7">
                <AddToCartCard
                    imageurl="product-racing.jpg"
                    name="F2 Championship"
                    actualprice = {40000}
                />
                <AddToCartCard
                    imageurl="product1.jpg"
                    name="Evil Insider"
                    actualprice = {40000}
                />
                <AddToCartCard
                    imageurl="product-flights.jpg"
                    name="Flight Simulation 10"
                    actualprice = {40000}
                />
                <AddToCartCard
                    imageurl="product-kungfumaster.jpg"
                    name="Kungfu Master"
                    actualprice = {40000}
                />
                <AddToCartCard
                    imageurl="product-bussimulation.jpg"
                    name="Hello Friend 4"
                    actualprice = {40000}
                />
                <AddToCartCard
                    imageurl="product-romans.jpg"
                    name="The Romans"
                    actualprice = {40000}
                />
            </div>
        </div>
    </section>
  )
}
