"use client";

//Components
import SideBarNavigation from "../Components/SideBarNavigation";
import SmallStatsDisplayCard from "../Components/SmallStatsDisplayCard";
import GraphicalNetIncomeStatusDisplayCard from "../Components/GraphicalNetIncomeStatusDisplayCard";
import GraphicalRevenueStatusDisplayCard from "../Components/GraphicalRevenueStatusDisplayCard";
import GraphicalTasksCompletedStatusDisplayCard from "../Components/GraphicalTasksCompletedStatusDisplayCard";
import BadgeStatusDisplayCard from "../Components/BadgeStatusDisplayCard";
import WorkflowDisplayCard from "../Components/WorkflowDisplayCard";

//Temp Data
import DashboardFetch from "../Assets/TempData/DashboardFetch";

export default function dashboard() {
  return (
    <div className="flex flex-col min-h-screen md:flex-row p-5 gap-5 ">
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[97vw] lg:w-auto lg:static lg:left-auto lg:transform-none lg:translate-x-0 z-10">
        <SideBarNavigation />
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[63%] gap-5">
          <div className="flex flex-col gap-5 lg:flex-row w-full xl:justify-between">
            <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] ">
              <SmallStatsDisplayCard
                title="Total Earnings"
                value={`$${DashboardFetch.totalEarnings}`}
              />
            </div>
            <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] ">
              <SmallStatsDisplayCard
                title="Completed Tasks"
                value={`${DashboardFetch.completedTasks}`}
              />
            </div>
            <div className="flex flex-col gap-5 w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] ">
              <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 w-full">
                <p>Reviews</p>
                <h3 className="font-bold text-xl">
                  {DashboardFetch.review} / 5
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
            <div className="w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[28vw] 2xl:w-[20vw]">
              <WorkflowDisplayCard data={DashboardFetch.workflowItems} />
            </div>
            <div className="flex flex-col gap-5 sm:w-full md:w-full lg:w-[30vw] xl:w-[36vw] 2xl:w-[36.5vw]">
              <GraphicalNetIncomeStatusDisplayCard
                data={DashboardFetch.netIncomeStatus.netIncomeData}
                labels={DashboardFetch.netIncomeStatus.dataLabels}
              />
              <GraphicalRevenueStatusDisplayCard
                incomeData={DashboardFetch.revenueStatus.incomeData}
                expenseData={DashboardFetch.revenueStatus.expenseData}
                labels={DashboardFetch.revenueStatus.dataLabels}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <BadgeStatusDisplayCard
            title="Fast responder status"
            description="Earn a bunny badge and earn up to 3x more!"
            completed={`${DashboardFetch.badges.fastResponder.completed}`}
            needCompleted={`${DashboardFetch.badges.fastResponder.needCompleted}`}
          />
          <GraphicalTasksCompletedStatusDisplayCard data={DashboardFetch.tasksStatus.data} labels={DashboardFetch.tasksStatus.labels}/>
        </div>
      </div>
    </div>
  );
}
