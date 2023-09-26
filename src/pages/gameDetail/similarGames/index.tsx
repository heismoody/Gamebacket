import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../../home/homeComponents/addToCartCard";

export default function SimilarGames() {
  return (
    <div>
      <SectionHeader
        name="SIMILAR GAME"
        title="SIMILAR GAMES"
        description="Enjoy games that they are exactly the same as the one viewed"
        url=""
      />
      <div className="flex justify-between items-center py-10">
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
  );
}
