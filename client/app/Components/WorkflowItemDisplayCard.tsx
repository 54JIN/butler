interface WorkflowItem {
  style: string;
  status: string;
  date: string;
  id: string;
}

interface WorkflowItemDisplayCardProps {
  data: WorkflowItem;
}

export default function WorkflowItemDisplayCard({
  data
}: WorkflowItemDisplayCardProps) {
  return (
    <div className="flex w-full gap-5 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <p>{data.style}</p>
          <p>{data.status}</p>
        </div>
        <div className="flex justify-between">
          <p>{data.date}</p>
          <p>{data.id}</p>
        </div>
      </div>
    </div>
  );
}
