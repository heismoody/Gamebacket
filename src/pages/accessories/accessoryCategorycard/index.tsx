import { Link } from "react-router-dom";

export default function CategoryCard({ ...props }: IaccessoryCard) {
  return (
    <Link to="/accessory/item">
      <div className="relative flex items-end">
        <img src={props.image} className="imgrender" alt="" />
        <div className="absolute flex flex-col bg-gradient-to-t from-background w-full py-3 px-4">
          <span className="introheading-2 text-3xl">{props.name}</span>
          <span className="text-primary introheading-2 text-sm">
            {props.tags}
          </span>
        </div>
      </div>
    </Link>
  );
}
