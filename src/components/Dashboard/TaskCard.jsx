import MoreHorizontal from "../../assets/MoreHorizontal.svg";
import MessageCircle from "../../assets/MessageIcon.svg";
import FileIcon from "../../assets/FileIcon.svg";
import { Button } from "../ui/Button";
import { TaskMenu } from "./TaskMenu";
import { avatars } from "../../data/profileImage";

export const TaskCard = ({ task, activeMenu, setActiveMenu, moveTask }) => {
  const isMenuOpen = activeMenu === task.id;

  return (
    <article className="relative rounded-xl bg-white p-3.5 shadow-[0_1px_4px_rgba(16,24,40,0.06)]">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <span
          className={`rounded px-1.5 py-0.5 text-[10px] ${
            task.priority === "High"
              ? "bg-[#ffe5e8] text-[#D8727D]"
              : task.priority === "Low"
                ? "bg-[#fff0df] text-[#D58D49]"
                : "bg-[#e6f5e1] text-[#68a85b]"
          }`}
        >
          {task.priority}
        </span>

        <Button onClick={() => setActiveMenu(isMenuOpen ? null : task.id)}>
          <img src={MoreHorizontal} />
        </Button>
      </div>

      <h3 className="text-[18px] font-semibold leading-5 text-[#0D062D]">
        {task.title}
      </h3>
      {task.images.length > 0 && (
        <div
          className={`grid gap-2 mt-3 ${task.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
        >
          {task.images.map((image, index) => (
            <img key={index} src={image} className="object-cover w-full" />
          ))}
        </div>
      )}

      <p className="mt-2 text-[12px] leading-4 text-[#787486]">
        {task.description}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-center pl-1">
          {avatars.map((avatar, index) => (
            <img
              key={avatar}
              src={avatar}
              className="-ml-2  rounded-full border-2 border-white object-cover size-6"
              style={{ zIndex: index + 1 }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-[10px] text-[#787486]">
          <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <img src={MessageCircle} />
            {task.comments} comments
          </span>
          <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <img src={FileIcon} />
            {task.attachments} files
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <TaskMenu
          currentStatus={task.status}
          taskId={task.id}
          moveTask={moveTask}
        />
      )}
    </article>
  );
};
