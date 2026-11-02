import { ChevronsRight } from "lucide-react";
import Logo from "../../assets/Logo.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";

export const SidebarHeader = ({ collapsed, setCollapsed }) => {
  return (
    <div className="h-16 shrink-0 px-4 flex items-center justify-between border-b border-[#dbdbdb]">
      {!collapsed && (
        <div className="flex items-center space-x-2">
          <img src={Logo} />
          <span className="font-semibold text-base text-[#0D062D]">
            Project M.
          </span>
        </div>
      )}

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-gray-400 hover:text-gray-700"
      >
        {collapsed ? (
          <ChevronsRight size={16} />
        ) : (
          <img src={ChevronLeft}  />
        )}
      </button>
    </div>
  );
};
