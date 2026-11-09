import  MoreHorizontal  from "../../assets/MoreHorizontal.svg";
import { projects } from "../../data/sidebarData";
import AddSquareIcon from "../../assets/AddSquareIcon.svg"
export const ProjectList = ({ collapsed, activeItem, setActiveItem }) => {
  return (
    <div className="border-t border-[#dbdbdb] px-3 py-5">
      {!collapsed && (
        <div className="flex justify-between items-center px-2 mb-3">
          <span className="text-[10px] font-semibold text-gray-400">
            MY PROJECTS
          </span>

          <button className="text-gray-400">
         <img src={AddSquareIcon} />
          </button>
        </div>
      )}

      {projects.map((project) => {
        const projectName = project.name;
        const isActive = activeItem === projectName;

        return (
          <button
            key={projectName}
            title={collapsed ? projectName : ""}
            onClick={() => setActiveItem(projectName)}
            className={`w-full flex items-center gap-2.5 px-2 py-2 rounded-md text-xs mb-1 transition-colors
              ${
                isActive
                  ? "bg-[#5030E514] text-[#0D062D] font-semibold"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: project.color }}
            />

            {!collapsed && (
              <>
                <span className="flex-1 text-left">{projectName}</span>

                {isActive && <img src={MoreHorizontal} />}
              </>
            )}
          </button>
        );
      })}
    </div>
  );
};
