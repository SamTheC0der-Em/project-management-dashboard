import { navItems } from "../../data/sidebarData";

export const Navigation = ({ collapsed, activeItem, setActiveItem }) => {
  return (
    <nav className="px-3 py-5 space-y-1">
      {navItems.map((item) => {
        return (
          <button
            key={item.name}
            title={collapsed ? item.name : " "}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${activeItem === item.name ? "bg-indigo-50 text-indigo-600" : "text-[#787486] hover:bg-gray-50"}`}
          >
            <img src={item.icon} className="h-4.25 w-4.25 shrink-0" />
            {!collapsed && <span>{item.name}</span>}
          </button>
        );
      })}
    </nav>
  );
};
