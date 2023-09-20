import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../homeComponents/addToCartCard";

export default function MostPopular() {
  return (
    <section className="w-full flex justify-center items-center bg-[url('blur-bg1.png')] bg-no-repeat bg-cover">
        <div className="w-[1161px] py-24">
            <SectionHeader
                name="TOP GAMES"
                title="Most Popular"
                description="Most Popular Games, Loved by Gamers Worldwide, Right Here!"
            />
            <div className="w-full flex justify-between items-center py-10">
                <AddToCartCard
                    imageurl="product-racing.jpg"
                    name="F2 Championship"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="product1.jpg"
                    name="Evil Insider"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="product-flights.jpg"
                    name="Flight Simulation 10"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="product-kungfumaster.jpg"
                    name="Kungfu Master"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="product-bussimulation.jpg"
                    name="Hello Friend 4"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="product-romans.jpg"
                    name="The Romans"
                    actualprice="40,000 Tsh"
                />
            </div>
        </div>
    </section>
  )
}
