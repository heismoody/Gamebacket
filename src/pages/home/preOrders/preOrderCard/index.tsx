import AddToCart from "../../../../components/buttons/addToCart";

export default function PreOrderCard({...props}:IpreOrderCard) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-[230px] rounded overflow-hidden">
        <img
          src={props.imageurl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <span className="introheading-2 text-xl">{props.name}</span>
      <span className="descr-1 text-base line-through">{props.price}</span>
      <AddToCart />
    </div>
  );
}
