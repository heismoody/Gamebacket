import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../homeComponents/addToCartCard";

export default function WeeklyDeals() {
  return (
    <section className="w-full flex justify-center items-center bg-[url('/pattern-secondary.png')] py-20">
        <div className="w-[1161px]">
            <SectionHeader
                reused
                name='DEALS'
                title='Weekly Deals'
                description='Unlock Epic Savings: Explore Fresh Game Deals Every Week!'
                url=""
            />
            <div className="w-full flex justify-between items-center py-14">
                <AddToCartCard
                    imageurl="trend1.jpg"
                    name="Hello Friend 4"
                    actualprice="40,000 Tsh"
                    promoprice="20,000Tsh"
                />
                <AddToCartCard
                    imageurl="product-bussimulation.jpg"
                    name="Bus Simulator 24"
                    actualprice="40,000 Tsh"
                    promoprice="20,000Tsh"
                />
                <AddToCartCard
                    imageurl="product-flights.jpg"
                    name="Flight Simulation 10"
                    actualprice="40,000 Tsh"
                    promoprice="20,000Tsh"
                />
                <AddToCartCard
                    imageurl="product-snowball.jpg"
                    name="Snowball"
                    actualprice="40,000 Tsh"
                    promoprice="20,000Tsh"
                />
                <AddToCartCard
                    imageurl="product-romans.jpg"
                    name="The Romans"
                    actualprice="40,000 Tsh"
                    promoprice="20,000Tsh"
                />
                <AddToCartCard
                    imageurl="product1.jpg"
                    name="Evil Insider"
                    actualprice="40,000 Tsh"
                    promoprice="20,000Tsh"
                />
            </div>
        </div>
    </section>
  )
}
