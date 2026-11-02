// // import { Check, X } from 'lucide-react'
// // import BoardToolbar from './components/BoardToolbar.jsx'
// // import Header from './components/Header.jsx'
// // import ProjectHeading from './components/ProjectHeading.jsx'
// // import Sidebar from './components/Sidebar.jsx'
// // import TaskBoard from './components/TaskBoard.jsx'
// // import useProjectBoard from './hooks/useProjectBoard.js'
// // import useProjectWorkspace from './hooks/useProjectWorkspace.js'
// // import { projects } from './data/projectData.js'

// // function App() {
// //   const board = useProjectBoard()
// //   const workspace = useProjectWorkspace(board.notify)

// //   return (
// //     <div className="relative mx-auto flex h-svh min-h-[560px] w-full overflow-hidden bg-white md:my-8 md:h-[min(860px,calc(100svh-64px))] md:min-h-[610px] md:w-[calc(100vw-64px)] md:max-w-[1440px] md:rounded-3xl md:border md:border-[#e8e8ec] md:shadow-[0_24px_70px_rgba(34,31,52,.1)]">
// //       <Sidebar {...workspace.sidebarProps} projects={projects} />
// //       <section className="flex min-w-0 flex-1 flex-col" aria-label="Project workspace">
// //         <Header {...workspace.headerProps} search={board.search} onSearchChange={board.setSearch} />
// //         <main className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-5 sm:px-7 sm:pt-6">
// //           <ProjectHeading projectName={workspace.activeProject} onNotify={board.notify} />
// //           <BoardToolbar
// //             {...workspace.toolbarProps}
// //             priorityFilter={board.priorityFilter}
// //             onPriorityFilterChange={board.setPriorityFilter}
// //             dateFilter={workspace.dateFilter}
// //             dateMenuOpen={workspace.dateMenuOpen}
// //             view={board.view}
// //             onViewChange={board.setView}
// //             onNotify={board.notify}
// //           />
// //           <TaskBoard board={board} projectName={workspace.activeProject} />
// //         </main>
// //       </section>

// //       {workspace.sidebarOpen && (
// //         <button
// //           className="absolute inset-0 z-20 bg-[#1a172a]/25 md:hidden"
// //           type="button"
// //           aria-label="Close menu"
// //           onClick={() => workspace.setSidebarOpen(false)}
// //         />
// //       )}
// //       {board.toast && (
// //         <div
// //           className="fixed bottom-3 left-3 right-3 z-[60] flex min-h-11 items-center gap-2 rounded-lg border border-[#eeedf2] bg-white px-3 py-1.5 text-[11px] text-[#38354b] shadow-lg sm:bottom-6 sm:left-auto sm:right-6 sm:w-fit"
// //           role="status"
// //         >
// //           <span className="grid size-5 place-items-center rounded-full bg-[#69bd78] text-white">
// //             <Check size={13} />
// //           </span>
// //           <span className="flex-1">{board.toast}</span>
// //           <button
// //             className="grid size-7 place-items-center rounded text-[#77768a] hover:bg-[#f2f0ff]"
// //             type="button"
// //             aria-label="Dismiss notification"
// //             onClick={board.clearToast}
// //           >
// //             <X size={14} />
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default App
// //import React from "react";
// import { Sidebar } from "./components/Layout/Sidebar";
// function App() {
//   return (
//     <div className="min-h-screen bg-grsdient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all">
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar />
//       </div>
//     </div>
//   );
// }
// export default App;

import Header from "./components/Layout/Header";
import { Sidebar } from "./components/Layout/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Header/>
        <main className="p-6"></main>
      </div>
    </div>
  );
}

export default App;
