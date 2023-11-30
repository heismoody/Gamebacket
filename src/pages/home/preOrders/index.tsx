import CardDetail from "../homeComponents/cardDetail"
import PreOrderCard from "./preOrderCard"

export const PreOrders = () => {
  return (
    <section className="w-full flex justify-center items-center py-20">
      <div className="w-[1161px] mobile:w-[85%] grid grid-cols-9 gap-x-9 ">
        <div className="flex justify-between col-span-6 mobile:mobilepreordercard ">
          <PreOrderCard
            imageurl="product-basketb.jpg"
            name="Basketball 2K2"
            actualprice = {40000}
          />
          <PreOrderCard
            imageurl="product-bussimulation.jpg"
            name="Bus Simulator 24"
            actualprice = {40000}
          />
          <PreOrderCard
            imageurl="product-warlord.jpg"
            name="Call of Warlords"
            actualprice = {40000}
          />
        </div>
        <div className="col-span-3 mobile:col-span-9 mobile:order-first p-8 bg-[url('/pattern-pre-order.png')] bg-cover">
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
