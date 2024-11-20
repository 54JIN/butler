//Components
import WorkflowItemDisplayCard from "./WorkflowItemDisplayCard";

interface WorkflowItem {
  style: string;
  status: string;
  date: string;
  id: string;
}

interface WorkflowDisplayCardProps {
  data: WorkflowItem[]
}

export default function WorkflowDisplayCard({
  data,
}: WorkflowDisplayCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 w-full">
      <div>
        <h3>Workflow</h3>
      </div>
      <div className="flex flex-col w-full gap-5 h-[60vh] sm:h-[60vh] md:h-[51vh] lg:h-[51vh] xl:h-[70.8vh] 2xl:h-[76.5vh] overflow-y-scroll">
        {data.map((item, idx) => {
          return (
            <WorkflowItemDisplayCard data={item} key={idx}/>
          )
        })}
      </div>
    </div>
  );
}
