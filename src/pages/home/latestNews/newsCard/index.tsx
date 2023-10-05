import { Link } from "react-router-dom";

export default function NewsCard({ ...props }: InewsCard) {
  return (
    <div className="w-[370px]">
      <Link to='/news/details'>
        <div className="w-full overflow-hidden rounded">
          <img
            src={props.imageURl}
            alt=""
            className="imgrender"
          />
        </div>
        <div>
          <span className="introheading-2 block text-xl pt-3">
            {props.title}
          </span>
          <span className="descr-1">{props.description}</span>
        </div>
      </Link>
    </div>
  );
}
