//Components
import LineChart from "./LineChart";

interface GraphicalNetIncomeStatusDisplayCardProps {
  data: number[];
  labels: string[];
}

export default function GraphicalNetIncomeStatusDisplayCard({
  data,
  labels,
}: GraphicalNetIncomeStatusDisplayCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 w-full">
      <div className="flex justify-between items-center">
        <p>Net Income</p>
        <p className="text-sm text-[rgb(140,140,140)]">PAST 30 DAYS</p>
      </div>
      <LineChart data={data} labels={labels} />
    </div>
  );
}
