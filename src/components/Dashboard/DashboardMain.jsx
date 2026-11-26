import { DashboardColumn } from "./DashboardColumn";

const columns = [
  { id: "todo", title: "To Do", color: "#5030E5" },
  { id: "in-progress", title: "In Progress", color: "#FFA500" },
  { id: "done", title: "Done", color: "#8BC48A" },
];

export const DashboardMain = ({
  tasks,
  activeMenu,
  setActiveMenu,
  moveTask
}) => {
  return (
    <section className="mt-7 w-full pb-2">
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((column) => {
          const columnTasks = tasks.filter((task) => task.status === column.id);

          return (
            <DashboardColumn
              key={column.id}
              column={column}
              tasks={columnTasks}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              moveTask={moveTask}
             
            />
          );
        })}
      </div>
    </section>
  );
};
