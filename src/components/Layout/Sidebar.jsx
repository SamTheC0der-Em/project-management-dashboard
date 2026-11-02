
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
      className={`min-h-screen shrink-0 bg-white border border-r border-[#dbdbdb] flex flex-col transition-all duration-300 ${collapsed ? "w-[75px]" : "w-[220px]"}`}
    >
      <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navigation
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <ProjectList
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <ThoughtCard collapsed={collapsed} />
    </aside>
  );
};
