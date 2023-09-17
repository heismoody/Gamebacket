import CardDetail from "../homeComponents/cardDetail"
import PreOrderCard from "./preOrderCard"

export const PreOrders = () => {
  return (
    <section className="w-full flex justify-center items-center py-20">
      <div className="w-[1161px] flex justify-between">
        <div className="flex justify-between w-[66%]">
          <PreOrderCard
            imageurl="product-basketb.jpg"
            name="Basketball 2K2"
            actualprice="40,000 Tsh"
          />
          <PreOrderCard
            imageurl="product-bussimulation.jpg"
            name="Bus Simulator 24"
            actualprice="40,000 Tsh"
          />
          <PreOrderCard
            imageurl="product-warlord.jpg"
            name="Call of Warlords"
            actualprice="40,000 Tsh"
          />
        </div>
        <div className="w-[31%] p-8 bg-[url('pattern-pre-order.png')] bg-cover">
          <CardDetail
            name="PRE-ORDER"
            title="Pre-Order Games"
            description="Be the ultimate gaming insider! Gain early access to highly anticipated titles by pre-ordering games on our platform today!"
            btnName="View All"
            preorder
          />
        </div> 
      </div>
    </section>
  )
}
