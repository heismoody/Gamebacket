export default function HeaderDetails({...props}:IheaderDetails) {
  return (
    <>
      <span>{props.title}</span>
      <p className="descr-1 text-base py-4">
        {props.description}
      </p>
    </>
  );
}
