import { Link } from "react-router-dom";

export default function CategoryCard({...props}:IcategoryCard) {
  return (
    <Link to='/categorypage'>
    <div className="w-[210px] h-[120px] rounded overflow-hidden relative group">
      <img
        src={props.imageURL}
        alt=""
        className="imgrender group-hover:scale-110 transition"
      />
      <div className="w-full h-full top-0 flex justify-center items-end absolute bg-gradient-to-t from-black">
        <span className="introheading-2 text-2xl block pb-6 hover:text-white/70">{props.categoryname}</span>
      </div>
    </div>
    </Link>
  );
}
