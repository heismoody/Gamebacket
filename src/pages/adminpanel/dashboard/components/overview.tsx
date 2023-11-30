export default function Overview() {
  return (
    <div className="flex justify-between w-full pb-5">
      <div className="w-[48%] h-fit flex flex-col gap-2 rounded-lg bg-background px-5 py-4">
        <div className="flex justify-between">
          <div className="p-2 bg-blue-200/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="w-4 h-4 fill-blue-600"
            >
              <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
            </svg>
          </div>
          <span></span>
        </div>
        <strong className="introheading-2 text-2xl">329</strong>
        <span className="descr-1 text-sm flex flex-row justify-between">
          <span>Today Orders</span>
          <span className="text-green-600 font-semibold">+10</span>
        </span>
      </div>
      <div className="w-[48%] h-fit flex flex-col gap-2 rounded-lg bg-background px-5 py-4">
        <div className="flex justify-between">
          <div className="p-2 bg-primary/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="w-4 h-4 fill-primary"
            >
              <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>
          <span></span>
        </div>
        <strong className="introheading-2 text-2xl">50,000 Tsh</strong>
        <span className="descr-1 text-sm flex flex-row justify-between">
          <span>Today Sales</span>
          <span className="text-green-600 font-semibold">+30,000 Tsh</span>
        </span>
      </div>
    </div>
  );
}
