export default function Avatar({...props}:Iavatar) {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden">
        <img src={props.image} alt="" className="w-full h-full object-cover"/>
    </div>
  )
}
