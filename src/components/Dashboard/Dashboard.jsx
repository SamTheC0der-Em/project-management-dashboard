import { useState } from "react";
import { taskDataByProject } from "../../data/taskData";
import { DashboardHero } from "./DashboardHero";
import { DashboardMain } from "./DashboardMain";

export const Dashboard = ({ projectName }) => {
  const [tasks, setTasks] = useState(() => taskDataByProject[projectName] ?? []);
  const [filter, setFilter] = useState("all");
  const [activeMenu, setActiveMenu] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filter === "all" || task.status === filter;

    return matchesStatus;
  });

  function moveTask(taskId, newStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
    setActiveMenu(null);
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-350">
      <DashboardHero
        projectName={projectName}
        filter={filter}
        setFilter={setFilter}
      />
      <DashboardMain
        tasks={filteredTasks}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        moveTask={moveTask}
      />
    </div>
  );
};
