export default function CategoryCard({...props}:IcategoryCard) {
  return (
    <div className="w-[210px] rounded overflow-hidden relative">
      <img
        src={props.imageURL}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full top-0 flex justify-center items-end absolute bg-gradient-to-t from-black">
        <span className="introheading-2 text-2xl block pb-6">{props.categoryname}</span>
      </div>
    </div>
  );
}