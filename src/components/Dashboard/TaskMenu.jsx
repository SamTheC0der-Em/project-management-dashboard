const statuses = [
  { id: "todo", label: "To Do" },
  { id: "in-progress", label: "In Progress" },
  { id: "done", label: "Done" },
];

export const TaskMenu = ({ currentStatus, taskId, moveTask }) => {
  return (
    <div className="absolute right-3 top-10 z-30 w-40 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
      <p className="px-2 py-1 text-xs text-gray-400">Move to</p>
      {statuses
        .filter((status) => status.id !== currentStatus)
        .map((status) => (
          <button
            key={status.id}
            type="button"
            onClick={() => moveTask(taskId, status.id)}
            className="w-full rounded-md px-2 py-2 text-left text-sm hover:bg-gray-100"
          >
            {status.label}
          </button>
        ))}
    </div>
  );
};
