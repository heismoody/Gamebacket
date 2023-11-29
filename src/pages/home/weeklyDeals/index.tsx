import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../homeComponents/addToCartCard";

export default function WeeklyDeals() {
  return (
    <section className="w-full flex justify-center items-center bg-[url('/pattern-secondary.png')] py-20">
        <div className="w-[1161px] mobile:w-[90%]">
            <SectionHeader
                reused
                name='DEALS'
                title='Weekly Deals'
                description='Unlock Epic Savings: Explore Fresh Game Deals Every Week!'
                url=""
            />
            <div className="w-full grid grid-cols-6 gap-x-7 py-14 mobile:grid-cols-2 mobile:gap-7 ">
                <AddToCartCard
                    imageurl="trend1.jpg"
                    name="Hello Friend 4"
                    actualprice = {40000}
                    promoprice = {20000}
                />
                <AddToCartCard
                    imageurl="product-bussimulation.jpg"
                    name="Bus Simulator 24"
                    actualprice = {40000}
                    promoprice = {20000}
                />
                <AddToCartCard
                    imageurl="product-flights.jpg"
                    name="Flight Simulation 10"
                    actualprice = {40000}
                    promoprice = {20000}
                />
                <AddToCartCard
                    imageurl="product-snowball.jpg"
                    name="Snowball"
                    actualprice = {40000}
                    promoprice = {20000}
                />
                <AddToCartCard
                    imageurl="product-romans.jpg"
                    name="The Romans"
                    actualprice = {40000}
                    promoprice = {20000}
                />
                <AddToCartCard
                    imageurl="product1.jpg"
                    name="Evil Insider"
                    actualprice = {40000}
                    promoprice = {20000}
                />
            </div>
        </div>
    </section>
  )
}
