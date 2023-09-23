import { Link } from "react-router-dom";

export default function AddToCartBtn() {
  return (
    <Link to='/shoppingcart'>
      <button className="viewallbtn text-xs py-2 px-3">
          Shop now
      </button>
    </Link>
  )
}
