import AddToCartBtn from "../../../../components/buttons/addToCartBtn";

export default function TrendCard({ ...props }: Itrendcard) {
  return (
    <div className="w-[265px] overflow-hidden rounded-sm relative">
      <img src={props.imageurl} alt="" className="imgrender" />
      <div className="w-full h-full top-0 flex items-end absolute bg-gradient-to-t from-background">
        <div className="flex flex-col gap-y-2 px-5 pb-5">
          <span className="introheading-2 text-2xl">{props.name}</span>
          <div className="flex items-center gap-x-2">
            <span
              className={`descr-1 text-base ${
                props.promoprice
                  ? "line-through text-xs"
                  : "text-primary font-medium"
              }`}
            >
              {props.actualprice}
            </span>
            {props.promoprice && (
              <span className="descr-1 text-base font-medium underline text-primary">
                {props.promoprice}
              </span>
            )}
          </div>
          <AddToCartBtn />
        </div>
      </div>
    </div>
  );
}
