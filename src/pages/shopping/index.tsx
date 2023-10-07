import SectionHeader from "../../components/sectionHeader";
import CartTotals from "./shoppingComponents/cartTotals";
import ShoppingList from "./shoppingComponents/shoppingList";

export default function ShoppingCart() {
  return (
    <section className="flex justify-center items-center pt-28 bg-background">
      <div className="w-[1161px] mobile:w-[90%]">
        <SectionHeader name="CART" title="Shopping Cart" description="" url=""/>
        <div className="flex justify-between py-10 mobile:flex-col mobile:py-3">
          <div className="bg-black w-[63%] mobile:w-full h-fit flex flex-col justify-center items-center">
            <ShoppingList/>
          </div>
          <div className="w-[35%] mobile:w-full mobile:mt-10 bg-black flex flex-col gap-y-3 px-8 py-5">
            <CartTotals/>
          </div>
        </div>
      </div>
    </section>
  );
}
