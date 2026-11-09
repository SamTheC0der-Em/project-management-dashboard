import Logo from "../../assets/Logo.svg";
import ChevronLeft from "../../assets/ChevronLeft.svg";

export const SidebarHeader = ({ collapsed, setCollapsed }) => {
  return (
    <div className="h-24 shrink-0 px-4 flex items-center justify-between border-b border-[#dbdbdb]">
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
        <img
          src={ChevronLeft}
          alt={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`transition-transform ${collapsed ? "-scale-x-100" : ""}`}
        />
      </button>
    </div>
  );
};
