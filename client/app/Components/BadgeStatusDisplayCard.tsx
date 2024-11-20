interface BadgeStatusDisplayCardProps {
  title: string;
  description: string;
  completed: string;
  needCompleted: string;
}

export default function BadgeStatusDisplayCard({
  title,
  description,
  completed,
  needCompleted,
}: BadgeStatusDisplayCardProps) {
  const percentage =
    parseFloat(needCompleted) > 0
      ? (parseFloat(completed) / parseFloat(needCompleted)) * 100
      : 0;

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3">
      <p>{title}</p>
      <p className="text-[rgb(140,140,140)]">{description}</p>
      <div className="flex flex-col p-4 bg-[#dde5b6] rounded-lg gap-5">
        <div>
          <p>Fast responder progress</p>
          <h3>November 2024</h3>
        </div>
        <progress
          className="progress w-full"
          value={`${completed}`}
          max={`${needCompleted}`}
        ></progress>
        <div className="flex justify-between">
          <p>
            {completed} / {needCompleted} fast responses
          </p>
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
}
