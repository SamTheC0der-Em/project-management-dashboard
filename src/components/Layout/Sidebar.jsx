import { useState } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { Navigation } from "./Navigation";
import { ProjectList } from "./ProjectList";
import { ThoughtCard } from "./ThoughtCard";

export const Sidebar = ({ activeItem, setActiveItem, open, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);
  const selectItem = (item) => {
    setActiveItem(item);
    onClose();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex h-dvh w-55 shrink-0 flex-col overflow-hidden border border-r border-[#dbdbdb] bg-white transition-all duration-300 md:relative md:z-auto md:h-full md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} ${collapsed ? "md:w-18.75" : "md:w-55"}`}
    >
      <SidebarHeader
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onClose={onClose}
      />
      <Navigation
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={selectItem}
      />
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain mb-10.75 ">
        <ProjectList
          collapsed={collapsed}
          activeItem={activeItem}
          setActiveItem={selectItem}
        />
      </div>
      <ThoughtCard collapsed={collapsed} />
    </aside>
  );
};
