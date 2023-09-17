export default function NewsCard({...props}:InewsCard) {
  return (
    <div>
      <div className="w-[370px] overflow-hidden rounded">
        <img
          src={props.imageURl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <span className="introheading-2 block text-xl pt-3">
          {props.title}
        </span>
        <span className="descr-1">{props.description}</span>
      </div>
    </div>
  );
}
