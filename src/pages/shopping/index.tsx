import SectionHeader from "../../components/sectionHeader";
import CartTotals from "./shoppingComponents/cartTotals";
import ShoppingList from "./shoppingComponents/shoppingList";

export default function ShoppingCart() {
  return (
    <section className="flex justify-center items-center pt-28 bg-background">
      <div className="w-[1161px]">
        <SectionHeader name="CART" title="Shopping Cart" description="" />
        <div className="flex justify-between py-10">
          <div className="bg-black w-[63%] h-fit flex flex-col justify-center items-center">
            <ShoppingList/>
          </div>
          <div className="w-[35%] bg-black flex flex-col gap-y-3 px-8 py-5">
            <CartTotals/>
          </div>
        </div>
      </div>
    </section>
  );
}
