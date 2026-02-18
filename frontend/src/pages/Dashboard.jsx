import { useEffect, useState } from "react";
import API from "../lib/axios";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <TaskForm refresh={fetchTasks} />

      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex justify-between bg-gray-100 p-3 mb-2 rounded"
        >
          <span>{task.title}</span>
          <button
            onClick={() => deleteTask(task._id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
