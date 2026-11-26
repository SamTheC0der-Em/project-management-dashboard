import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Layout/Header";
import { Sidebar } from "./components/Layout/Sidebar";
import { projects } from "./data/sidebarData";

function App() {
  const [activeItem, setActiveItem] = useState("Mobile App");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isProject = projects.some((project) => project.name === activeItem);

  return (
    <div className="flex h-dvh overflow-hidden bg-[#FFFFFf]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5 lg:p-10">
          {isProject ? (
            <Dashboard key={activeItem} projectName={activeItem} />
          ) : (
            <section className="mx-auto w-full max-w-350">
              <h1 className="text-3xl font-semibold text-[#0D062D]">
                {activeItem}
              </h1>
              {/* <p className="mt-3 text-sm text-[#787486]">
                This page hasn’t been built yet.
              </p> */}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
