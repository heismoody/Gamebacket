import SectionHeader from "../../../components/sectionHeader";

export default function CompleteOrder() {
  return (
    <section className="flex justify-center items-center pt-28 bg-background">
      <div className="w-[1161px]">
        <SectionHeader
          name="CHECKOUT"
          title="Complete Your Order"
          description=""
        />
        <div className="flex justify-between py-10">
          <div className="w-[55%]">
            <div className="bg-black w-full px-10 py-5">
              <span className="introheading-2 text-2xl pb-4">
                Billing Details
              </span>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <span className="w-[50%]">
                    <label htmlFor="firstname">FirstName:</label>
                    <input
                      type="text"
                      name="firstname"
                      id=""
                      className="w-full py-2 px-4 outline-none text-sm rounded"
                      placeholder="First Name"
                    />
                  </span>
                  <span className="w-[47%]">
                    <label htmlFor="lastname">LastName:</label>
                    <input
                      type="text"
                      name="lastname"
                      id=""
                      className="w-full py-2 px-4 outline-none text-sm rounded"
                      placeholder="last Name"
                    />
                  </span>
                </div>
                <label htmlFor="phone">Phone No:</label>
                <input
                  type="tel"
                  name="phone"
                  id=""
                  className="w-full py-2 px-4 outline-none text-sm rounded"
                  placeholder="684298314"
                />
                <label htmlFor="alternativephone">Alternative PhoneNo:</label>
                <input
                  type="tel"
                  name="alternativephone"
                  id=""
                  className="w-full py-2 px-4 outline-none text-sm rounded"
                  placeholder="629780187"
                />
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="w-full py-2 px-4 outline-none text-sm rounded"
                  placeholder="mymail@gmail.com"
                />
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  name="country"
                  id=""
                  className="w-full py-2 px-4 outline-none text-sm rounded"
                  placeholder="Tanzania"
                />
                <label htmlFor="region">Region:</label>
                <input
                  type="text"
                  name="region"
                  id=""
                  className="w-full py-2 px-4 outline-none text-sm rounded"
                  placeholder="Dar es Salaam"
                />
                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  name="street"
                  id=""
                  className="w-full py-2 px-4 outline-none text-sm rounded"
                  placeholder="Sayansi - Makumbusho"
                />
              </div>
            </div>
            <div className="bg-black w-full px-10 py-3 my-5">
              <label htmlFor="additionalnote">Order Additional Note:</label>
              <textarea
                name="additionalnote"
                id=""
                className="w-full py-2 px-4 outline-none text-sm rounded resize-none"
                placeholder="Carry it with care its fragile"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-[43%]">
            <div className="bg-black w-full px-10 py-3">
              <span className="introheading-2 text-2xl block py-4">
                Your Order
              </span>
              <table className="table-auto w-full text-left">
                <thead className="introheading-2 text-base">
                  <tr>
                    <th>Products</th>
                    <th>Subtotal (Tsh)</th>
                  </tr>
                </thead>
                <tbody className="font-inter font-medium text-sm text-submessage">
                  <tr>
                    <td className="py-3">Flight Simulation 10 x 1</td>
                    <td className="py-3">50,000</td>
                  </tr>
                  <tr>
                    <td className="py-3">Call of duty x 1</td>
                    <td className="py-3">50,000</td>
                  </tr>
                  <tr className="border-t border-submessage/30">
                    <th className="py-3">Subtotal(Tsh)</th>
                    <th className="py-3">100,000</th>
                  </tr>
                  <tr>
                    <th className="py-3">Delivery</th>
                    <th className="py-3">Free Delivery</th>
                  </tr>
                </tbody>
                <tfoot className="introheading-2 text-base">
                  <tr className="border-t border-submessage/30">
                    <th className="pt-4">Totals</th>
                    <th className="pt-4">100,000</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="bg-black w-full px-10 py-5 mt-4">
              <p className="descr-1 pb-5">
                Sorry, it seems that there are no available payment methods.
                Please contact us if you require assistance or wish to make
                alternate arrangements.
              </p>
              <button className="introheading-2 py-3 px-4 text-base bg-primary w-full text-black rounded">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
