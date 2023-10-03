export default function GameSearch() {
  return (
    <div className="flex items-center gap-x-2 border px-2 rounded-md mb-6 border-submessage">
      <input type="text" name="" id="" className="py-1 bg-transparent border-none px-2 text-white outline-none placeholder:placeholdersearch" placeholder="Search Desired Game"/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-5 h-5 stroke-submessage"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}
