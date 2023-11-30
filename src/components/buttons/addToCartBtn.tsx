import { Link } from "react-router-dom";
import { CartItem } from "../../store/store";

export default function AddToCartBtn({...props}: CartItem) {
  const item:CartItem = {
    id: props.id,
    title: props.title,
    image: props.image,
    price: props.price
  }
  return (
    <Link to='/shoppingcart' state={[item]}>
      <button className="viewallbtn text-xs py-2 px-3 mobile:mobileshopnow">
          Shop now
      </button>
    </Link>
  )
}
