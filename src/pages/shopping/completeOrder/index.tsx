import SectionHeader from "../../../components/sectionHeader";
import BillingDetails from "../shoppingComponents/billingDetails";
import PaymentDetails from "../shoppingComponents/paymentDetails";
import YourOrder from "../shoppingComponents/yourOrder";

export default function CompleteOrder() {
  return (
    <section className="flex justify-center items-center pt-28 bg-background">
      <div className="w-[1161px] mobile:w-[90%]">
        <SectionHeader
          name="CHECKOUT"
          title="Complete Your Order"
          description=""
          url=""
        />
        <div className="flex justify-between py-10 mobile:py-3 mobile:flex-col">
          <div className="w-[55%] mobile:w-full">
            <div className="bg-black w-full px-10 mobile:px-3 py-5">
              <BillingDetails/>
            </div>
            <div className="bg-black w-full px-10 mobile:px-3 py-3 my-5">
              <label htmlFor="additionalnote">Order Additional Note:</label>
              <textarea
                name="additionalnote"
                id=""
                className="w-full py-2 px-4 outline-none text-sm rounded resize-none"
                placeholder="Carry it with care its fragile"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-[43%] mobile:w-full">
            <div className="bg-black w-full px-10 mobile:px-3 py-3">
              <YourOrder/>
            </div>
            <div className="bg-black w-full px-10 mobile:px-3 py-5 mt-4">
              <PaymentDetails/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
