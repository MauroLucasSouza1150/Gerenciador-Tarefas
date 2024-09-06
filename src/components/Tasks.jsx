import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onCheckClick, onDeleteClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onCheckClick(task.id)}
            className={`bg-gray-900 text-zinc-300 text-left w-full p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-gray-900 hover:bg-blue-600 text-zinc-300 p-2 rounded-md"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => onDeleteClick(task.id)}
            className="bg-gray-900 hover:bg-red-600 text-zinc-300 p-2 rounded-md"
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
