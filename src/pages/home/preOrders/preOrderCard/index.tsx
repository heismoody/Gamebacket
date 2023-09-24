import { Link } from "react-router-dom";
import AddToCart from "../../../../components/buttons/addToCartBtn";

export default function PreOrderCard({ ...props }: IpreOrderCard) {
  return (
    <div className="flex flex-col gap-3">
      <Link to='/gamedetails'>
        <div className="flex flex-col gap-3">
          <div className="w-[230px] rounded overflow-hidden">
            <img
              src={props.imageurl}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition"
            />
          </div>
          <span className="introheading-2 text-xl hover:text-submessage">{props.name}</span>
          <div className="flex items-center gap-x-2">
            <span className={`descr-1 text-base ${props.promoprice ? 'line-through text-xs' : 'text-primary font-medium'}`}>{props.actualprice}</span>
            {
              props.promoprice &&
              <span className="descr-1 text-base font-medium underline text-primary">{props.promoprice}</span>
            }
          </div>
        </div>
      </Link>
      <AddToCart />
    </div>
  );
}
