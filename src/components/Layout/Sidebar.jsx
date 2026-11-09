
import { useState } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { Navigation } from "./Navigation";
import { ProjectList } from "./ProjectList";
import { ThoughtCard } from "./ThoughtCard";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Mobile App");

  return (
    <aside
      className={`flex h-full shrink-0 flex-col overflow-hidden border border-r border-[#dbdbdb] bg-white transition-all duration-300 ${collapsed ? "w-[75px]" : "w-[220px]"}`}
    >
      <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navigation
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <ProjectList
          collapsed={collapsed}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
      <ThoughtCard collapsed={collapsed} />
    </aside>
  );
};
