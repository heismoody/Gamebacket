export default function YourOrder() {
  return (
    <>
      <span className="introheading-2 text-2xl block py-4">Your Order</span>
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
            <th className="py-4">Totals</th>
            <th className="py-4">100,000</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
