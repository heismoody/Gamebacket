import CardDetail from "../homeComponents/cardDetail"
import PreOrderCard from "./preOrderCard"

export const PreOrders = () => {
  return (
    <section className="w-full flex justify-center items-center py-20">
      <div className="w-[85%] flex justify-between">
        <div className="flex justify-between w-[66%]">
          <PreOrderCard
            imageurl="product-basketb.jpg"
            name="Basketball 2K2"
            price="40,000 Tsh"
          />
          <PreOrderCard
            imageurl="product-bussimulation.jpg"
            name="Bus Simulator 24"
            price="40,000 Tsh"
          />
          <PreOrderCard
            imageurl="product-warlord.jpg"
            name="Call of Warlords"
            price="40,000 Tsh"
          />
        </div>
        <div className="w-[31%] p-8 bg-[url('pattern-pre-order.png')] bg-cover">
          <CardDetail
            name="PRE-ORDER"
            title="Pre-Order Games"
            description="Non platea viverra aliquam convallis molestie egestas integer
            tristique nam integer. Hac ut nisi, ut amet donec"
            btnName="View All"
          />
        </div> 
      </div>
    </section>
  )
}
