import { Button } from "../ui/Button";
import AddTaskIcon from "../../assets/add-square.svg";
import { TaskCard } from "./TaskCard";

export const DashboardColumn = ({
  column,
  tasks,
  activeMenu,
  setActiveMenu,
  moveTask,
}) => {
  return (
    <section className="min-w-0 rounded-xl bg-[#F5F5F5] p-3 sm:p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="size-1.5 rounded-full"
            style={{ backgroundColor: column.color }}
          />
          <h2 className="text-base font-medium text-[#0D062D]">
            {column.title}
          </h2>
          <span className="grid size-5 place-items-center rounded-full bg-[#e1e1e4] text-[9px] text-[#625F6D]">
            {tasks.length}
          </span>
        </div>
        {column.id === "todo" && (
          <Button>
            <img src={AddTaskIcon} />
          </Button>
        )}
      </header>

      <div
        className="my-4 h-0.5 w-full rounded-full"
        style={{ backgroundColor: column.color }}
      />
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            moveTask={moveTask}
          />
        ))}
        {tasks.length === 0 && (
          <p className="rounded-lg border border-dashed border-[#d6d4df] px-3 py-5 text-center text-xs text-[#787486]">
            No tasks here
          </p>
        )}
      </div>
    </section>
  );
};
