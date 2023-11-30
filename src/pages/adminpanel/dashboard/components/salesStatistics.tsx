import { BarChart } from "../../../../components/charts/barChart";

export default function SalesStatistics() {
  return (
    <div className="p-7 rounded-lg bg-background">
      <div className="flex justify-between">
        <span className="introheading-2 text-xl">Sales Statistics</span>
        <span className="descr-1 flex-row gap-2 items-center text-xs border border-submessage rounded-md px-2">
          monthly
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-submessage w-3 h-3"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </div>
      <div>
        <BarChart/>
      </div>
    </div>
  );
}
