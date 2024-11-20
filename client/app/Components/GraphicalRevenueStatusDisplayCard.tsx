//Components
import BarChart from "./BarChart";

interface GraphicalRevenueStatusDisplayCardProps {
  incomeData: number[];
  expenseData: number[];
  labels: string[];
}

export default function GraphicalRevenueStatusDisplayCard({
  incomeData,
  expenseData,
  labels,
}: GraphicalRevenueStatusDisplayCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 w-full">
      <div className="flex justify-between items-center">
        <p>Revenue</p>
        <p className="text-sm text-[rgb(140,140,140)]">PAST 30 DAYS</p>
      </div>
      <BarChart
        incomeData={incomeData}
        expenseData={expenseData}
        labels={labels}
      />
    </div>
  );
}
