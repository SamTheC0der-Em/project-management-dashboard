import Logo from "../../assets/Logo.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";
import { X } from "lucide-react";

export const SidebarHeader = ({ collapsed, setCollapsed, onClose }) => {
  return (
    <div className="h-22.25  shrink-0 px-4 flex items-center justify-between border-b border-[#dbdbdb]">
      {!collapsed && (
        <div className="flex items-center space-x-2">
          <img src={Logo} />
          <span className="font-semibold text-base text-[#0D062D]">
            Project M.
          </span>
        </div>
      )}

      <button
        type="button"
        aria-label="Collapse navigation"
        onClick={() => setCollapsed(!collapsed)}
        className="hidden text-[#787486] hover:text-gray-700 md:block"
      >
        <img
          src={ChevronLeft}
          className={`transition-transform ${collapsed ? "-scale-x-100" : ""} `}
        />
      </button>
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="grid size-10 place-items-center text-[#787486] hover:text-gray-700 md:hidden"
      >
        <X aria-hidden="true" size={20} />
      </button>
    </div>
  );
};
