export default function BillingDetails() {
  return (
    <>
      <span className="introheading-2 text-2xl pb-4">Billing Details</span>
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
    </>
  );
}
