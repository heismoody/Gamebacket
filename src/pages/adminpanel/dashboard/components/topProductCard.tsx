export default function TopProductCard({ ...props }: ItopProductCard) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="introheading-2 text-sm hover:text-submessage mobile:line-clamp-1">
          {props.no}
        </span>
        <div className="w-[60px] rounded overflow-hidden">
          <img src={props.imageurl} alt="" className="imgrender" />
        </div>
        <div className="flex flex-col">
          <span className="introheading-2 text-lg hover:text-submessage mobile:line-clamp-1">
            {props.title}
          </span>
          <span className="descr-1 text-sm mobile:text-xs font-medium text-primary">
            {props.price}
          </span>
        </div>
      </div>
      <span className="flex justify-center items-center w-5 h-5 p-3.5 rounded-full introheading-2 text-sm bg-red-900">
        3
      </span>
    </div>
  );
}
