//Components
import PieChart from "./PieChart";

interface GraphicalTasksCompletedStatusDisplayCardProps {
  data: number[];
  labels: string[];
}

export default function GraphicalTasksCompletedStatusDisplayCard({
  data,
  labels
}: GraphicalTasksCompletedStatusDisplayCardProps) {
  const colors = [
    "rgba(75, 192, 192, 0.7)",
    "rgba(255, 99, 132, 0.7)",
  ]; // Optional custom colors

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 w-full">
      <div className="flex justify-between items-center">
        <p>Tasks</p>
        <p className="text-sm text-[rgb(140,140,140)]">PAST 30 DAYS</p>
      </div>
      <PieChart
        data={data} labels={labels} colors={colors} 
      />
    </div>
  );
}
