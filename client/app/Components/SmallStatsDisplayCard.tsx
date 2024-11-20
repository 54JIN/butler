interface SmallStatsDisplayCardProps {
  title: string;
  value: string;
}

export default function SmallStatsDisplayCard({
  title,
  value,
}: SmallStatsDisplayCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 ">
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <p className="text-sm text-[rgb(140,140,140)]">PAST 30 DAYS</p>
      </div>
      <h3 className="font-bold text-xl">{value}</h3>
    </div>
  );
}