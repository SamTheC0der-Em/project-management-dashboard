import { DashboardHero } from "./components/Dashboard/DashboardHero";
import { Header } from "./components/Layout/Header";
import { Sidebar } from "./components/Layout/Sidebar";

function App() {
  return (
    <div className="flex h-dvh overflow-hidden bg-[#F5F5F5]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header />
        <main className="min-h-0 flex-1 overflow-y-auto p-10">
          <DashboardHero />
        </main>
      </div>
    </div>
  );
}

export default App;
